export type SocialPost = {
  id: string;
  platform: "Instagram" | "TikTok" | "LinkedIn" | "X";
  title: string;
  excerpt: string;
  date: string;
  postUrl: string;
};

export const socialPosts: SocialPost[] = [
  {
    id: "instagram-ux-flujo-contacto",
    platform: "Instagram",
    title: "Mejorando el flujo de contacto en landings",
    excerpt:
      "Mini hilo con ajustes de UX que aumentan mensajes por WhatsApp sin tocar presupuesto.",
    date: "Febrero 2026",
    postUrl: "https://www.instagram.com/rxbbe8369/",
  },
  {
    id: "tiktok-clon-ui-proceso",
    platform: "TikTok",
    title: "Behind the scenes de un clon UI",
    excerpt:
      "Proceso rápido de diseño y maquetación para construir una interfaz inspirada en apps reales.",
    date: "Febrero 2026",
    postUrl: "https://www.tiktok.com/@rxbbe8369",
  },
  {
    id: "linkedin-web-performance-local",
    platform: "LinkedIn",
    title: "Rendimiento web para negocio local",
    excerpt:
      "Checklist práctico para mejorar velocidad de carga y conversión en móviles.",
    date: "Febrero 2026",
    postUrl: "https://www.linkedin.com/in/roberto-berrendo-eguino-475b36171/",
  },
];
