import { siteConfig } from "../lib/site-config";

export const WHATSAPP_NUMBER = "34609881656";
export const WHATSAPP_MESSAGE =
  "Hola Roberto, quiero hablar contigo sobre una web o sistema digital para mi negocio.";
export const GOOGLE_CALENDAR_LINK = "https://calendar.app.google/r3uhjT7JKmDBcBxh9";

export const SOCIAL_LINKS = siteConfig.socialLinks;

export function buildWhatsappLink(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type HeroSignal = {
  label: string;
  value: string;
  detail: string;
};

export const HERO_SIGNALS: HeroSignal[] = [
  {
    label: "Qué hago",
    value: "Webs, automatización y producto",
    detail: "Landings, sistemas web y pruebas de producto con criterio técnico y salida real.",
  },
  {
    label: "Cómo trabajo",
    value: "Sprints claros y entregables útiles",
    detail: "Proceso directo, decisiones visibles y foco en publicar algo que sirva de verdad.",
  },
  {
    label: "Qué lo respalda",
    value: "XEMOS, prácticas y trabajo público",
    detail: "Premio Teleco Games, repositorio público y bitácora técnica en marcha.",
  },
];

export type ServicePack = {
  title: string;
  price: string;
  solves: string;
  includes: string[];
  fit: string;
  ctaLabel: string;
  ctaMessage: string;
  proofLabel: string;
  proofHref: string;
};

export const SERVICE_PACKS: ServicePack[] = [
  {
    title: "Landing Sprint 48h",
    price: "590€",
    solves: "Salir rápido con una landing clara, móvil y lista para captar contactos sin semanas de bloqueo.",
    includes: [
      "Wireframe y estructura comercial base",
      "Copy inicial y CTA a WhatsApp o formulario",
      "Deploy y ajustes ligeros de salida",
    ],
    fit: "Para negocios, freelancers o lanzamientos que necesitan publicar ya.",
    ctaLabel: "Quiero esta landing",
    ctaMessage:
      "Hola Roberto, me interesa el pack Landing Sprint 48h de 590€. Quiero saber si encaja con mi proyecto.",
    proofLabel: "Ver post del sprint",
    proofHref: "/blog/actualizacion-real-landing-pack-48h",
  },
  {
    title: "Automatización IA ligera",
    price: "490€",
    solves: "Quitar tareas repetitivas y montar un flujo simple con IA sin convertir el proyecto en una obra infinita.",
    includes: [
      "Diagnóstico del flujo a automatizar",
      "Prompting, integración ligera o prototipo funcional",
      "Entrega con prueba y guía de uso",
    ],
    fit: "Para negocio pequeño o equipo que quiere ahorrar tiempo en contenido, soporte o procesos internos.",
    ctaLabel: "Quiero automatizar esto",
    ctaMessage:
      "Hola Roberto, me interesa el pack Automatización IA ligera de 490€. Quiero contarte el flujo que quiero mejorar.",
    proofLabel: "Ver caso del lab de vídeo",
    proofHref: "/blog/actualizacion-real-grok-video-lab",
  },
  {
    title: "Web local con WhatsApp y mapa",
    price: "690€",
    solves: "Dar presencia útil a un negocio local con menú, ubicación, horario y CTA directo sin depender solo de redes.",
    includes: [
      "Home comercial para móvil y escritorio",
      "Mapa, horario, CTA de WhatsApp y secciones de confianza",
      "Estructura pensada para captar pedidos o reservas",
    ],
    fit: "Para kebabs, barberías, peluquerías, bares y negocios de proximidad.",
    ctaLabel: "Quiero esta web local",
    ctaMessage:
      "Hola Roberto, me interesa la Web local con WhatsApp y mapa de 690€. Quiero enseñarte mi negocio y ver si encaja.",
    proofLabel: "Ver caso Kebab House",
    proofHref: "/blog/actualizacion-real-kebab-house-conversion",
  },
];

export type CaseStudy = {
  title: string;
  eyebrow: string;
  problem: string;
  solution: string;
  expectedResult: string;
  proofLabel: string;
  proofHref: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Kebab House",
    eyebrow: "Caso de negocio local",
    problem: "Negocio sin una web propia clara para enseñar menú, ubicación y pedido directo.",
    solution: "Landing enfocada a móvil con CTA de WhatsApp, mapa, horario y menú visual.",
    expectedResult: "Más pedidos directos y menos fricción para quien ya está listo para escribir o reservar.",
    proofLabel: "Leer el caso",
    proofHref: "/blog/actualizacion-real-kebab-house-conversion",
  },
  {
    title: "Landing Sprint 48h",
    eyebrow: "Caso de salida rápida",
    problem: "Proyecto bloqueado por no tener una página simple que explique el valor y recoja contactos.",
    solution: "Sistema de landing corto: propuesta de valor, estructura comercial, CTA y deploy en dos días.",
    expectedResult: "Tener una salida pública seria para validar interés, lanzar campaña o abrir conversaciones.",
    proofLabel: "Ver actualización real",
    proofHref: "/blog/actualizacion-real-landing-pack-48h",
  },
  {
    title: "XEMOS",
    eyebrow: "Prueba de ejecución técnica",
    problem: "Integrar hardware, lectura de entorno y app en una sola pieza sin perder control del sistema.",
    solution: "Cubo IoT con sensores, pantalla, conectividad y aplicación complementaria para monitorización.",
    expectedResult: "Demostrar que la ejecución técnica aguanta también cuando el producto sale del navegador.",
    proofLabel: "Ver repo de XEMOS",
    proofHref: SOCIAL_LINKS.xemos,
  },
];

export type SkillMetric = {
  label: string;
  score: number;
  summary: string;
};

export const SKILL_METRICS: SkillMetric[] = [
  {
    label: "React / Redux",
    score: 92,
    summary: "Interfaces con estado complejo, componentes reutilizables y entregas orientadas a negocio.",
  },
  {
    label: "Python / Flask",
    score: 84,
    summary: "Servicios, automatización y lógica backend para flujos operativos reales.",
  },
  {
    label: "JavaScript",
    score: 93,
    summary: "Base fuerte para frontend moderno, integraciones y optimización de experiencia.",
  },
  {
    label: "HTML / CSS / Tailwind",
    score: 96,
    summary: "Dirección visual, accesibilidad y sistemas UI de alto contraste y carga rápida.",
  },
  {
    label: "Java / PHP",
    score: 72,
    summary: "Capacidad para stacks empresariales y mantenimiento de arquitecturas robustas.",
  },
  {
    label: "SQL / Datos",
    score: 79,
    summary: "Consultas limpias, estructura de datos y soporte a paneles y automatizaciones.",
  },
  {
    label: "Angular / Ionic",
    score: 76,
    summary: "Experiencia en apps híbridas y aplicaciones conectadas a hardware.",
  },
  {
    label: "Hardware / IoT",
    score: 89,
    summary: "Sensores, ESP32 y producto técnico más allá del navegador.",
  },
];

export type SkillCluster = {
  title: string;
  eyebrow: string;
  description: string;
};

export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    eyebrow: "Frontend",
    title: "Interfaces inmersivas que no sacrifican claridad",
    description:
      "Trabajo con React, Next.js y Tailwind para diseñar experiencias con jerarquía visual limpia, velocidad móvil y foco claro en conversión.",
  },
  {
    eyebrow: "Backend",
    title: "Automatización y lógica que aterrizan en negocio",
    description:
      "Uso Python, Flask, Node.js y servicios conectados para soportar formularios, procesos internos, contenido automatizado y pruebas de producto.",
  },
  {
    eyebrow: "IoT",
    title: "Puente entre hardware, datos y producto",
    description:
      "XEMOS resume esa capa: sensores, lectura de entorno, app complementaria y una visión pragmática de cómo se comporta la tecnología fuera del navegador.",
  },
];

export type CareerEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  impact: string;
  tags: string[];
};

export const CAREER_ENTRIES: CareerEntry[] = [
  {
    id: "sports-innovation-academy",
    company: "Sports Innovation Academy",
    role: "Desarrollador web en prácticas",
    period: "Marzo 2024 - Junio 2024",
    summary:
      "Proyecto full stack con React, Redux, Python y Flask, orientado a producto y con necesidad de resolver problemas reales en equipo.",
    impact:
      "Las recomendaciones de supervisión destacan compromiso, capacidad para resolver problemas y actitud proactiva durante el desarrollo.",
    tags: ["React", "Redux", "Python", "Flask"],
  },
  {
    id: "xemos",
    company: "XEMOS",
    role: "Proyecto IoT y TFG",
    period: "Marzo 2024 - Junio 2024",
    summary:
      "Desarrollo de un cubo conectado con sensores, lectura de temperatura y humedad, pantalla y app complementaria para monitorización y ajuste remoto.",
    impact:
      "El proyecto obtuvo el primer premio en la fase clasificatoria de II Teleco Games y quedó asociado a un trabajo académico de alta exigencia técnica.",
    tags: ["ESP32", "Sensores", "Ionic Angular", "IoT"],
  },
  {
    id: "intex",
    company: "Sistemas de Información Intex S.L.",
    role: "Mecánico / Sistemas IT",
    period: "2019 - 2020",
    summary:
      "Gestión de reparaciones, incidencias, RMAs y stock web, con contacto directo con hardware y operación diaria.",
    impact:
      "Ese tramo me dio una base pragmática: la tecnología no solo tiene que verse bien, también tiene que funcionar bajo presión.",
    tags: ["Hardware", "RMA", "Stock", "Soporte"],
  },
  {
    id: "roots",
    company: "Valle del Jerte / Vilariño",
    role: "Operaciones y logística",
    period: "2022",
    summary:
      "Etapa de trabajo físico exigente que consolidó disciplina, adaptación rápida y responsabilidad sostenida.",
    impact:
      "Esa capa humana sigue visible en la forma de trabajar: constancia, aguante y cero postureo técnico.",
    tags: ["Disciplina", "Adaptación", "Equipo"],
  },
];

export type Credential = {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

export const CREDENTIALS: Credential[] = [
  {
    eyebrow: "Premio",
    title: "II Teleco Games 2024",
    description:
      "Primer premio en fase clasificatoria, categoría equipos (CAT. III), con diploma aportado y referencia pública en LinkedIn.",
    href: SOCIAL_LINKS.linkedin,
    cta: "Ver LinkedIn",
  },
  {
    eyebrow: "Proyecto",
    title: "XEMOS",
    description:
      "Cubo IoT con sensores, pantalla y app conectada para monitorización de entorno. Repositorio público disponible en GitHub.",
    href: SOCIAL_LINKS.xemos,
    cta: "Ver repo",
  },
  {
    eyebrow: "Respaldo",
    title: "Recomendaciones públicas",
    description:
      "Supervisores y compañeros destacan resolución de problemas, compromiso con el trabajo y capacidad para mejorar un proyecto en marcha.",
    href: SOCIAL_LINKS.linkedin,
    cta: "Leer recomendaciones",
  },
];

export type Recommendation = {
  name: string;
  role: string;
  context: string;
  excerpt: string;
};

export const RECOMMENDATIONS: Recommendation[] = [
  {
    name: "Andrei Chiorian",
    role: "Software Developer",
    context: "Supervisión directa durante prácticas",
    excerpt:
      "Destaca compromiso, capacidad para resolver problemas de manera eficiente y una actitud proactiva que hizo avanzar el proyecto.",
  },
  {
    name: "Álvaro Morón González",
    role: "Desarrollador Web Junior",
    context: "Compañero en TFG y Teleco Games",
    excerpt:
      "Subraya facilidad para entender conceptos complejos, superar bloqueos técnicos y el trabajo conjunto con XEMOS hasta lograr el premio regional.",
  },
  {
    name: "Eduardo Nella Calzado",
    role: "Software Developer",
    context: "Seguimiento durante FCT",
    excerpt:
      "Remarca trato profesional, responsabilidad constante y una forma de trabajar seria y sostenida.",
  },
];

export type RouteCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
  note: string;
};

export const MAIN_ROUTES: RouteCard[] = [
  {
    title: "Blog técnico",
    description:
      "Bitácora de trabajo real con posts propios, piezas automatizadas y señales útiles para reforzar autoridad.",
    href: "/blog",
    cta: "Ir al blog",
    note: "Proceso, autoridad y SEO vivo.",
  },
  {
    title: "Música y poesía",
    description:
      "La capa creativa de Robbe360, con piezas cortas y una narrativa que humaniza la marca sin perder estructura.",
    href: "/musica",
    cta: "Ir a música",
    note: "Capa humana y narrativa.",
  },
  {
    title: "Proyectos y Labs IA",
    description:
      "Casos, referencias y laboratorios de vídeo, voz y TTS para enseñar lo que ya está construido y lo que se está validando.",
    href: "/proyectos",
    cta: "Ir a proyectos",
    note: "Casos útiles y laboratorios.",
  },
];

export type ProjectReference = {
  title: string;
  eyebrow: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  href: string;
  cta: string;
};

export const PROJECT_REFERENCES: ProjectReference[] = [
  {
    title: "Kebab House",
    eyebrow: "Negocio local",
    problem: "El negocio necesita una presencia propia que convierta visitas en pedidos sin depender solo de redes.",
    approach: "Landing con menú visual, mapa, horario y CTA directo a WhatsApp desde el primer scroll.",
    outcome: "Salida útil para captar pedidos directos y reducir fricción en móvil.",
    tags: ["WhatsApp", "Mapa", "Conversión local"],
    href: "/blog/actualizacion-real-kebab-house-conversion",
    cta: "Ver caso real",
  },
  {
    title: "Landing Sprint 48h",
    eyebrow: "Salida rápida",
    problem: "Un proyecto necesita una página comercial seria para empezar a enseñar valor y abrir conversaciones.",
    approach: "Sistema de landing corto con estructura clara, copy base, CTA y deploy rápido.",
    outcome: "Publicación en tiempo corto sin caer en semanas de bloqueo o rediseño infinito.",
    tags: ["Landing", "Sprint", "Captación"],
    href: "/blog/actualizacion-real-landing-pack-48h",
    cta: "Ver sprint",
  },
  {
    title: "Clon Spotify",
    eyebrow: "Referencia UI",
    problem: "Demostrar control de interfaz inmersiva, navegación estable y reproductor persistente.",
    approach: "Diseño oscuro con estructura de playlists, portada dinámica y barra fija reutilizable.",
    outcome: "Prueba visible de criterio de interfaz y capacidad para afinar producto visual.",
    tags: ["UI", "Player fijo", "Streaming"],
    href: "/blog/actualizacion-real-clon-spotify-ui",
    cta: "Ver actualización",
  },
  {
    title: "Clon Disney+",
    eyebrow: "Referencia de catálogo",
    problem: "Trabajar exploración de contenido, carruseles fluidos y lectura clara sobre fondo oscuro.",
    approach: "Catálogo por filas, tarjetas reutilizables y navegación enfocada a descubrimiento.",
    outcome: "Referencia útil para proyectos con catálogo, media UI o jerarquía visual compleja.",
    tags: ["Carruseles", "Media UI", "Catálogo"],
    href: "/blog/actualizacion-real-clon-disney-carruseles",
    cta: "Ver actualización",
  },
];

export type ProductSeed = {
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaMessage: string;
  proofLabel: string;
  proofHref: string;
};

export const PRODUCT_SEED: ProductSeed = {
  name: "LocalLaunch",
  eyebrow: "Producto en validación",
  headline: "Sistema base para negocios locales que necesitan salir rápido sin complicarse.",
  description:
    "La idea es simple: landing móvil, CTA a WhatsApp, horario, mapa y estructura lista para enseñar el negocio con claridad. Ahora mismo está en validación para detectar qué formato y qué precio encajan mejor.",
  features: [
    "Landing optimizada para móvil",
    "Botón de WhatsApp y mapa integrado",
    "Horario, secciones de confianza y salida rápida",
  ],
  ctaLabel: "Quiero acceso anticipado",
  ctaMessage:
    "Hola Roberto, quiero acceso anticipado a LocalLaunch. Me interesa usarlo para un negocio local y quiero saber cómo lo estás validando.",
  proofLabel: "Ver referencia base",
  proofHref: "/blog/actualizacion-real-kebab-house-conversion",
};

export type LabPreview = {
  title: string;
  description: string;
  badge: string;
};

export const LAB_PREVIEWS: LabPreview[] = [
  {
    title: "Video Lab",
    description: "Generación de vídeo desde prompt con estado de proceso y descarga final.",
    badge: "xAI video",
  },
  {
    title: "Voice Lab",
    description: "Agente de voz en tiempo real con token efímero, VAD y transcripción.",
    badge: "Realtime audio",
  },
  {
    title: "TTS Lab",
    description: "Síntesis on-demand para demos, pruebas de producto y piezas de contenido.",
    badge: "Eve voice",
  },
];
