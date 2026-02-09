export type BlogEntryType = "real" | "automated";

export type BlogEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  imageAuthor: string;
  imageAuthorUrl: string;
  content: string[];
  type: BlogEntryType;
  viewsLabel: string;
  scheduleLabel?: "Manana" | "Tarde" | "Noche";
};

const realPosts: BlogEntry[] = [
  {
    slug: "actualizacion-real-clon-spotify-ui",
    title: "Actualizacion real: clon Spotify con reproductor fijo",
    excerpt:
      "Avance real del proyecto: barra inferior, portada dinamica y estructura lista para conectar datos.",
    date: "8 de febrero de 2026",
    imageUrl:
      "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
    imageAlt: "Auriculares y mesa de trabajo con laptop",
    imageAuthor: "Pixabay",
    imageAuthorUrl: "https://www.pexels.com/@pixabay/",
    type: "real",
    viewsLabel: "Post real destacado",
    content: [
      "Esta semana deje montada la estructura principal del clon Spotify con foco en velocidad y usabilidad movil. El reproductor queda fijo y mantiene controles visibles sin romper el flujo de navegacion.",
      "Tambien normalice estilos para reutilizar tarjetas de playlist y bloques de artista en distintas secciones, evitando codigo duplicado y facilitando iteraciones rapidas.",
      "Proximo paso: conectar estado real de reproduccion y publicar demo en Vercel para pruebas con usuarios.",
    ],
  },
  {
    slug: "actualizacion-real-clon-disney-carruseles",
    title: "Actualizacion real: clon Disney+ con carruseles fluidos",
    excerpt:
      "Navegacion por catalogo y transiciones suaves para mejorar la experiencia de exploracion.",
    date: "5 de febrero de 2026",
    imageUrl:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg",
    imageAlt: "Persona viendo contenido audiovisual en tablet",
    imageAuthor: "Mikhail Nilov",
    imageAuthorUrl: "https://www.pexels.com/@mikhail-nilov/",
    type: "real",
    viewsLabel: "Post real muy visto",
    content: [
      "La base del catalogo ya funciona por filas tematicas y cards reutilizables. La prioridad fue que el desplazamiento horizontal se sienta estable tanto en escritorio como en movil.",
      "Ajuste el contraste y la jerarquia visual para que titulos, progreso y CTA sean claros en fondos oscuros, manteniendo identidad estilo streaming.",
      "Siguiente entrega: detalle de pelicula con trailer embebido y recomendaciones relacionadas.",
    ],
  },
  {
    slug: "actualizacion-real-kebab-house-conversion",
    title: "Actualizacion real: landing Kebab House enfocada a pedidos",
    excerpt:
      "Seccion de menu visual, CTA de WhatsApp y mapa para convertir visitas en pedidos reales.",
    date: "2 de febrero de 2026",
    imageUrl:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    imageAlt: "Plato de comida en restaurante",
    imageAuthor: "Valeria Boltneva",
    imageAuthorUrl: "https://www.pexels.com/@valeriya/",
    type: "real",
    viewsLabel: "Post real de negocio local",
    content: [
      "Reduje friccion en el primer scroll: propuesta de valor, menu estrella y boton directo de pedido en el primer bloque.",
      "Inclui seccion de ubicacion y horario para reforzar confianza y evitar dudas antes de escribir por WhatsApp.",
      "La siguiente iteracion sera integrar testimonios reales y un bloque de promociones por franja horaria.",
    ],
  },
  {
    slug: "actualizacion-real-barberia-reservas",
    title: "Actualizacion real: web de barberia con reservas directas",
    excerpt:
      "Pagina orientada a marca personal del local, galeria de cortes y conversion a cita inmediata.",
    date: "31 de enero de 2026",
    imageUrl:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg",
    imageAlt: "Barbero trabajando en un corte de pelo",
    imageAuthor: "Thgusstavo Santana",
    imageAuthorUrl: "https://www.pexels.com/@thgusstavo-santana-30650347/",
    type: "real",
    viewsLabel: "Post real de alta interaccion",
    content: [
      "La nueva home prioriza reservas en dos toques: boton visible, servicios destacados y galeria antes de testimonios.",
      "Estructure los bloques para mover al usuario desde inspiracion visual hacia accion concreta sin distraerlo con texto largo.",
      "Proximo paso: conectar calendario de disponibilidad y recordatorios automaticos por WhatsApp.",
    ],
  },
];

const automatedPosts: BlogEntry[] = [
  {
    slug: "automatizado-tendencias-web-negocios-locales-febrero-2026",
    title: "Automatizado: tendencias web para negocio local (semana actual)",
    excerpt:
      "Resumen programado de patrones que estan funcionando en captacion, conversion y fidelizacion.",
    date: "9 de febrero de 2026",
    imageUrl:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    imageAlt: "Equipo revisando panel de resultados",
    imageAuthor: "fauxels",
    imageAuthorUrl: "https://www.pexels.com/@fauxels/",
    type: "automated",
    viewsLabel: "Auto post mas leido",
    scheduleLabel: "Manana",
    content: [
      "Este post se genera para mantener ritmo de publicacion constante con un resumen semanal de cambios utiles para negocios locales.",
      "Los formatos que mas engagement dan ahora son: prueba social temprana, CTA repetido y secciones de precio transparentes.",
      "Recomendacion accionable: publica cambios pequenos cada semana y mide solo una metrica principal por iteracion.",
    ],
  },
  {
    slug: "automatizado-ia-productividad-flujo-diario-febrero-2026",
    title: "Automatizado: IA aplicada al flujo diario de trabajo",
    excerpt:
      "Guia breve programada para ahorrar tiempo en redaccion, soporte y seguimiento comercial.",
    date: "9 de febrero de 2026",
    imageUrl:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    imageAlt: "Persona trabajando con laptop y analitica digital",
    imageAuthor: "ThisIsEngineering",
    imageAuthorUrl: "https://www.pexels.com/@thisisengineering/",
    type: "automated",
    viewsLabel: "Auto post tendencia",
    scheduleLabel: "Tarde",
    content: [
      "El sistema automatizado propone tareas concretas para IA: resumir briefs, crear borradores y priorizar mensajes entrantes.",
      "Cuando hay revision humana final, la calidad sube y el tiempo total por tarea baja de forma consistente.",
      "Para no saturar, conviene automatizar primero un flujo pequeno y ampliar solo cuando la metrica de calidad sea estable.",
    ],
  },
  {
    slug: "automatizado-checklist-conversion-landing-febrero-2026",
    title: "Automatizado: checklist de conversion para una landing que vende",
    excerpt:
      "Plantilla nocturna con mejoras rapidas para subir contactos desde movil y escritorio.",
    date: "9 de febrero de 2026",
    imageUrl:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    imageAlt: "Pantalla con metricas y analitica de conversion",
    imageAuthor: "Pixabay",
    imageAuthorUrl: "https://www.pexels.com/@pixabay/",
    type: "automated",
    viewsLabel: "Auto post evergreen",
    scheduleLabel: "Noche",
    content: [
      "Este checklist automatizado se publica para recordar ajustes de alto impacto: titular claro, prueba social y CTA visible.",
      "La mejora mas rapida suele llegar al reducir friccion en formularios y mover informacion clave arriba del primer scroll.",
      "Al cierre del dia, compara conversion por dispositivo para detectar donde ajustar primero.",
    ],
  },
];

export const blogEntries: BlogEntry[] = [...realPosts, ...automatedPosts];

export function getBlogEntryBySlug(slug: string): BlogEntry | undefined {
  return blogEntries.find((entry) => entry.slug === slug);
}

export function getRealBlogEntries(): BlogEntry[] {
  return blogEntries.filter((entry) => entry.type === "real");
}

export function getAutomatedBlogEntries(): BlogEntry[] {
  return blogEntries.filter((entry) => entry.type === "automated");
}
