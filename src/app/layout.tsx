import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://robbe360.com";
const siteName = "Robbe360";
const defaultTitle = "Robbe360 | Desarrollo web para negocios locales";
const defaultDescription =
  "Landing pages y desarrollo web en React y Next.js para digitalizar negocios y conseguir mas clientes.";
const ogImage = "/logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "desarrollo web",
    "landing page",
    "next.js",
    "react",
    "seo local",
    "diseno web",
    "freelance web",
    "robbe360",
  ],
  authors: [{ name: "Roberto Berrendo Eguino", url: siteUrl }],
  creator: "Roberto Berrendo Eguino",
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Robbe360" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
    creator: "@rxbbe8369",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}${ogImage}`,
    description: defaultDescription,
    email: "mailto:robertoberrendo@gmail.com",
    sameAs: [
      "https://www.instagram.com/rxbbe8369/",
      "https://www.tiktok.com/@rxbbe8369",
      "https://www.linkedin.com/in/roberto-berrendo-eguino-475b36171/",
    ],
    areaServed: "ES",
  };

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
