import Link from "next/link";

<<<<<<< HEAD
=======
// Roadmap de proyectos (personalizable para Roberto).
>>>>>>> codex/add-footer-with-copyright-and-routes-o1vkp1
const projectRoadmap = [
  {
    title: "Clon Spotify",
    details: "UI inmersiva con playlists, player fijo y microinteracciones.",
  },
  {
    title: "Clon Disney+",
    details: "Catálogo con carruseles, perfiles y navegación por categorías.",
  },
  {
    title: "Kebab House",
    details: "Landing con menú visual, pedidos rápidos y ubicación clara.",
  },
  {
    title: "Peluquería & Barbería",
    details: "Reserva online, galería de estilos y CTA directo a WhatsApp.",
  },
];

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-400">Proyectos</p>
        <h1 className="mt-4 text-4xl font-bold">Roadmap activo</h1>
        <p className="mt-4 text-lg text-gray-300">
<<<<<<< HEAD
          Aquí se mostrarán los repositorios y demos cuando estén listos.
=======
          {/* Texto personalizable para Roberto */}
          Aquí se mostrarán los repositorios, demos y fechas de publicación cuando estén listos.
>>>>>>> codex/add-footer-with-copyright-and-routes-o1vkp1
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projectRoadmap.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-3 text-gray-300">{project.details}</p>
              <span className="mt-4 inline-flex rounded-full bg-gray-800 px-4 py-2 text-xs font-semibold text-gray-400">
                En preparación
              </span>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:border-lime-400 hover:text-lime-300"
          >
            Volver al inicio
          </Link>
          <Link
            href="/musica"
            className="inline-flex items-center gap-2 rounded-full bg-lime-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-400"
          >
            Ver música
          </Link>
        </div>
      </div>
    </main>
  );
}
