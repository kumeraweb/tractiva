import type { APIRoute } from 'astro'
import { consumeRateLimit, resetRateLimit } from '../../../lib/server/rate-limit'
import {
  createSupabaseAnonClient,
  getSupabaseConfig,
  isPanelEmailAllowed
} from '../../../lib/server/supabase'

const RATE_LIMIT_MAX = Number(import.meta.env.PANEL_LOGIN_RATE_LIMIT_MAX || 8)
const RATE_LIMIT_WINDOW_SEC = Number(import.meta.env.PANEL_LOGIN_RATE_LIMIT_WINDOW_SEC || 600)

const getClientIp = (request: Request) => {
  const xff = request.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0]?.trim() || 'unknown'
  return request.headers.get('x-real-ip') || 'unknown'
}

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { url, anonKey } = getSupabaseConfig()
    if (!url || !anonKey) {
      return new Response(JSON.stringify({ error: 'Supabase no configurado.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const body = await request.json()
    const email = body?.email?.toString().trim() || ''
    const password = body?.password?.toString() || ''
    const ip = getClientIp(request)
    const rateKey = `panel-login:${ip}:${email.toLowerCase()}`

    const limit = consumeRateLimit(rateKey, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_SEC * 1000)
    if (!limit.allowed) {
      return new Response(JSON.stringify({ error: 'Demasiados intentos. Intenta más tarde.' }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(limit.retryAfterSeconds)
        }
      })
    }

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email y contraseña son requeridos.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    if (!isPanelEmailAllowed(email)) {
      return new Response(JSON.stringify({ error: 'Usuario no autorizado para este panel.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const supabase = createSupabaseAnonClient()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error || !data.session) {
      return new Response(JSON.stringify({ error: 'Credenciales inválidas.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    if (!isPanelEmailAllowed(data.user?.email)) {
      return new Response(JSON.stringify({ error: 'Usuario no autorizado para este panel.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    cookies.set('sb_access_token', data.session.access_token, {
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      path: '/',
      maxAge: data.session.expires_in || 3600
    })
    resetRateLimit(rateKey)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Panel login error:', error)
    return new Response(JSON.stringify({ error: 'No se pudo iniciar sesión.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
