import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogEntries, getBlogEntryBySlug } from "../../../data/blogEntries";
import { absoluteUrl, buildMetadata } from "../../../lib/site-config";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogEntries.map((entry) => ({ slug: entry.slug }));
}

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

  const path = `/blog/${entry.slug}`;
  const description = entry.excerpt;

  return {
    ...buildMetadata({
      title: entry.title,
      description,
      path,
      image: entry.imageUrl,
      type: "article",
      keywords: ["blog tecnico", entry.type === "real" ? "post real" : "post automatizado"],
    }),
    openGraph: {
      type: "article",
      url: absoluteUrl(path),
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
    <main className="min-h-screen bg-[var(--background)] px-6 py-16 text-white sm:px-8 lg:px-10">
      <article className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-6 shadow-[0_32px_80px_rgba(3,8,20,0.28)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Blog</p>
        <h1 className="fade-in-up mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          {entry.title}
        </h1>
        <div className="fade-in-up mt-4 flex flex-wrap items-center gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">{entry.date}</p>
          <span className="rounded-full border border-[#4dd4ff]/20 bg-[#081526] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#4dd4ff]">
            {entry.type === "real" ? "Post real" : "Post automatizado"}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#f6b34a]">
            {entry.viewsLabel}
          </span>
          {entry.scheduleLabel ? (
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/72">
              {entry.scheduleLabel}
            </span>
          ) : null}
        </div>

        <div className="fade-in-up relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[1.8rem]">
          <Image
            src={entry.imageUrl}
            alt={entry.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
        <p className="fade-in-up mt-3 text-xs text-white/42">
          Imagen sin derechos de autor por{" "}
          <a
            href={entry.imageAuthorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/72 transition hover:text-white"
          >
            {entry.imageAuthor}
          </a>{" "}
          en Pexels.
        </p>

        <div className="mt-8 space-y-5 text-base leading-8 text-white/72 sm:text-lg">
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
            className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
          >
            Volver al blog
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
          >
            Volver al inicio
          </Link>
        </div>
      </article>
    </main>
  );
}
