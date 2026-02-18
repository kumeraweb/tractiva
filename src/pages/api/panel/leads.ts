import type { APIRoute } from 'astro'
import { listLeads, requirePanelUser } from '../../../lib/server/supabase'

export const GET: APIRoute = async (context) => {
  try {
    const user = await requirePanelUser(context)
    if (!user) {
      return new Response(JSON.stringify({ error: 'No autenticado.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const leads = await listLeads(100)
    return new Response(JSON.stringify({ success: true, leads }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Panel leads error:', error)
    return new Response(JSON.stringify({ error: 'No se pudo cargar leads.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
