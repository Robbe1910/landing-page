import type { Metadata } from "next";

export const siteConfig = {
  name: "Robbe360",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://robbe360.com",
  author: "Roberto Berrendo Eguino",
  email: "robertoberrendo@gmail.com",
  defaultTitle: "Robbe360 | Desarrollo web fullstack, Next.js e IoT con criterio",
  defaultDescription:
    "Roberto Berrendo Eguino. Desarrollo web fullstack, interfaces con criterio, automatización e IoT para marcas y negocios que necesitan claridad, velocidad y ejecución real.",
  defaultOgImage: "/og-cover.jpg",
  adsenseAccount: "ca-pub-7977064296204880",
  locale: "es_ES",
  twitterHandle: "@rxbbe8369",
  keywords: [
    "desarrollo web",
    "fullstack developer",
    "next.js",
    "react",
    "iot",
    "robbe360",
    "roberto berrendo",
    "precision digital",
    "diseno web para negocios",
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/rxbbe8369/",
    tiktok: "https://www.tiktok.com/@rxbbe8369",
    linkedin: "https://www.linkedin.com/in/roberto-berrendo-eguino-475b36171/",
    github: "https://github.com/Robbe1910",
    xemos: "https://github.com/Robbe1910/XEMOS",
    email: "mailto:robertoberrendo@gmail.com",
  },
} as const;

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
  keywords = [],
  type = "website",
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const resolvedTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url: absoluteUrl(canonical),
      siteName: siteConfig.name,
      title: resolvedTitle,
      description,
      images: [{ url: image, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image],
      creator: siteConfig.twitterHandle,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : undefined,
  };
}

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/icon-512.png"),
      image: absoluteUrl(siteConfig.defaultOgImage),
      sameAs: [
        siteConfig.socialLinks.instagram,
        siteConfig.socialLinks.tiktok,
        siteConfig.socialLinks.linkedin,
        siteConfig.socialLinks.github,
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}#service`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: absoluteUrl(siteConfig.defaultOgImage),
      description: siteConfig.defaultDescription,
      email: `mailto:${siteConfig.email}`,
      areaServed: "ES",
      provider: {
        "@id": `${siteConfig.url}#organization`,
      },
      sameAs: [
        siteConfig.socialLinks.instagram,
        siteConfig.socialLinks.tiktok,
        siteConfig.socialLinks.linkedin,
        siteConfig.socialLinks.github,
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}#person`,
      name: siteConfig.author,
      jobTitle: "Full Stack Developer",
      url: siteConfig.url,
      image: absoluteUrl("/icon-512.png"),
      worksFor: {
        "@id": `${siteConfig.url}#organization`,
      },
      sameAs: [
        siteConfig.socialLinks.instagram,
        siteConfig.socialLinks.tiktok,
        siteConfig.socialLinks.linkedin,
        siteConfig.socialLinks.github,
      ],
      knowsAbout: ["React", "Next.js", "Python", "IoT", "Automatización", "UI", "SEO"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "es-ES",
      publisher: {
        "@id": `${siteConfig.url}#organization`,
      },
    },
    {
      "@type": "Blog",
      "@id": `${siteConfig.url}#blog`,
      url: absoluteUrl("/blog"),
      name: `Blog ${siteConfig.name}`,
      inLanguage: "es-ES",
      publisher: {
        "@id": `${siteConfig.url}#organization`,
      },
    },
  ],
} as const;
