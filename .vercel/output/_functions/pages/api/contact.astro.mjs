import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_LmR9qM6F_MdKCb5SBCBMHWrDrGikhWgdU");
const POST = async ({ request }) => {
  try {
    if (false) ;
    const formData = await request.formData();
    const nombre = formData.get("nombre")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const mensaje = formData.get("mensaje")?.toString() || "";
    if (!nombre || !email) {
      return new Response(JSON.stringify({ error: "Nombre y email son requeridos." }), { status: 400 });
    }
    const internalEmailResult = await resend.emails.send({
      from: "Tractiva <contacto@kumeraweb.com>",
      to: "contacto@kumeraweb.com",
      subject: `Nuevo contacto — ${nombre}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; padding: 24px; max-width: 520px;">
          <h2 style="font-size: 20px; color: #0f172a; margin: 0 0 20px;">Nuevo contacto desde tractiva.cl</h2>
          <table style="font-size: 15px; color: #334155; line-height: 1.6;">
            <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Nombre</td><td>${nombre}</td></tr>
            <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Email</td><td>${email}</td></tr>
            ${mensaje ? `<tr><td style="padding: 6px 12px 6px 0; font-weight: 600; vertical-align: top;">Mensaje</td><td>${mensaje}</td></tr>` : ""}
          </table>
        </div>
      `
    });
    if (internalEmailResult.error) {
      console.error("Error Resend (interno):", internalEmailResult.error);
      return new Response(JSON.stringify({ error: "No se pudo enviar el correo interno." }), { status: 502 });
    }
    const autoReplyResult = await resend.emails.send({
      from: "Tractiva <contacto@kumeraweb.com>",
      to: email,
      subject: "Recibimos tu mensaje ✔️",
      html: `
        <div style="background: #000; padding: 40px 0; font-family: -apple-system, sans-serif;">
          <div style="max-width: 480px; margin: 0 auto; padding: 32px;">
            <h2 style="font-size: 24px; font-weight: 700; color: #fff; margin: 0 0 16px;">
              Hola ${nombre} 👋
            </h2>
            <p style="font-size: 15px; line-height: 1.7; color: #94a3b8; margin: 0 0 24px;">
              Tu mensaje llegó correctamente. Te responderemos dentro de las próximas <strong style="color: #fff;">24 horas</strong>.
            </p>
            <a href="https://wa.me/56994186218"
              style="display: inline-block; padding: 12px 24px; background: #22c55e; color: #000; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600;">
              Escribir por WhatsApp
            </a>
            <hr style="margin: 32px 0; border: 0; border-top: 1px solid #1e293b;" />
            <p style="font-size: 13px; color: #475569; margin: 0;">
              tractiva — Google Ads para profesionales en Chile<br />
              © ${(/* @__PURE__ */ new Date()).getFullYear()} Kümera Servicios Digitales
            </p>
          </div>
        </div>
      `
    });
    if (autoReplyResult.error) {
      console.error("Error Resend (autorespuesta):", autoReplyResult.error);
      return new Response(JSON.stringify({ error: "Mensaje recibido, pero la confirmación falló." }), { status: 502 });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return new Response(JSON.stringify({ error: "Error al enviar." }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
