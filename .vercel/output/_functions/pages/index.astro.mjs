import { e as createComponent, m as maybeRenderHead, s as spreadAttributes, g as addAttribute, k as renderComponent, r as renderTemplate, l as renderSlot, h as createAstro, n as renderScript } from '../chunks/astro/server_B_h8kOSL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dx66IJet.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

const $$Astro = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...!hasA11yProp(rest) && { "aria-hidden": "true" },
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/node_modules/@lucide/astro/src/Icon.astro", void 0);

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const ArrowRight = createLucideIcon("arrow-right", [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]]);

const Mail = createLucideIcon("mail", [["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }], ["rect", { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }]]);

const MessageCircle = createLucideIcon("message-circle", [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }]]);

const Plus = createLucideIcon("plus", [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]]);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="site-nav" id="site-nav"> <div class="nav-inner"> <a href="/" class="nav-brand"><span class="brand-flip"><span class="brand-flip__face brand-flip__front">tractiva<span class="brand-dot"></span></span><span class="brand-flip__face brand-flip__back">tracción activa</span></span></a> <div class="nav-actions"> <a href="https://wa.me/56994186218?text=Hola!%20Te%20escribo%20desde%20tractiva.cl%20y%20me%20gustar%C3%ADa%20potenciar%20mi%20negocio%20con%20Google%20Ads" target="_blank" rel="noopener" class="nav-link"> ${renderComponent($$result, "MessageCircle", MessageCircle, { "size": 15 })}
WhatsApp
</a> <a href="#contacto" class="nav-cta">Agendar evaluación</a> </div> </div> </nav>`;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/Navbar.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" id="hero-section" data-astro-cid-nlow4r3u> <div class="hero__container" data-astro-cid-nlow4r3u> <div class="hero__content" data-astro-cid-nlow4r3u> <h1 class="hero__title" data-astro-cid-nlow4r3u> <span class="hero-line hero-line--1" data-astro-cid-nlow4r3u><span data-astro-cid-nlow4r3u>Inviertes en Google Ads.</span></span> <span class="hero-line hero-line--2" data-astro-cid-nlow4r3u><span data-astro-cid-nlow4r3u>No llegan clientes.</span></span> <span class="hero-line hero-line--3" data-astro-cid-nlow4r3u><span class="hero__accent" data-astro-cid-nlow4r3u>Eso se acaba hoy.</span></span> </h1> <div class="hero__bottom" data-astro-cid-nlow4r3u> <p class="hero__sub" data-astro-cid-nlow4r3u>
Gestión semanal de campañas que convierte tu presupuesto<br class="hide-mobile" data-astro-cid-nlow4r3u>
en consultas reales. Sin contratos. Sin piloto automático.
</p> <a href="#contacto" class="btn-primary" data-astro-cid-nlow4r3u>
Agendar evaluación gratuita
${renderComponent($$result, "ArrowRight", ArrowRight, { "size": 16, "data-astro-cid-nlow4r3u": true })} </a> </div> </div> </div> </section> ${renderScript($$result, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/HeroSection.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/HeroSection.astro", void 0);

const $$SocialProofBar = createComponent(($$result, $$props, $$slots) => {
  const principles = [
    {
      text: "Optimizaci\xF3n real cada semana \u2014 no campa\xF1as en piloto autom\xE1tico."
    },
    { text: "Reportes que muestran exactamente cu\xE1nto cost\xF3 cada consulta." },
    { text: "Acceso completo a tu cuenta de Google Ads \u2014 siempre es tuya." }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="proof" data-astro-cid-2tytk5a6> <div class="proof__container" data-astro-cid-2tytk5a6> <div class="proof__content" data-astro-cid-2tytk5a6> <h2 class="proof__title reveal" data-astro-cid-2tytk5a6> <span class="line-reveal" data-astro-cid-2tytk5a6><span data-astro-cid-2tytk5a6>No prometemos.</span></span> <span class="line-reveal line-reveal-d1" data-astro-cid-2tytk5a6><span data-astro-cid-2tytk5a6><span class="keyword" data-astro-cid-2tytk5a6>Mostramos.</span></span></span> </h2> <p class="proof__text reveal reveal-delay-1" data-astro-cid-2tytk5a6>
Cada mes compartimos los números reales de tus campañas:<br data-astro-cid-2tytk5a6>
cuántas consultas llegaron, cuánto costó cada una y qué ajustamos.<br data-astro-cid-2tytk5a6>
Si algo no funciona, lo decimos. Y lo arreglamos.
</p> <ul class="proof__list" data-astro-cid-2tytk5a6> ${principles.map((p, i) => renderTemplate`<li${addAttribute(`proof__item reveal reveal-delay-${i + 2}`, "class")} data-astro-cid-2tytk5a6> <span class="proof__dash" data-astro-cid-2tytk5a6>—</span> <span data-astro-cid-2tytk5a6>${p.text}</span> </li>`)} </ul> </div> </div> </section> `;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/SocialProofBar.astro", void 0);

const $$SolutionSection = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      number: "01",
      title: "M\xE1s consultas, menos gasto",
      desc: "Cada peso invertido se optimiza para traer personas que realmente quieren contratar. No tr\xE1fico vac\xEDo."
    },
    {
      number: "02",
      title: "Sabes exactamente qu\xE9 funciona",
      desc: "Cada llamada, formulario y contacto se rastrea. Ves cu\xE1nto cuesta cada cliente potencial y c\xF3mo baja ese costo mes a mes."
    },
    {
      number: "03",
      title: "Tu negocio aparece primero",
      desc: "Cuando alguien busca lo que t\xFA ofreces en Google, tu negocio es el primero que ve. Todos los d\xEDas, todas las semanas."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="services" id="servicios" data-astro-cid-uzl3q5dj> <div class="services__container" data-astro-cid-uzl3q5dj> <div class="services__header reveal" data-astro-cid-uzl3q5dj> <span class="section-label" data-astro-cid-uzl3q5dj>Qué ganas</span> <h2 class="services__title" data-astro-cid-uzl3q5dj> <span class="line-reveal" data-astro-cid-uzl3q5dj><span data-astro-cid-uzl3q5dj>Tu inversión trabaja.</span></span> <span class="line-reveal line-reveal-d1" data-astro-cid-uzl3q5dj><span data-astro-cid-uzl3q5dj>Tus <span class="keyword" data-astro-cid-uzl3q5dj>clientes</span> llegan.</span></span> </h2> </div> <div class="services__list" data-astro-cid-uzl3q5dj> ${services.map((s, i) => renderTemplate`<div${addAttribute(`service-item reveal reveal-delay-${Math.min(i + 1, 4)}`, "class")} data-astro-cid-uzl3q5dj> <div class="service-row" data-astro-cid-uzl3q5dj> <span class="service-number" data-astro-cid-uzl3q5dj>${s.number}</span> <h3 class="service-title" data-astro-cid-uzl3q5dj>${s.title}</h3> <span class="service-arrow" data-astro-cid-uzl3q5dj>→</span> </div> <div class="service-detail" data-astro-cid-uzl3q5dj> <p class="service-desc" data-astro-cid-uzl3q5dj>${s.desc}</p> </div> </div>`)} </div> </div> </section> `;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/SolutionSection.astro", void 0);

const $$HowItWorksSection = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "01",
      title: "Conversaci\xF3n inicial",
      desc: "Analizamos tu negocio, tu mercado y tus objetivos en 15 minutos. Sin compromiso."
    },
    {
      number: "02",
      title: "Auditor\xEDa y propuesta",
      desc: "Si ya tienes campa\xF1as, las revisamos. Si partes de cero, dise\xF1amos la estrategia."
    },
    {
      number: "03",
      title: "Lanzamiento",
      desc: "Activamos campa\xF1as y las optimizamos cada semana. Ajustes reales, no piloto autom\xE1tico."
    },
    {
      number: "04",
      title: "Resultados medibles",
      desc: "Reporte mensual con m\xE9tricas claras: consultas, costo por lead, acciones del pr\xF3ximo mes."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="process" id="proceso" data-astro-cid-2las7mku> <div class="process__container" data-astro-cid-2las7mku> <div class="process__header reveal" data-astro-cid-2las7mku> <span class="section-label" data-astro-cid-2las7mku>Proceso</span> <h2 class="process__title" data-astro-cid-2las7mku> <span class="line-reveal" data-astro-cid-2las7mku><span data-astro-cid-2las7mku>De cero a</span></span> <span class="line-reveal line-reveal-d1" data-astro-cid-2las7mku><span data-astro-cid-2las7mku><span class="keyword" data-astro-cid-2las7mku>resultados.</span></span></span> </h2> </div> <div class="process__grid" data-astro-cid-2las7mku> ${steps.map((step, i) => renderTemplate`<div${addAttribute(`process__step reveal reveal-delay-${Math.min(i + 1, 4)}`, "class")} data-astro-cid-2las7mku> <span class="process__number" data-astro-cid-2las7mku>${step.number}</span> <h3 class="process__step-title" data-astro-cid-2las7mku>${step.title}</h3> <p class="process__step-desc" data-astro-cid-2las7mku>${step.desc}</p> </div>`)} </div> </div> </section> `;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/HowItWorksSection.astro", void 0);

const $$PosturaSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="postura" data-astro-cid-3xvg47gu> <div class="postura__container" data-astro-cid-3xvg47gu> <div class="postura__content" data-astro-cid-3xvg47gu> <span class="section-label section-label--light reveal" data-astro-cid-3xvg47gu>Postura</span> <h2 class="postura__title reveal" data-astro-cid-3xvg47gu>
Sabemos lo que se siente<br data-astro-cid-3xvg47gu>invertir y no ver resultados.
</h2> <div class="postura__manifesto" data-astro-cid-3xvg47gu> <div class="postura__bar" data-astro-cid-3xvg47gu></div> <div class="postura__statements" data-astro-cid-3xvg47gu> <div class="postura__block reveal" data-astro-cid-3xvg47gu> <p data-astro-cid-3xvg47gu>Eres emprendedor.</p> <p data-astro-cid-3xvg47gu>Tienes tu negocio. Tu marca. Tu servicio.</p> <p data-astro-cid-3xvg47gu>Cada peso que inviertes importa.</p> </div> <div class="postura__block reveal" data-astro-cid-3xvg47gu> <p data-astro-cid-3xvg47gu>Has probado Google Ads.</p> <p data-astro-cid-3xvg47gu>Has pagado.</p> <p data-astro-cid-3xvg47gu>Has esperado.</p> <p data-astro-cid-3xvg47gu>Y el teléfono no suena.</p> </div> <div class="postura__block reveal" data-astro-cid-3xvg47gu> <p data-astro-cid-3xvg47gu>Ves que otros aparecen arriba.</p> <p data-astro-cid-3xvg47gu>Ves que tu competencia recibe clientes.</p> <p data-astro-cid-3xvg47gu>Y tú sigues ajustando campañas sin claridad.</p> </div> <div class="postura__block reveal" data-astro-cid-3xvg47gu> <p data-astro-cid-3xvg47gu>No estás loco.</p> <p data-astro-cid-3xvg47gu>No es que tu negocio no funcione.</p> <p data-astro-cid-3xvg47gu>
Es que nadie está optimizando tu presupuesto como
                            debería.
</p> </div> </div> </div> <div class="postura__cierre reveal" data-astro-cid-3xvg47gu> <p class="postura__strong" data-astro-cid-3xvg47gu>
Cada peso que inviertes debe traer <span class="postura__accent" data-astro-cid-3xvg47gu>clientes.</span> </p> <p class="postura__strong" data-astro-cid-3xvg47gu>No excusas.</p> </div> </div> </div> </section> `;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/PosturaSection.astro", void 0);

const $$InvestmentSection = createComponent(($$result, $$props, $$slots) => {
  const baseFeatures = [
    "Estructuraci\xF3n completa de campa\xF1as",
    "1\u20132 campa\xF1as activas",
    "Optimizaci\xF3n semanal de pujas y negativos",
    "Dise\xF1o y testeo de anuncios",
    "Configuraci\xF3n de conversiones",
    "Reporte mensual claro",
    "Acceso directo con tu gestor"
  ];
  const crecimientoExtras = [
    "Mayor estructura de cuenta",
    "M\xE1s grupos y variantes de anuncios",
    "Testing continuo A/B",
    "Optimizaci\xF3n avanzada de presupuesto",
    "Seguimiento estrat\xE9gico mensual"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="pricing" id="planes" data-astro-cid-4a3al3o3> <div class="pricing__container" data-astro-cid-4a3al3o3> <div class="pricing__header reveal" data-astro-cid-4a3al3o3> <span class="section-label" data-astro-cid-4a3al3o3>Inversión</span> <h2 class="pricing__title" data-astro-cid-4a3al3o3> <span class="line-reveal" data-astro-cid-4a3al3o3><span data-astro-cid-4a3al3o3>Planes con estructura</span></span> <span class="line-reveal line-reveal-d1" data-astro-cid-4a3al3o3><span data-astro-cid-4a3al3o3><span class="keyword" data-astro-cid-4a3al3o3>según tu escala.</span></span></span> </h2> <p class="pricing__subtitle" data-astro-cid-4a3al3o3>
Gestión profesional de Google Ads definida por nivel de inversión publicitaria.
</p> </div> <div class="pricing__grid" data-astro-cid-4a3al3o3> <article class="pricing-card reveal reveal-delay-1" aria-label="Plan Base" data-astro-cid-4a3al3o3> <div class="pricing-card__top" data-astro-cid-4a3al3o3> <p class="pricing-card__name" data-astro-cid-4a3al3o3>Plan Base</p> <p class="pricing-card__range" data-astro-cid-4a3al3o3>
Para negocios que invierten hasta $300.000 CLP mensuales en Google Ads.
</p> </div> <div class="pricing-card__prices" data-astro-cid-4a3al3o3> <p class="pricing-card__price" data-astro-cid-4a3al3o3>$59.000 + IVA <span data-astro-cid-4a3al3o3>/ mes</span></p> <p class="pricing-card__setup" data-astro-cid-4a3al3o3>Setup inicial (una vez): $79.000 + IVA</p> </div> <ul class="pricing-card__list" data-astro-cid-4a3al3o3> ${baseFeatures.map((feature) => renderTemplate`<li data-astro-cid-4a3al3o3>${feature}</li>`)} </ul> </article> <article class="pricing-card pricing-card--recommended reveal reveal-delay-2" aria-label="Plan Crecimiento" data-astro-cid-4a3al3o3> <div class="pricing-card__badge" data-astro-cid-4a3al3o3>Recomendado</div> <div class="pricing-card__top" data-astro-cid-4a3al3o3> <p class="pricing-card__name" data-astro-cid-4a3al3o3>Plan Crecimiento</p> <p class="pricing-card__range" data-astro-cid-4a3al3o3>
Para negocios que invierten entre $300.000 y $1.000.000 CLP mensuales.
</p> </div> <div class="pricing-card__prices" data-astro-cid-4a3al3o3> <p class="pricing-card__price" data-astro-cid-4a3al3o3>$89.000 + IVA <span data-astro-cid-4a3al3o3>/ mes</span></p> <p class="pricing-card__setup" data-astro-cid-4a3al3o3>Setup inicial: $99.000 + IVA</p> </div> <p class="pricing-card__note" data-astro-cid-4a3al3o3>Incluye todo lo anterior más:</p> <ul class="pricing-card__list" data-astro-cid-4a3al3o3> ${crecimientoExtras.map((feature) => renderTemplate`<li data-astro-cid-4a3al3o3>${feature}</li>`)} </ul> </article> <article class="pricing-card reveal reveal-delay-3" aria-label="Plan Escala" data-astro-cid-4a3al3o3> <div class="pricing-card__top" data-astro-cid-4a3al3o3> <p class="pricing-card__name" data-astro-cid-4a3al3o3>Plan Escala</p> <p class="pricing-card__range" data-astro-cid-4a3al3o3>
Para inversiones superiores a $1.000.000 CLP mensuales.
</p> </div> <p class="pricing-card__scale-copy" data-astro-cid-4a3al3o3>
Estructuras avanzadas, automatización estratégica y gestión personalizada.
</p> <a class="pricing-card__cta btn-secondary" href="#contacto" data-astro-cid-4a3al3o3>
Solicitar evaluación personalizada
</a> </article> </div> <div class="pricing__footer reveal reveal-delay-4" data-astro-cid-4a3al3o3> <p data-astro-cid-4a3al3o3>Sin contrato de permanencia. Cancelas cuando quieras.</p> <p data-astro-cid-4a3al3o3>
La inversión en Google Ads se paga directamente a Google. Nosotros
        gestionamos la estrategia.
</p> </div> </div> </section> `;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/InvestmentSection.astro", void 0);

const $$FaqSection = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      q: "\xBFTengo que pagar aparte la inversi\xF3n en Google Ads?",
      a: "S\xED. Nuestro servicio cubre la gesti\xF3n y optimizaci\xF3n de tus campa\xF1as. La inversi\xF3n publicitaria se paga directo a Google y es un costo aparte que t\xFA controlas. Nosotros te asesoramos cu\xE1nto invertir seg\xFAn tu rubro y objetivos."
    },
    {
      q: "\xBFCu\xE1nto tiempo toma ver resultados?",
      a: "Las campa\xF1as se activan en los primeros 5 d\xEDas. La primera semana empiezas a recibir tr\xE1fico. Entre las semanas 2 y 4 optimizamos y empiezas a ver consultas consistentes. Desde el mes 2, las campa\xF1as est\xE1n en su punto \xF3ptimo."
    },
    {
      q: "\xBFHay contrato de permanencia?",
      a: "No. Trabajamos mes a mes. Si en alg\xFAn momento quieres pausar o cancelar, lo haces sin penalizaci\xF3n. Creemos que te quedas porque ves resultados, no porque te amarramos."
    },
    {
      q: "\xBFQu\xE9 pasa si mis campa\xF1as no funcionan?",
      a: "Cada semana revisamos m\xE9tricas y ajustamos. Si algo no rinde, lo cambiamos. Si despu\xE9s de un per\xEDodo razonable los resultados no son los esperados, lo conversamos transparentemente y evaluamos opciones juntos."
    },
    {
      q: "\xBFQui\xE9n gestiona mi cuenta?",
      a: "Un especialista dedicado que conoce tu industria. Tienes acceso directo por WhatsApp o email para consultas, y recibes un reporte mensual con todo lo que se hizo y los resultados obtenidos."
    },
    {
      q: "\xBFQu\xE9 incluye la gesti\xF3n mensual?",
      a: "Estructura de campa\xF1as, optimizaci\xF3n semanal, gesti\xF3n de palabras negativas, testeo de anuncios, seguimiento de conversiones y reporte mensual. No incluye la inversi\xF3n publicitaria ni dise\xF1o web."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="faq" id="faq" data-astro-cid-4j5dlmku> <div class="faq__container" data-astro-cid-4j5dlmku> <div class="faq__header reveal" data-astro-cid-4j5dlmku> <span class="section-label" data-astro-cid-4j5dlmku>FAQ</span> <h2 class="faq__title" data-astro-cid-4j5dlmku> <span class="line-reveal" data-astro-cid-4j5dlmku><span data-astro-cid-4j5dlmku>Preguntas</span></span> <span class="line-reveal line-reveal-d1" data-astro-cid-4j5dlmku><span data-astro-cid-4j5dlmku>frecuentes.</span></span> </h2> </div> <div class="faq__list" data-astro-cid-4j5dlmku> ${faqs.map((faq, i) => renderTemplate`<div${addAttribute(`faq-item reveal reveal-delay-${Math.min(i + 1, 4)}`, "class")} data-astro-cid-4j5dlmku> <button class="faq-trigger" type="button" aria-expanded="false" data-astro-cid-4j5dlmku> <span data-astro-cid-4j5dlmku>${faq.q}</span> <span class="faq-trigger-icon" data-astro-cid-4j5dlmku> ${renderComponent($$result, "Plus", Plus, { "size": 20, "data-astro-cid-4j5dlmku": true })} </span> </button> <div class="faq-content" data-astro-cid-4j5dlmku> <p class="faq-answer" data-astro-cid-4j5dlmku>${faq.a}</p> </div> </div>`)} </div> </div> </section> `;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/FaqSection.astro", void 0);

const $$FinalCtaSection = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="cta" id="contacto" data-astro-cid-lke6v6qo> <div class="cta__container" data-astro-cid-lke6v6qo> <div class="cta__grid" data-astro-cid-lke6v6qo> <!-- Left: headline + WA --> <div class="cta__left reveal" data-astro-cid-lke6v6qo> <h2 class="cta__title" data-astro-cid-lke6v6qo> <span class="line-reveal" data-astro-cid-lke6v6qo><span data-astro-cid-lke6v6qo>Conversemos sobre</span></span> <span class="line-reveal line-reveal-d1" data-astro-cid-lke6v6qo><span data-astro-cid-lke6v6qo>tu próximo <em data-astro-cid-lke6v6qo>cliente.</em></span></span> </h2> <p class="cta__subtitle" data-astro-cid-lke6v6qo>
Sin compromiso. 15 minutos. Analizamos tu caso gratis.
</p> <a href="https://wa.me/56994186218?text=Hola!%20Te%20escribo%20desde%20tractiva.cl%20y%20me%20gustar%C3%ADa%20potenciar%20mi%20negocio%20con%20Google%20Ads" target="_blank" rel="noopener" class="btn-primary btn-primary--dark" data-astro-cid-lke6v6qo> ${renderComponent($$result, "MessageCircle", MessageCircle, { "size": 18, "data-astro-cid-lke6v6qo": true })}
Hablar por WhatsApp
</a> </div> <!-- Right: form --> <div class="cta__right reveal reveal-delay-1" data-astro-cid-lke6v6qo> <form class="cta-form" id="contact-form" data-astro-cid-lke6v6qo> <div class="cta-form__field" data-astro-cid-lke6v6qo> <label for="cf-nombre" class="cta-form__label" data-astro-cid-lke6v6qo>Nombre</label> <input type="text" id="cf-nombre" name="nombre" required autocomplete="name" class="cta-form__input" placeholder="Tu nombre" data-astro-cid-lke6v6qo> </div> <div class="cta-form__field" data-astro-cid-lke6v6qo> <label for="cf-email" class="cta-form__label" data-astro-cid-lke6v6qo>Email</label> <input type="email" id="cf-email" name="email" required autocomplete="email" class="cta-form__input" placeholder="tu@email.com" data-astro-cid-lke6v6qo> </div> <div class="cta-form__field" data-astro-cid-lke6v6qo> <label for="cf-mensaje" class="cta-form__label" data-astro-cid-lke6v6qo>Mensaje <span class="cta-form__optional" data-astro-cid-lke6v6qo>(opcional)</span></label> <textarea id="cf-mensaje" name="mensaje" rows="3" class="cta-form__input cta-form__textarea" placeholder="Cuéntanos sobre tu negocio..." data-astro-cid-lke6v6qo></textarea> </div> <button type="submit" class="btn-primary btn-primary--dark cta-form__submit" id="cf-submit" data-astro-cid-lke6v6qo> ${renderComponent($$result, "Mail", Mail, { "size": 16, "data-astro-cid-lke6v6qo": true })} <span id="cf-btn-text" data-astro-cid-lke6v6qo>Enviar mensaje</span> </button> <p class="cta-form__status" id="cf-status" data-astro-cid-lke6v6qo></p> </form> </div> </div> </div> </section> ${renderScript($$result, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/FinalCtaSection.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/FinalCtaSection.astro", void 0);

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-gcn2mc3v> <div class="footer__container" data-astro-cid-gcn2mc3v> <div class="footer__top" data-astro-cid-gcn2mc3v> <div class="footer__brand" data-astro-cid-gcn2mc3v> <span class="footer__name" data-astro-cid-gcn2mc3v><span class="brand-flip" data-astro-cid-gcn2mc3v><span class="brand-flip__face brand-flip__front" data-astro-cid-gcn2mc3v>tractiva<span class="brand-dot" data-astro-cid-gcn2mc3v></span></span><span class="brand-flip__face brand-flip__back" data-astro-cid-gcn2mc3v>tracción activa</span></span></span>
>
<span class="footer__tagline" data-astro-cid-gcn2mc3v>Google Ads para profesionales en Chile.</span> </div> <div class="footer__links" data-astro-cid-gcn2mc3v> <a href="https://wa.me/56994186218?text=Hola!%20Te%20escribo%20desde%20tractiva.cl%20y%20me%20gustar%C3%ADa%20potenciar%20mi%20negocio%20con%20Google%20Ads" target="_blank" rel="noopener" class="footer__link" data-astro-cid-gcn2mc3v>${renderComponent($$result, "MessageCircle", MessageCircle, { "size": 14, "data-astro-cid-gcn2mc3v": true })} WhatsApp</a> </div> </div> <div class="footer__bottom" data-astro-cid-gcn2mc3v> <span class="footer__copy" data-astro-cid-gcn2mc3v>© ${(/* @__PURE__ */ new Date()).getFullYear()} tractiva. Todos los derechos reservados.</span> </div> </div> </footer> `;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/SiteFooter.astro", void 0);

const $$IntroAnimation = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="intro" id="intro-splash" data-astro-cid-xczg6fx7> <div class="intro__stage" data-astro-cid-xczg6fx7> <!-- Phase 1: "tractiva" whole --> <div class="intro__word" id="intro-word" data-astro-cid-xczg6fx7> <span class="intro__syl intro__syl--left" id="syl-left" data-astro-cid-xczg6fx7>trac</span><span class="intro__syl intro__syl--right" id="syl-right" data-astro-cid-xczg6fx7>tiva</span> </div> <!-- Phase 2: "tracción activa" + subtitle --> <div class="intro__reveal" id="intro-reveal" data-astro-cid-xczg6fx7> <span class="intro__phrase" data-astro-cid-xczg6fx7>tracción activa</span> <span class="intro__sub" data-astro-cid-xczg6fx7>para clientes con google ads</span> </div> </div> </div>  ${renderScript($$result, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/IntroAnimation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/components/IntroAnimation.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IntroAnimation", $$IntroAnimation, {})} ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "SocialProofBar", $$SocialProofBar, {})} ${renderComponent($$result2, "SolutionSection", $$SolutionSection, {})} ${renderComponent($$result2, "HowItWorksSection", $$HowItWorksSection, {})}  ${renderComponent($$result2, "PosturaSection", $$PosturaSection, {})} ${renderComponent($$result2, "InvestmentSection", $$InvestmentSection, {})} ${renderComponent($$result2, "FaqSection", $$FaqSection, {})} ${renderComponent($$result2, "FinalCtaSection", $$FinalCtaSection, {})} ${renderComponent($$result2, "SiteFooter", $$SiteFooter, {})} ` })}`;
}, "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/pages/index.astro", void 0);

const $$file = "/Users/javiernfigueroa/Documents/code/masclientes_cl/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
