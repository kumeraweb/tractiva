import type { APIRoute } from 'astro'
import { requirePanelUser } from '../../../lib/server/supabase'

export const GET: APIRoute = async (context) => {
  const user = await requirePanelUser(context)
  if (!user) {
    return new Response(JSON.stringify({ error: 'No autenticado.' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0'
      }
    })
  }

  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, max-age=0'
    }
  })
}
