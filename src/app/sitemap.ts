import type { MetadataRoute } from "next";
import { blogEntries } from "../data/blogEntries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://robbe360.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/blog", "/musica", "/proyectos", "/privacidad"];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogSitemapEntries: MetadataRoute.Sitemap = blogEntries.map((entry) => ({
    url: `${siteUrl}/blog/${entry.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogSitemapEntries];
}
