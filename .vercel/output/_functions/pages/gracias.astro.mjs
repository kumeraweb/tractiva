import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B_h8kOSL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dx66IJet.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Gracias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gracias por contactarnos | tractiva", "description": "Recibimos tu mensaje correctamente. Te responderemos dentro de las pr\xF3ximas 24 horas h\xE1biles.", "canonical": "https://tractiva.cl/gracias", "data-astro-cid-27lbuprk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="thanks" data-astro-cid-27lbuprk> <section class="thanks__card" data-astro-cid-27lbuprk> <p class="thanks__eyebrow" data-astro-cid-27lbuprk>Mensaje recibido</p> <h1 class="thanks__title" data-astro-cid-27lbuprk>Gracias por contactarnos</h1> <p class="thanks__description" data-astro-cid-27lbuprk>
Tu solicitud fue enviada con éxito. Te responderemos dentro de las próximas 24 horas hábiles.
</p> <div class="thanks__actions" data-astro-cid-27lbuprk> <a href="/" class="btn-primary" data-astro-cid-27lbuprk>Volver al inicio</a> <a href="https://wa.me/56994186218?text=Hola!%20Ya%20les%20escrib%C3%AD%20por%20el%20formulario%20y%20quiero%20dar%20m%C3%A1s%20detalles." target="_blank" rel="noopener" class="btn-secondary btn-secondary--dark" data-astro-cid-27lbuprk>Hablar por WhatsApp</a> </div> </section> </main> ` })} `;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/pages/gracias.astro", void 0);

const $$file = "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/pages/gracias.astro";
const $$url = "/gracias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gracias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
