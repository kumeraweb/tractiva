import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_B_h8kOSL.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C4_S_ELq.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/javiernfigueroa/Documents/code/masclientes_cl/","cacheDir":"file:///Users/javiernfigueroa/Documents/code/masclientes_cl/node_modules/.astro/","outDir":"file:///Users/javiernfigueroa/Documents/code/masclientes_cl/dist/","srcDir":"file:///Users/javiernfigueroa/Documents/code/masclientes_cl/src/","publicDir":"file:///Users/javiernfigueroa/Documents/code/masclientes_cl/public/","buildClientDir":"file:///Users/javiernfigueroa/Documents/code/masclientes_cl/dist/client/","buildServerDir":"file:///Users/javiernfigueroa/Documents/code/masclientes_cl/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gracias.DlXtliZp.css"},{"type":"inline","content":".not-found[data-astro-cid-zetdm5md]{min-height:100svh;background:radial-gradient(circle at 20% 20%,rgba(22,163,74,.14),transparent 35%),radial-gradient(circle at 80% 80%,rgba(22,163,74,.1),transparent 30%),#0a0a0a;display:grid;place-items:center;padding:7rem var(--section-px) 5rem}.not-found__section[data-astro-cid-zetdm5md]{width:min(100%,40rem);text-align:center;background:#171717b8;border:1px solid rgba(255,255,255,.08);border-radius:1.25rem;padding:clamp(2rem,5vw,3.25rem);box-shadow:0 24px 60px #00000073;backdrop-filter:blur(8px)}.not-found__code[data-astro-cid-zetdm5md]{font-family:var(--font-display);font-size:clamp(3.2rem,9vw,5rem);font-weight:700;line-height:1;letter-spacing:-.05em;color:var(--accent-light)}.not-found__title[data-astro-cid-zetdm5md]{margin-top:.8rem;font-size:clamp(2rem,5vw,2.8rem);color:var(--white)}.not-found__description[data-astro-cid-zetdm5md]{margin:1rem auto 0;max-width:34rem;font-size:1rem;line-height:1.75;color:var(--gray-300)}.not-found__actions[data-astro-cid-zetdm5md]{margin-top:1.75rem;display:flex;flex-wrap:wrap;justify-content:center;gap:.75rem}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gracias.DlXtliZp.css"},{"type":"inline","content":".thanks[data-astro-cid-27lbuprk]{min-height:100svh;background:radial-gradient(circle at 10% 12%,rgba(22,163,74,.16),transparent 34%),radial-gradient(circle at 88% 78%,rgba(22,163,74,.1),transparent 32%),#0a0a0a;display:grid;place-items:center;padding:7rem var(--section-px) 5rem}.thanks__card[data-astro-cid-27lbuprk]{width:min(100%,42rem);text-align:center;background:#171717b8;border:1px solid rgba(255,255,255,.09);border-radius:1.25rem;padding:clamp(2rem,4vw,3rem);box-shadow:0 24px 60px #00000073;backdrop-filter:blur(8px)}.thanks__eyebrow[data-astro-cid-27lbuprk]{font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:var(--accent-light)}.thanks__title[data-astro-cid-27lbuprk]{margin-top:.75rem;font-size:clamp(2rem,5vw,3rem);line-height:1.1;color:var(--white)}.thanks__description[data-astro-cid-27lbuprk]{margin-top:1rem;font-size:1rem;line-height:1.7;color:var(--gray-300)}.thanks__actions[data-astro-cid-27lbuprk]{margin-top:1.75rem;display:flex;flex-wrap:wrap;justify-content:center;gap:.75rem}\n"}],"routeData":{"route":"/gracias","isIndex":false,"type":"page","pattern":"^\\/gracias\\/?$","segments":[[{"content":"gracias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gracias.astro","pathname":"/gracias","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gracias.DlXtliZp.css"},{"type":"external","src":"/_astro/index.orv0NofH.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/javiernfigueroa/Documents/code/masclientes_cl/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/javiernfigueroa/Documents/code/masclientes_cl/src/pages/gracias.astro",{"propagation":"none","containsHead":true}],["/Users/javiernfigueroa/Documents/code/masclientes_cl/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/gracias@_@astro":"pages/gracias.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BkpEKTS-.mjs","/Users/javiernfigueroa/Documents/code/masclientes_cl/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D2MglNbL.mjs","/Users/javiernfigueroa/Documents/code/masclientes_cl/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DiXZ49j9.js","/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/HeroSection.astro?astro&type=script&index=0&lang.ts":"_astro/HeroSection.astro_astro_type_script_index_0_lang.CScY5DD4.js","/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/FinalCtaSection.astro?astro&type=script&index=0&lang.ts":"_astro/FinalCtaSection.astro_astro_type_script_index_0_lang.D4EALCuP.js","/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/IntroAnimation.astro?astro&type=script&index=0&lang.ts":"_astro/IntroAnimation.astro_astro_type_script_index_0_lang.B31Gj3iM.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/javiernfigueroa/Documents/code/masclientes_cl/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const c=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"is-visible\"),c.unobserve(t.target))})},{threshold:.12,rootMargin:\"0px 0px -40px 0px\"});document.querySelectorAll(\".reveal, .line-reveal, .keyword\").forEach(e=>c.observe(e));const i=document.getElementById(\"scroll-progress\");if(i){const e=()=>{const t=document.documentElement.scrollHeight-window.innerHeight,s=t>0?window.scrollY/t*100:0;i.style.height=s+\"%\",i.classList.toggle(\"is-active\",s>1&&s<99)};window.addEventListener(\"scroll\",e,{passive:!0}),e()}const n=document.getElementById(\"site-nav\");if(n){const e=()=>n.classList.toggle(\"is-scrolled\",window.scrollY>40);window.addEventListener(\"scroll\",e,{passive:!0}),e()}const r=document.querySelectorAll(\".brand-flip\");r.length&&setInterval(()=>{r.forEach(e=>e.classList.add(\"is-flipped\")),setTimeout(()=>r.forEach(e=>e.classList.remove(\"is-flipped\")),1500)},5e3);document.querySelectorAll(\".service-row\").forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.closest(\".service-item\");if(!t)return;const s=t.classList.contains(\"is-open\");document.querySelectorAll(\".service-item.is-open\").forEach(o=>o.classList.remove(\"is-open\")),s||t.classList.add(\"is-open\")})});document.querySelectorAll(\".faq-trigger\").forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.closest(\".faq-item\");if(!t)return;const s=t.classList.contains(\"is-open\");document.querySelectorAll(\".faq-item.is-open\").forEach(o=>{o.classList.remove(\"is-open\"),o.querySelector(\".faq-trigger\")?.setAttribute(\"aria-expanded\",\"false\")}),s||(t.classList.add(\"is-open\"),e.setAttribute(\"aria-expanded\",\"true\"))})});document.addEventListener(\"click\",e=>{const t=e.target;if(!(t instanceof Element))return;const s=t.closest(\"a\");if(!s)return;const o=s.getAttribute(\"href\")||\"\",l=o.startsWith(\"https://wa.me/\")||o.startsWith(\"http://wa.me/\")||o.includes(\"api.whatsapp.com\"),a=o.startsWith(\"tel:\");if(!l&&!a||typeof window.gtag_report_conversion!=\"function\")return;const d=e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||e.button!==0,p=s.target===\"_blank\";if(d||p){window.gtag_report_conversion();return}e.preventDefault(),window.gtag_report_conversion(s.href)});"],["/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/HeroSection.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"intro-done\",()=>{document.getElementById(\"hero-section\")?.classList.add(\"hero--ready\")});"],["/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/FinalCtaSection.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"contact-form\"),n=document.getElementById(\"cf-submit\"),o=document.getElementById(\"cf-btn-text\"),e=document.getElementById(\"cf-status\");a?.addEventListener(\"submit\",async r=>{r.preventDefault(),n.disabled=!0,o.textContent=\"Enviando...\",e.textContent=\"\",e.className=\"cta-form__status\";try{const t=await fetch(\"/api/contact\",{method:\"POST\",body:new FormData(a)});if(t.ok){window.location.href=\"/gracias\";return}else{const s=(await t.json().catch(()=>null))?.error||(t.status===403?\"Solicitud bloqueada por seguridad. Intenta recargar la página.\":\"Error al enviar. Intenta por WhatsApp.\");throw new Error(s)}}catch(t){e.textContent=t instanceof Error?t.message:\"Error al enviar. Intenta por WhatsApp.\",e.classList.add(\"cta-form__status--err\")}finally{n.disabled=!1,o.textContent=\"Enviar mensaje\"}});"],["/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/IntroAnimation.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"intro-splash\"),e=document.getElementById(\"intro-word\"),a=document.getElementById(\"intro-reveal\");document.body.style.overflow=\"hidden\";const t=o=>new Promise(d=>setTimeout(d,o));(async()=>(await t(200),e.classList.add(\"fade-in\"),await t(700),e.classList.add(\"split\"),await t(500),a.classList.add(\"show\"),await t(1100),a.classList.remove(\"show\"),await t(400),e.classList.remove(\"split\"),e.classList.add(\"final\"),await t(500),s.classList.add(\"exit\"),document.body.style.overflow=\"\",await t(400),s.remove(),document.dispatchEvent(new Event(\"intro-done\"))))();"]],"assets":["/_astro/gracias.DlXtliZp.css","/_astro/index.orv0NofH.css","/favicon.svg","/robots.txt"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"L5iAE4uKfwm2aFo2ZOrBt3VSu0hxhrmWioLP5UK4t44="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
