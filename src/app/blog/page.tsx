import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdSenseBlock } from "../../components/adsense-block";
import { BlogExtras } from "../../components/blog-extras";
import { SOCIAL_LINKS } from "../home-data";
import { buildMetadata } from "../../lib/site-config";
import {
  getAutomatedBlogEntries,
  getRealBlogEntries,
} from "../../data/blogEntries";

export const metadata: Metadata = buildMetadata({
  title: "Blog tecnico",
  description:
    "Posts reales, automatizacion editorial y aprendizaje publico sobre interfaces, IA aplicada, conversion y construccion de producto.",
  path: "/blog",
  keywords: ["blog tecnico", "automatizacion editorial", "posts reales", "conversion web"],
});

export default function BlogPage() {
  const realBlogEntries = getRealBlogEntries();
  const automatedBlogEntries = getAutomatedBlogEntries();

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Blog técnico</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          Proceso real, automatización editorial y señal pública.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
          Aquí conviven dos capas: posts reales que enseñan cómo se construyen las piezas y publicaciones automatizadas
          que sostienen constancia, criterio y presencia.
        </p>

        <AdSenseBlock slot="7413946655" className="mt-10" />

        <section className="mt-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">Canal 1</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Posts reales</h2>
            </div>
            <span className="rounded-full border border-[#4dd4ff]/20 bg-[#081526] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4dd4ff]">
              Lo que sí he construido
            </span>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {realBlogEntries.map((entry, index) => (
              <Link
                key={entry.title}
                href={`/blog/${entry.slug}`}
                className="fade-in-up group overflow-hidden rounded-[1.9rem] border border-white/10 bg-[rgba(6,12,26,0.82)] shadow-[0_24px_70px_rgba(3,8,20,0.24)] transition hover:-translate-y-1 hover:border-[#4dd4ff]/20"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={entry.imageUrl}
                    alt={entry.imageAlt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">{entry.date}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{entry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{entry.excerpt}</p>
                  <span className="mt-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#f6b34a]">
                    {entry.viewsLabel}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">Canal 2</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Posts automatizados</h2>
            </div>
            <span className="rounded-full border border-[#f6b34a]/20 bg-[#1a1420] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd597]">
              Mañana · Tarde · Noche
            </span>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/66">
            Publicaciones programadas por franja para sostener presencia sin perder el tono técnico ni la utilidad.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {automatedBlogEntries.map((entry, index) => (
              <Link
                key={entry.title}
                href={`/blog/${entry.slug}`}
                className="fade-in-up group overflow-hidden rounded-[1.9rem] border border-white/10 bg-[rgba(6,12,26,0.82)] shadow-[0_24px_70px_rgba(3,8,20,0.24)] transition hover:-translate-y-1 hover:border-[#4dd4ff]/20"
                style={{ animationDelay: `${120 + index * 80}ms` }}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={entry.imageUrl}
                    alt={entry.imageAlt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">{entry.date}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{entry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{entry.excerpt}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#f6b34a]">
                      {entry.viewsLabel}
                    </span>
                    {entry.scheduleLabel ? (
                      <span className="inline-flex items-center rounded-full border border-[#4dd4ff]/20 bg-[#081526] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#4dd4ff]">
                        {entry.scheduleLabel}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <BlogExtras instagramUrl={SOCIAL_LINKS.instagram} />

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
          >
            Volver al inicio
          </Link>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
          >
            Ver proyectos
          </Link>
          <Link
            href="/musica"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
          >
            Ver música
          </Link>
        </div>
      </div>
    </main>
  );
}
