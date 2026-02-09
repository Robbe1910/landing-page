import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogEntries, getBlogEntryBySlug } from "../../../data/blogEntries";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogEntries.map((entry) => ({ slug: entry.slug }));
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://robbe360.com";

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getBlogEntryBySlug(slug);

  if (!entry) {
    return {
      title: "Post no encontrado",
      description: "La publicacion solicitada no esta disponible.",
    };
  }

  const description = entry.excerpt;
  const url = `${siteUrl}/blog/${entry.slug}`;

  return {
    title: entry.title,
    description,
    alternates: {
      canonical: `/blog/${entry.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title: entry.title,
      description,
      images: [{ url: entry.imageUrl, alt: entry.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description,
      images: [entry.imageUrl],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const entry = getBlogEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-600">Blog</p>
        <h1 className="fade-in-up mt-4 text-3xl font-bold text-black sm:text-4xl">
          {entry.title}
        </h1>
        <div className="fade-in-up mt-3 flex flex-wrap items-center gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            {entry.date}
          </p>
          <span className="rounded-full border border-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-700">
            {entry.type === "real" ? "Post real" : "Post automatizado"}
          </span>
          <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
            {entry.viewsLabel}
          </span>
          {entry.scheduleLabel ? (
            <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-300">
              {entry.scheduleLabel}
            </span>
          ) : null}
        </div>

        <div className="fade-in-up relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={entry.imageUrl}
            alt={entry.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
        <p className="fade-in-up mt-3 text-xs text-gray-500">
          Imagen sin derechos de autor por{" "}
          <a
            href={entry.imageAuthorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-700 hover:text-lime-600"
          >
            {entry.imageAuthor}
          </a>{" "}
          en Pexels.
        </p>

        <div className="mt-8 space-y-5 text-base leading-8 text-gray-700 sm:text-lg">
          {entry.content.map((paragraph, index) => (
            <p
              key={paragraph}
              className="fade-in-up"
              style={{ animationDelay: `${120 + index * 80}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="fade-in-up mt-10 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-lime-400 hover:text-lime-600"
          >
            Volver al blog
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            Volver al inicio
          </Link>
        </div>
      </article>
    </main>
  );
}
