# Panel Tractiva + Supabase (Auth + Leads)

Este instructivo deja operativo:
- Login de panel con Supabase Auth (`/panel`)
- Envío manual de correos desde el panel (ruta protegida)
- Guardado de leads del formulario público en Supabase
- Listado de leads dentro del panel

## 1) Crear proyecto en Supabase
1. Entra a Supabase y crea un proyecto nuevo.
2. Espera que termine el provisioning.
3. En `Project Settings > API`, copia:
   - `Project URL`
   - `anon public key`
   - `service_role key`

## 2) Crear tabla de leads (SQL)
En `SQL Editor`, ejecuta:

```sql
create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  email text not null,
  mensaje text not null default '',
  source text not null default 'contact_form',
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (email);

alter table public.leads enable row level security;
```

## 3) Políticas RLS recomendadas
El backend actual usa `service_role` para insertar/listar, así que técnicamente no necesita policies para funcionar.
Igual conviene dejar políticas base para evitar accesos anónimos:

```sql
drop policy if exists "deny anon select leads" on public.leads;
create policy "deny anon select leads"
on public.leads
for select
to anon
using (false);

drop policy if exists "deny anon insert leads" on public.leads;
create policy "deny anon insert leads"
on public.leads
for insert
to anon
with check (false);
```

## 4) Crear usuario para el panel (usuario)
Debes crear el usuario que iniciará sesión en `/panel`.

Opción recomendada:
1. `Authentication > Users > Add user`
2. Email: el correo admin que usarás en el panel
3. Password: una contraseña fuerte
4. Marca `Auto Confirm User` para evitar fricción en pruebas

Alternativa con SQL:

```sql
-- Solo referencia, usa preferentemente "Add user" desde el dashboard.
-- Si usas SQL/manual, asegúrate de confirmar el usuario.
```

## 5) Variables de entorno local (.env)
Crea/actualiza `.env` en el root del proyecto:

```bash
RESEND_API_KEY=re_xxxxxxxxx
ALLOWED_ORIGINS=https://tractiva.cl,https://www.tractiva.cl

SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
SUPABASE_LEADS_TABLE=leads
PANEL_ALLOWED_EMAILS=admin@tractiva.cl,otroadmin@tractiva.cl
PANEL_LOGIN_RATE_LIMIT_MAX=8
PANEL_LOGIN_RATE_LIMIT_WINDOW_SEC=600
PANEL_RESPONDER_RATE_LIMIT_MAX=20
PANEL_RESPONDER_RATE_LIMIT_WINDOW_SEC=600
CONTACT_RATE_LIMIT_MAX=6
CONTACT_RATE_LIMIT_WINDOW_SEC=600
```

Notas:
- `SUPABASE_LEADS_TABLE` puede omitirse si usarás `leads`.
- No expongas `SUPABASE_SERVICE_ROLE_KEY` en frontend.
- `PANEL_ALLOWED_EMAILS` es obligatorio para acceder al panel.
- `PANEL_LOGIN_RATE_LIMIT_MAX` y `PANEL_LOGIN_RATE_LIMIT_WINDOW_SEC` controlan los intentos por IP+email.
- `ALLOWED_ORIGINS` define los orígenes válidos para POST sensibles.

## 6) Variables en Vercel
En `Vercel > Project > Settings > Environment Variables`, agrega las mismas:
- `RESEND_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_LEADS_TABLE` (opcional)
- `ALLOWED_ORIGINS`
- `PANEL_ALLOWED_EMAILS`
- `PANEL_LOGIN_RATE_LIMIT_MAX` (opcional)
- `PANEL_LOGIN_RATE_LIMIT_WINDOW_SEC` (opcional)
- `PANEL_RESPONDER_RATE_LIMIT_MAX` (opcional)
- `PANEL_RESPONDER_RATE_LIMIT_WINDOW_SEC` (opcional)
- `CONTACT_RATE_LIMIT_MAX` (opcional)
- `CONTACT_RATE_LIMIT_WINDOW_SEC` (opcional)

Después:
1. Guarda variables
2. Ejecuta redeploy del proyecto

## 7) Flujo implementado en el proyecto
- `POST /api/contact`:
  - Guarda lead en Supabase (`public.leads`)
  - Aplica validación de origen confiable
  - Aplica rate limit por IP+email
  - Envía mail interno + autorespuesta
- `GET /panel`:
  - UI de login + envío manual + tabla de leads
- `POST /api/panel/login`:
  - Login por email/password con Supabase Auth
  - Aplica allowlist de emails (`PANEL_ALLOWED_EMAILS`)
  - Aplica rate limit por IP+email
  - Setea cookie httpOnly `sb_access_token`
- `POST /api/panel/logout`:
  - Borra cookie
- `GET /api/panel/me`:
  - Valida sesión actual
- `GET /api/panel/leads`:
  - Ruta protegida, lista leads
- `POST /api/responder`:
  - Ruta protegida, envía correo manual con Resend
  - Aplica validación de origen confiable + rate limit

## 8) Prueba rápida
1. `npm run dev`
2. Abrir `http://localhost:4321/panel`
3. Iniciar sesión con usuario creado en Supabase Auth
4. Enviar correo manual desde el bloque `Responder manual`
5. Confirmar que aparecen leads en bloque `Leads` tras enviar formularios en la web pública

## 9) Seguridad mínima recomendada antes de producción
1. Mantener `/panel` fuera de indexación:
   - Ya implementado con `noindex, nofollow` en la página.
2. Limitar intentos de login (rate limit) en `/api/panel/login`.
   - Ya implementado (429 con `Retry-After`).
3. Rotar `SUPABASE_SERVICE_ROLE_KEY` si se comparte por error.
4. Crear un rol/admin list permitido (por email) para bloquear accesos no deseados aunque tengan cuenta Auth.
   - Ya implementado con `PANEL_ALLOWED_EMAILS`.
