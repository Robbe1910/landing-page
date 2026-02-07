import Link from "next/link";

export default function BlogNotFoundPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-600">Blog</p>
        <h1 className="mt-4 text-3xl font-bold text-black">
          Noticia no encontrada
        </h1>
        <p className="mt-4 text-gray-600">
          La publicación que buscas no existe o fue movida a otra ruta.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
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
            Ir al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
