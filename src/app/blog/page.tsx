import Image from "next/image";
import Link from "next/link";
import { blogEntries } from "../../data/blogEntries";
import { socialPosts } from "../../data/socialPosts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-600">Blog</p>
        <h1 className="mt-4 text-4xl font-bold text-black">Noticias y recursos</h1>
        <p className="mt-4 text-lg text-gray-600">
          {/* Texto personalizable para Roberto */}
          Publicaciones automáticas sobre tecnología, mercado y tendencias con
          entradas programadas para mañana, tarde y noche.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogEntries.map((entry, index) => (
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
                <h2 className="mt-3 text-xl font-semibold text-black">
                  {entry.title}
                </h2>
                <p className="mt-3 text-gray-600">{entry.excerpt}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-lime-600 transition group-hover:text-lime-700">
                  Leer noticia completa
                </span>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-14 rounded-2xl border border-black/10 bg-black px-6 py-8 text-white">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-lime-300">NUEVO</p>
              <h2 className="mt-2 text-2xl font-semibold">Posts en RRSS</h2>
              <p className="mt-2 text-gray-300">
                También publico contenido corto en redes: tips, avances de proyectos y procesos reales.
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
