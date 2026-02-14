import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B_h8kOSL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dx66IJet.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 \u2014 P\xE1gina no encontrada | tractiva", "description": "La p\xE1gina que buscas no est\xE1 disponible. Vuelve al inicio para seguir revisando nuestra gesti\xF3n de Google Ads.", "canonical": "https://tractiva.cl/404", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="not-found" data-astro-cid-zetdm5md> <section class="not-found__section" data-astro-cid-zetdm5md> <p class="not-found__code" data-astro-cid-zetdm5md>404</p> <h1 class="not-found__title" data-astro-cid-zetdm5md>Página no encontrada</h1> <p class="not-found__description" data-astro-cid-zetdm5md>
Esta URL no existe o fue movida. Puedes volver al inicio para continuar con la información de
        gestión de Google Ads.
</p> <div class="not-found__actions" data-astro-cid-zetdm5md> <a href="/" class="btn-primary" data-astro-cid-zetdm5md>Volver al inicio</a> <a href="/#cta" class="btn-secondary" data-astro-cid-zetdm5md>Agendar evaluación gratuita</a> </div> </section> </main> ` })} `;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/pages/404.astro", void 0);

const $$file = "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
