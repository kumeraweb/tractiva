import type { APIRoute } from 'astro'
import { consumeRateLimit, resetRateLimit } from '../../../lib/server/rate-limit'
import { getClientIp, rejectUntrustedOrigin } from '../../../lib/server/security'
import {
  createSupabaseAnonClient,
  getSupabaseConfig,
  isPanelEmailAllowed
} from '../../../lib/server/supabase'

const RATE_LIMIT_MAX = Number(import.meta.env.PANEL_LOGIN_RATE_LIMIT_MAX || 8)
const RATE_LIMIT_WINDOW_SEC = Number(import.meta.env.PANEL_LOGIN_RATE_LIMIT_WINDOW_SEC || 600)

const authErrorResponse = () =>
  new Response(JSON.stringify({ error: 'Credenciales inválidas.' }), {
    status: 401,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, max-age=0'
    }
  })

export const POST: APIRoute = async (context) => {
  try {
    const originError = rejectUntrustedOrigin(context)
    if (originError) return originError

    const { request, cookies } = context
    const { url, anonKey } = getSupabaseConfig()
    if (!url || !anonKey) {
      return new Response(JSON.stringify({ error: 'Supabase no configurado.' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0'
        }
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
          'Cache-Control': 'no-store, max-age=0',
          'Retry-After': String(limit.retryAfterSeconds)
        }
      })
    }

    if (!email || !password) {
      return authErrorResponse()
    }

    if (!isPanelEmailAllowed(email)) {
      return authErrorResponse()
    }

    const supabase = createSupabaseAnonClient()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error || !data.session) {
      return authErrorResponse()
    }

    if (!isPanelEmailAllowed(data.user?.email)) {
      return authErrorResponse()
    }

    cookies.set('sb_access_token', data.session.access_token, {
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'strict',
      path: '/',
      maxAge: data.session.expires_in || 3600
    })
    resetRateLimit(rateKey)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0'
      }
    })
  } catch (error) {
    console.error('Panel login error:', error)
    return new Response(JSON.stringify({ error: 'No se pudo iniciar sesión.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0'
      }
    })
  }
}
