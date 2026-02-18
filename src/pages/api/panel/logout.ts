import type { APIRoute } from 'astro'
import { rejectUntrustedOrigin } from '../../../lib/server/security'

export const POST: APIRoute = async (context) => {
  const originError = rejectUntrustedOrigin(context)
  if (originError) return originError

  const { cookies } = context
  cookies.delete('sb_access_token', { path: '/' })
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, max-age=0'
    }
  })
}
