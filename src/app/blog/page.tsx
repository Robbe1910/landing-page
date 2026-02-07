import Link from "next/link";

const blogEntries = [
  {
    title: "Actualidad tech: mañana",
    excerpt:
      "Resumen de novedades y mercado para empezar el día con foco.",
    date: "Programado · Mañana",
  },
  {
    title: "Actualidad tech: tarde",
    excerpt:
      "Actualización rápida con los cambios más relevantes de la jornada.",
    date: "Programado · Tarde",
  },
  {
    title: "Actualidad tech: noche",
    excerpt:
      "Cierre del día con tendencias, lanzamientos y lo más comentado.",
    date: "Programado · Noche",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-600">Blog</p>
        <h1 className="mt-4 text-4xl font-bold text-black">Noticias y recursos</h1>
        <p className="mt-4 text-lg text-gray-600">
          Publicaciones automáticas sobre tecnología, mercado y tendencias.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogEntries.map((entry) => (
            <article
              key={entry.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{entry.date}</p>
              <h2 className="mt-3 text-xl font-semibold text-black">{entry.title}</h2>
              <p className="mt-3 text-gray-600">{entry.excerpt}</p>
            </article>
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
