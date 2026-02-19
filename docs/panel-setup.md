# Panel Tractiva (Password Auth + Resend)

Este instructivo deja operativo:
- Login de panel con contraseña (`/panel`)
- Envío manual de correos desde el panel (ruta protegida)
- Formulario público `/api/contact` con correo interno + autorespuesta

## 1) Variables de entorno local (.env)
Configura `.env` en la raíz del proyecto:

```bash
RESEND_API_KEY=re_xxxxxxxxx
ALLOWED_ORIGINS=https://tractiva.cl,https://www.tractiva.cl
PANEL_PASSWORD=tu_password_panel_segura
PANEL_LOGIN_RATE_LIMIT_MAX=8
PANEL_LOGIN_RATE_LIMIT_WINDOW_SEC=600
PANEL_RESPONDER_RATE_LIMIT_MAX=20
PANEL_RESPONDER_RATE_LIMIT_WINDOW_SEC=600
CONTACT_RATE_LIMIT_MAX=6
CONTACT_RATE_LIMIT_WINDOW_SEC=600
```

Notas:
- `ALLOWED_ORIGINS` define los orígenes válidos para requests sensibles.
- `PANEL_PASSWORD` protege el acceso al panel mediante cookie de sesión `httpOnly`.
- Los límites de rate limit son opcionales; si no se definen, se usan defaults seguros.

## 2) Variables en Vercel
En `Vercel > Project > Settings > Environment Variables`, agrega:

- `RESEND_API_KEY`
- `ALLOWED_ORIGINS`
- `PANEL_PASSWORD`
- `PANEL_LOGIN_RATE_LIMIT_MAX` (opcional)
- `PANEL_LOGIN_RATE_LIMIT_WINDOW_SEC` (opcional)
- `PANEL_RESPONDER_RATE_LIMIT_MAX` (opcional)
- `PANEL_RESPONDER_RATE_LIMIT_WINDOW_SEC` (opcional)
- `CONTACT_RATE_LIMIT_MAX` (opcional)
- `CONTACT_RATE_LIMIT_WINDOW_SEC` (opcional)

Después:
1. Guardar variables.
2. Ejecutar redeploy.

## 3) Flujo implementado
- `POST /api/contact`:
  - Valida origen confiable.
  - Aplica rate limit por IP+email.
  - Envía correo interno + autorespuesta con Resend.
- `GET /panel`:
  - UI con login por contraseña.
  - Formulario para envío manual de correos.
  - Selector formato texto/HTML y botón de template.
- `POST /api/panel/login`:
  - Valida `PANEL_PASSWORD`.
  - Aplica rate limit por IP.
  - Setea cookie de sesión `httpOnly` (secure en producción, sameSite strict).
- `POST /api/panel/logout`:
  - Borra cookie de sesión.
- `GET /api/panel/me`:
  - Informa si la sesión es válida.
- `POST /api/responder`:
  - Requiere sesión de panel válida.
  - Valida origen confiable.
  - Aplica rate limit.
  - Envía correo manual con Resend desde `Tractiva <hola@tractiva.cl>`.

## 4) Prueba rápida
1. `npm run dev`
2. Abrir `http://localhost:4321/panel`
3. Iniciar sesión con `PANEL_PASSWORD`
4. Enviar correo manual desde `Responder manual`
5. Probar formulario público para verificar correo interno + autorespuesta

## 5) Seguridad mínima recomendada
1. Mantener `/panel` fuera de indexación (`noindex, nofollow`).
2. Definir `PANEL_PASSWORD` largo y rotarlo periódicamente.
3. Mantener `ALLOWED_ORIGINS` acotado a dominios confiables.
4. Revisar respuestas `429` si hay abuso y ajustar rate limits.
