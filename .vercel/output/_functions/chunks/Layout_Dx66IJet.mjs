import { e as createComponent, r as renderTemplate, n as renderScript, l as renderSlot, o as renderHead, u as unescapeHTML, g as addAttribute, h as createAstro } from './astro/server_B_h8kOSL.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const SITE_URL = "https://tractiva.cl";
  const {
    title = "Gesti\xF3n de Google Ads en Chile \u2014 Campa\xF1as que Generan Clientes | tractiva",
    description = "Gestionamos campa\xF1as de Google Ads para profesionales y pymes en Chile. Optimizaci\xF3n semanal, reportes claros y clientes reales desde $50.000/mes. Sin contratos de permanencia.",
    canonical = SITE_URL
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es-CL"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="index, follow"><link rel="canonical"', "><!-- SEO Core --><title>", '</title><meta name="description"', '><meta name="keywords" content="google ads chile, gesti\xF3n google ads, agencia google ads santiago, campa\xF1as google ads pymes, publicidad google chile, sem chile, google ads profesionales, ads para emprendedores chile"><meta name="author" content="tractiva"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:site_name" content="tractiva"><meta property="og:locale" content="es_CL"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><!-- Theme --><meta name="theme-color" content="#000000"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=AW-17952824212"><\/script><script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n      gtag("config", "AW-17952824212");\n\n      function gtag_report_conversion(url) {\n        const callback = function () {\n          if (typeof url !== "undefined") {\n            window.location = url;\n          }\n        };\n        gtag("event", "conversion", {\n          send_to: "AW-17952824212/RoL-CLqotvgbEJS3yfBC",\n          value: 1.0,\n          currency: "CLP",\n          event_callback: callback,\n        });\n        return false;\n      }\n      window.gtag_report_conversion = gtag_report_conversion;\n    <\/script><!-- Schema.org Structured Data --><script type="application/ld+json">', "<\/script>", '</head> <body> <div class="scroll-progress" id="scroll-progress"></div> ', " ", " </body> </html>"])), addAttribute(canonical, "href"), title, addAttribute(description, "content"), addAttribute(canonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "tractiva",
    description: "Gesti\xF3n profesional de campa\xF1as de Google Ads para pymes y profesionales en Chile.",
    url: SITE_URL,
    telephone: "+56994186218",
    email: "contacto@kumeraweb.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Santiago"
    },
    areaServed: {
      "@type": "Country",
      name: "Chile"
    },
    priceRange: "$$",
    currenciesAccepted: "CLP",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Google Ads",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Setup inicial de campa\xF1a Google Ads",
          price: "75000",
          priceCurrency: "CLP",
          description: "Configuraci\xF3n completa de cuenta, campa\xF1as, grupos de anuncios y landing page incluida."
        },
        {
          "@type": "Offer",
          name: "Gesti\xF3n mensual de Google Ads",
          price: "50000",
          priceCurrency: "CLP",
          description: "Optimizaci\xF3n semanal, reportes de costo por lead, acceso total a la cuenta."
        }
      ]
    },
    sameAs: ["https://wa.me/56994186218"]
  })), renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
