import { siteConfig } from "../lib/site-config";

export const WHATSAPP_NUMBER = "609881656";
export const WHATSAPP_MESSAGE = "Hola, me gustaria obtener mas informacion.";
export const GOOGLE_CALENDAR_LINK = "https://calendar.app.google/r3uhjT7JKmDBcBxh9";

export const SOCIAL_LINKS = siteConfig.socialLinks;

export type HeroSignal = {
  label: string;
  value: string;
  detail: string;
};

export const HERO_SIGNALS: HeroSignal[] = [
  {
    label: "Especialidad",
    value: "Fullstack & IoT",
    detail: "React, Next.js, Python y soluciones conectadas al mundo físico.",
  },
  {
    label: "Credibilidad",
    value: "Teleco Games 2024",
    detail: "Primer premio en fase clasificatoria con XEMOS y respaldo público en LinkedIn.",
  },
  {
    label: "Modo de trabajo",
    value: "Sin máscaras",
    detail: "Proceso real, decisiones técnicas claras y foco en resultados medibles.",
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
    title: "Automatización y lógica que sí aterrizan en negocio",
    description:
      "Uso Python, Flask, Node.js y servicios conectados para soportar formularios, procesos internos, contenido automatizado y pruebas de producto.",
  },
  {
    eyebrow: "IoT",
    title: "Puente entre hardware, datos y producto",
    description:
      "XEMOS resume esa capa: sensores, lectura de entorno, app complementaria y una visión pragmática de cómo se comporta la tecnología en el mundo real.",
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
      "Ese tramo me dio una base pragmática: la tecnología no solo tiene que verse bien, tiene que funcionar bajo presión.",
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
      "Primer premio en fase clasificatoria, categoría equipos (CAT. III), con diploma aportado y registro visible en LinkedIn.",
    href: SOCIAL_LINKS.linkedin,
    cta: "Ver perfil",
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
    cta: "Ver LinkedIn",
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
      "Posts reales, automatizados y aprendizajes concretos sobre interfaces, IA aplicada y conversión.",
    href: "/blog",
    cta: "Entrar al blog",
    note: "Canal de proceso y autoridad.",
  },
  {
    title: "Música y poesía",
    description:
      "La capa creativa de Robbe360, con piezas cortas, ritmos y automatización editorial por franjas.",
    href: "/musica",
    cta: "Entrar a música",
    note: "Sensibilidad organizada, no ruido.",
  },
  {
    title: "Proyectos y Labs IA",
    description:
      "Clones, demos y laboratorios con vídeo, voz y TTS para enseñar producto, criterio técnico y capacidad de ejecución.",
    href: "/proyectos",
    cta: "Entrar a proyectos",
    note: "Producto, pruebas y demos.",
  },
];

export type ProjectPreview = {
  title: string;
  description: string;
  status: string;
  tags: string[];
};

export const PROJECT_PREVIEWS: ProjectPreview[] = [
  {
    title: "Clon Spotify",
    description: "Interfaz inmersiva con playlists, reproductor fijo y microinteracciones más estables.",
    status: "UI en evolución",
    tags: ["Streaming", "Dark UI", "Player fijo"],
  },
  {
    title: "Clon Disney+",
    description: "Catálogo con carruseles fluidos, navegación por secciones y foco en experiencia visual.",
    status: "Catálogo activo",
    tags: ["Carruseles", "Motion", "Media UI"],
  },
  {
    title: "Kebab House",
    description: "Landing centrada en pedidos, menú visual, ubicación y CTA directo a WhatsApp.",
    status: "Conversión local",
    tags: ["Negocio local", "Pedidos", "Mapa"],
  },
  {
    title: "Barbería / peluquería",
    description: "Reserva, galería de cortes y posicionamiento de marca para negocio de proximidad.",
    status: "Plantilla comercial",
    tags: ["Reservas", "Branding", "Lead capture"],
  },
];

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
