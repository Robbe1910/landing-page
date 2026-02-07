import Image from "next/image";
import Link from "next/link";
import { blogEntries } from "../../data/blogEntries";

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
