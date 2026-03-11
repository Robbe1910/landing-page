export type BlogEntryType = "real" | "automated";

export type BlogEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  imageUrl: string;
  imageAlt: string;
  imageAuthor: string;
  imageAuthorUrl: string;
  content: string[];
  type: BlogEntryType;
  viewsLabel: string;
  scheduleLabel?: "Mañana" | "Tarde" | "Noche";
};

const realPosts: BlogEntry[] = [
  {
    slug: "actualizacion-real-grok-video-lab",
    title: "Actualización real: laboratorio de video con Grok estable",
    excerpt:
      "Afiné prompts, validación de imágenes y estados del generador para que el flujo sea predecible y rápido.",
    date: "9 de marzo de 2026",
    publishedAt: "2026-03-09",
    imageUrl: "https://images.pexels.com/photos/6898851/pexels-photo-6898851.jpeg",
    imageAlt: "Persona grabando video en escritorio",
    imageAuthor: "Cottonbro",
    imageAuthorUrl: "https://www.pexels.com/@cottonbro/",
    type: "real",
    viewsLabel: "Post real destacado",
    content: [
      "La UI del laboratorio de video ahora valida que el prompt no esté vacío y acepta una URL opcional de imagen antes de enviar a la API.",
      "Mostramos el estado en vivo y cuando el video está listo se habilita la descarga directa en MP4.",
      "Siguiente paso: guardar el historial de intentos para reutilizar prompts que funcionen mejor.",
    ],
  },
  {
    slug: "actualizacion-real-landing-pack-48h",
    title: "Actualización real: pack express de landing en 48h",
    excerpt:
      "Nuevo paquete con wireframe base, textos iniciales y conexión a WhatsApp listo para negocios locales.",
    date: "7 de marzo de 2026",
    publishedAt: "2026-03-07",
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    imageAlt: "Personas trabajando en un plan de proyecto",
    imageAuthor: "fauxels",
    imageAuthorUrl: "https://www.pexels.com/@fauxels/",
    type: "real",
    viewsLabel: "Post real muy visto",
    content: [
      "Documenté un wireframe repetible: héroe con promesa clara, bloque de prueba social y CTA de WhatsApp fijo.",
      "El paquete incluye checklist de assets y un guion corto para el primer email o post de lanzamiento.",
      "Entrega estándar en 48h con una ronda de ajustes ligera para no frenar la salida.",
    ],
  },
  {
    slug: "actualizacion-real-clon-spotify-ui",
    title: "Actualización real: clon Spotify con reproductor fijo",
    excerpt: "Barra inferior estable, portada dinámica y estructura lista para conectar datos.",
    date: "1 de marzo de 2026",
    publishedAt: "2026-03-01",
    imageUrl: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
    imageAlt: "Auriculares y mesa de trabajo con laptop",
    imageAuthor: "Pixabay",
    imageAuthorUrl: "https://www.pexels.com/@pixabay/",
    type: "real",
    viewsLabel: "Post real destacado",
    content: [
      "La estructura principal se enfocó en velocidad móvil y en mantener controles visibles sin romper el flujo de navegación.",
      "Normalicé estilos para reutilizar tarjetas de playlist y bloques de artista, evitando duplicar componentes.",
      "Próximo paso: conectar estado real de reproducción y publicar demo en Vercel.",
    ],
  },
  {
    slug: "actualizacion-real-clon-disney-carruseles",
    title: "Actualización real: clon Disney+ con carruseles fluidos",
    excerpt: "Navegación por catálogo y transiciones suaves para explorar sin saltos.",
    date: "26 de febrero de 2026",
    publishedAt: "2026-02-26",
    imageUrl: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg",
    imageAlt: "Persona viendo contenido audiovisual en tablet",
    imageAuthor: "Mikhail Nilov",
    imageAuthorUrl: "https://www.pexels.com/@mikhail-nilov/",
    type: "real",
    viewsLabel: "Post real muy visto",
    content: [
      "El catálogo funciona por filas temáticas y cards reutilizables con desplazamiento horizontal estable.",
      "Ajusté contraste y jerarquía visual para que títulos y CTA se lean bien en fondos oscuros.",
      "Siguiente entrega: detalle de película con tráiler embebido y recomendaciones.",
    ],
  },
  {
    slug: "actualizacion-real-kebab-house-conversion",
    title: "Actualización real: landing Kebab House enfocada a pedidos",
    excerpt: "Menú visual, CTA de WhatsApp y mapa para convertir visitas en pedidos reales.",
    date: "22 de febrero de 2026",
    publishedAt: "2026-02-22",
    imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    imageAlt: "Plato de comida en restaurante",
    imageAuthor: "Valeria Boltneva",
    imageAuthorUrl: "https://www.pexels.com/@valeriya/",
    type: "real",
    viewsLabel: "Post real de negocio local",
    content: [
      "Reduje fricción en el primer scroll: propuesta de valor, menú estrella y botón directo de pedido.",
      "Añadí sección de ubicación y horario para reforzar confianza antes de escribir por WhatsApp.",
      "La siguiente iteración será integrar testimonios reales y promociones por franja horaria.",
    ],
  },
];

const automatedPosts: BlogEntry[] = [
  {
    slug: "automatizado-tendencias-web-negocios-locales-marzo-2026",
    title: "Automatizado: tendencias web para negocio local (semana actual)",
    excerpt:
      "Resumen semanal de patrones que están funcionando en captación, conversión y retención.",
    date: "8 de marzo de 2026",
    publishedAt: "2026-03-08",
    imageUrl: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    imageAlt: "Equipo revisando panel de resultados",
    imageAuthor: "fauxels",
    imageAuthorUrl: "https://www.pexels.com/@fauxels/",
    type: "automated",
    viewsLabel: "Auto post más leído",
    scheduleLabel: "Mañana",
    content: [
      "Prioriza pruebas con CTA repetido, prueba social visible y mensajes cortos que expliquen el valor en un scroll.",
      "Los formatos que mejor responden son listas de tres ítems y capturas reales del producto.",
      "Recomendación: medir solo una métrica por sprint para no dispersar esfuerzos.",
    ],
  },
  {
    slug: "automatizado-ia-productividad-marzo-2026",
    title: "Automatizado: IA aplicada al flujo diario de trabajo",
    excerpt:
      "Guía breve programada para ahorrar tiempo en redacción, soporte y seguimiento comercial.",
    date: "8 de marzo de 2026",
    publishedAt: "2026-03-08",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    imageAlt: "Persona trabajando con laptop y analítica digital",
    imageAuthor: "ThisIsEngineering",
    imageAuthorUrl: "https://www.pexels.com/@thisisengineering/",
    type: "automated",
    viewsLabel: "Auto post tendencia",
    scheduleLabel: "Tarde",
    content: [
      "Incluye prompts base para resumir briefs, crear borradores y priorizar mensajes entrantes.",
      "Cuando hay revisión humana final, la calidad sube y el tiempo por tarea baja de forma consistente.",
      "Empieza con un flujo pequeño y amplía solo cuando la métrica de calidad sea estable.",
    ],
  },
  {
    slug: "automatizado-checklist-conversion-marzo-2026",
    title: "Automatizado: checklist de conversión para una landing que vende",
    excerpt:
      "Plantilla nocturna con mejoras rápidas para subir contactos desde móvil y escritorio.",
    date: "8 de marzo de 2026",
    publishedAt: "2026-03-08",
    imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    imageAlt: "Pantalla con métricas y analítica de conversión",
    imageAuthor: "Pixabay",
    imageAuthorUrl: "https://www.pexels.com/@pixabay/",
    type: "automated",
    viewsLabel: "Auto post evergreen",
    scheduleLabel: "Noche",
    content: [
      "Revisa: titular claro, prueba social visible, CTA con contraste y formularios ligeros.",
      "Reduce fricción quitando campos innecesarios y llevando el CTA arriba en móviles.",
      "Al cierre del día compara conversión por dispositivo para decidir el siguiente ajuste.",
    ],
  },
];

const sortByDateDesc = (list: BlogEntry[]) =>
  [...list].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

export const blogEntries: BlogEntry[] = [...realPosts, ...automatedPosts];

export function getBlogEntryBySlug(slug: string): BlogEntry | undefined {
  return blogEntries.find((entry) => entry.slug === slug);
}

export function getRealBlogEntries(): BlogEntry[] {
  return sortByDateDesc(realPosts);
}

export function getAutomatedBlogEntries(): BlogEntry[] {
  return sortByDateDesc(automatedPosts);
}
