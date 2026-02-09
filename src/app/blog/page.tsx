import Image from "next/image";
import Link from "next/link";
import {
  getAutomatedBlogEntries,
  getRealBlogEntries,
} from "../../data/blogEntries";
import {
  newsHighlights,
  searchTrendHighlights2025,
} from "../../data/newsHighlights";
import { socialPosts } from "../../data/socialPosts";

export default function BlogPage() {
  const realBlogEntries = getRealBlogEntries();
  const automatedBlogEntries = getAutomatedBlogEntries();

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-600">Blog</p>
        <h1 className="mt-4 text-4xl font-bold text-black">Noticias y recursos</h1>
        <p className="mt-4 text-lg text-gray-600">
          Blog actualizado con tus posts reales, publicaciones automatizadas y
          noticias de alto interes.
        </p>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Canal 1
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-black">
                Tus posts reales
              </h2>
            </div>
            <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-700">
              Actualizado
            </span>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {realBlogEntries.map((entry, index) => (
              <Link
                key={entry.title}
                href={`/blog/${entry.slug}`}
                className="fade-in-up group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={entry.imageUrl}
                    alt={entry.imageAlt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    {entry.date}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-black">
                    {entry.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{entry.excerpt}</p>
                  <span className="mt-5 inline-flex items-center rounded-full border border-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-700">
                    {entry.viewsLabel}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Canal 2
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-black">
                Posts automatizados
              </h2>
            </div>
            <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-300">
              Manana / Tarde / Noche
            </span>
          </div>
          <p className="mt-3 text-gray-600">
            Publicaciones del blog normal programadas por franja para mantener
            constancia sin perder calidad.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {automatedBlogEntries.map((entry, index) => (
              <Link
                key={entry.title}
                href={`/blog/${entry.slug}`}
                className="fade-in-up group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${120 + index * 80}ms` }}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={entry.imageUrl}
                    alt={entry.imageAlt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    {entry.date}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-black">
                    {entry.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{entry.excerpt}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
                      {entry.viewsLabel}
                    </span>
                    {entry.scheduleLabel ? (
                      <span className="inline-flex items-center rounded-full bg-lime-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
                        {entry.scheduleLabel}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-gray-200 bg-gradient-to-br from-lime-50 via-white to-gray-50 px-6 py-8">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-lime-700">
              NUEVO
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-black">
              Noticias interesantes y esperanzadoras (Enero + 2025)
            </h2>
            <p className="mt-2 text-gray-700">
              Seleccion de noticias reales con buena recepcion para inspirar
              contenidos de alto alcance.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {newsHighlights.map((news) => (
              <article
                key={news.id}
                className="rounded-xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-lime-300 px-3 py-1 text-xs font-semibold text-lime-700">
                    {news.periodLabel}
                  </span>
                  <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600">
                    {news.interestLabel}
                  </span>
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.15em] text-gray-400">
                  {news.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-black">
                  {news.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700">{news.summary}</p>
                <a
                  href={news.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-lime-700 transition hover:text-lime-800"
                >
                  Fuente: {news.sourceName}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-7 rounded-xl border border-black/10 bg-black p-5 text-white">
            <h3 className="text-lg font-semibold">Temas mas buscados de 2025</h3>
            <p className="mt-2 text-sm text-gray-300">
              Usa esta guia para decidir titulares del blog normal cada semana:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              {searchTrendHighlights2025.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <a
              href="https://trends.withgoogle.com/year-in-search/2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-sm font-semibold text-lime-300 transition hover:text-lime-200"
            >
              Ver Year in Search 2025
            </a>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-black/10 bg-black px-6 py-8 text-white">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-lime-300">
                NUEVO
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Posts en RRSS</h2>
              <p className="mt-2 text-gray-300">
                Tambien publico contenido corto en redes: tips, avances de
                proyectos y procesos reales.
              </p>
            </div>
            <a
              href="https://www.instagram.com/rxbbe8369/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-lime-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-400"
            >
              Ver perfil principal
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {socialPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-xl border border-white/20 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-lime-400/50 px-3 py-1 text-xs font-semibold text-lime-300">
                    {post.platform}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{post.excerpt}</p>
                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-lime-300 transition hover:text-lime-200"
                >
                  Ir al post
                </a>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-lime-400 hover:text-lime-600"
          >
            Volver al inicio
          </Link>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </main>
  );
}
