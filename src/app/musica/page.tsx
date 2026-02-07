import Link from "next/link";

export default function MusicaPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-400">Música & Poesía</p>
        <h1 className="mt-4 text-4xl font-bold">Espacio creativo</h1>
        <p className="mt-4 text-lg text-gray-300">
<<<<<<< HEAD
          Aquí irán las letras y fragmentos autorizados de tus canciones, junto con
          poesía y novedades sobre registros de propiedad intelectual.
=======
          {/* Texto personalizable para Roberto */}
          Aquí irán las letras y fragmentos autorizados de tus canciones, junto con
          poesía, fechas de registro y próximos lanzamientos.
>>>>>>> codex/add-footer-with-copyright-and-routes-o1vkp1
        </p>
        <div className="mt-8 grid gap-4 rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
          <p className="text-sm text-gray-400">Próximo contenido:</p>
          <ul className="space-y-2 text-gray-200">
            <li>• Estribillos y fragmentos destacados.</li>
            <li>• Lanzamientos y fecha de registro.</li>
            <li>• Inspiraciones y procesos creativos.</li>
          </ul>
        </div>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:border-lime-400 hover:text-lime-300"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
