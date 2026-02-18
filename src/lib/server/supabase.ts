import { createClient } from '@supabase/supabase-js'
import type { APIContext } from 'astro'

type SupabaseUser = {
  id: string
  email?: string
}

const SUPABASE_URL = import.meta.env.SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL || ''
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY || ''
const SUPABASE_SERVICE_ROLE_KEY = import.meta.env.SUPABASE_SERVICE_ROLE_KEY || ''
const SUPABASE_LEADS_TABLE = import.meta.env.SUPABASE_LEADS_TABLE || 'leads'
const PANEL_ALLOWED_EMAILS = (import.meta.env.PANEL_ALLOWED_EMAILS || '')
  .split(',')
  .map((email: string) => email.trim().toLowerCase())
  .filter(Boolean)

export const isSupabaseConfigured = () =>
  Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_SERVICE_ROLE_KEY)

export const getSupabaseConfig = () => ({
  url: SUPABASE_URL,
  anonKey: SUPABASE_ANON_KEY,
  serviceRoleKey: SUPABASE_SERVICE_ROLE_KEY,
  leadsTable: SUPABASE_LEADS_TABLE,
  panelAllowedEmails: PANEL_ALLOWED_EMAILS
})

export const isPanelEmailAllowed = (email?: string | null) => {
  if (!email) return false
  if (PANEL_ALLOWED_EMAILS.length === 0) return false
  return PANEL_ALLOWED_EMAILS.includes(email.trim().toLowerCase())
}

export const createSupabaseAnonClient = () =>
  createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  })

export const createSupabaseServiceClient = () =>
  createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  })

const extractBearerToken = (authorizationHeader: string | null) => {
  if (!authorizationHeader) return null
  const match = authorizationHeader.match(/^Bearer\s+(.+)$/i)
  return match?.[1] || null
}

export const getRequestAccessToken = (context: APIContext) => {
  const fromHeader = extractBearerToken(context.request.headers.get('authorization'))
  if (fromHeader) return fromHeader
  return context.cookies.get('sb_access_token')?.value || null
}

export const verifySupabaseAccessToken = async (token: string): Promise<SupabaseUser | null> => {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !token) return null

  const supabase = createSupabaseAnonClient()
  const { data, error } = await supabase.auth.getUser(token)
  if (error || !data.user) return null
  return { id: data.user.id, email: data.user.email || undefined }
}

export const requirePanelUser = async (context: APIContext): Promise<SupabaseUser | null> => {
  const token = getRequestAccessToken(context)
  if (!token) return null
  const user = await verifySupabaseAccessToken(token)
  if (!user) return null
  if (!isPanelEmailAllowed(user.email)) return null
  return user
}

export const insertLead = async (lead: {
  nombre: string
  email: string
  mensaje: string
  source?: string
}) => {
  if (!isSupabaseConfigured()) return { ok: false, skipped: true }

  const supabase = createSupabaseServiceClient()
  const { error } = await supabase.from(SUPABASE_LEADS_TABLE).insert({
    nombre: lead.nombre,
    email: lead.email,
    mensaje: lead.mensaje,
    source: lead.source || 'contact_form'
  })

  if (error) throw new Error(`Insert lead failed: ${error.message}`)
  return { ok: true }
}

export const listLeads = async (limit = 100) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase no está configurado en el servidor.')
  }

  const supabase = createSupabaseServiceClient()
  const { data, error } = await supabase
    .from(SUPABASE_LEADS_TABLE)
    .select('id, nombre, email, mensaje, source, created_at')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw new Error(`List leads failed: ${error.message}`)
  return data || []
}
