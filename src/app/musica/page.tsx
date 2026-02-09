import Link from "next/link";
import { poetryEntries } from "../../data/poetryEntries";

const slotLabels: Record<(typeof poetryEntries)[number]["slot"], string> = {
  desayuno: "Desayuno",
  comida: "Comida",
  cena: "Cena",
};

export default function MusicaPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-lime-400">
          Musica y poesia
        </p>
        <h1 className="mt-4 text-4xl font-bold">Espacio creativo</h1>
        <p className="mt-4 text-lg text-gray-300">
          Aqui queda preparada la rutina automatizada de poesia diaria por
          franja en horario de Espana, publicando una hora antes de cada comida.
        </p>

        <section className="mt-8 rounded-2xl border border-lime-500/30 bg-lime-500/10 p-6">
          <h2 className="text-xl font-semibold text-lime-300">
            Programacion automatizada (España)
          </h2>
          <p className="mt-2 text-sm text-gray-200">
            Zona horaria: <span className="font-semibold">Europe/Madrid</span>.
            Cadencia: <span className="font-semibold">Diario</span>.
          </p>
          <p className="mt-2 text-sm text-gray-300">
            Regla aplicada: cada entrada se publica exactamente 1 hora antes de
            la franja objetivo (desayuno, comida y cena).
          </p>
        </section>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {poetryEntries.map((entry) => (
            <article
              key={entry.id}
              className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full border border-lime-400/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-300">
                  {slotLabels[entry.slot]}
                </span>
                <span className="text-xs text-gray-400">{entry.cadence}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold">{entry.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{entry.excerpt}</p>

              <div className="mt-4 rounded-xl border border-gray-700 bg-black/40 p-3 text-xs text-gray-300">
                <p>
                  Hora objetivo ({slotLabels[entry.slot]}):{" "}
                  <span className="font-semibold text-white">
                    {entry.targetMealTimeSpain}
                  </span>
                </p>
                <p className="mt-1">
                  Publicacion automatica:{" "}
                  <span className="font-semibold text-lime-300">
                    {entry.publishTimeSpain}
                  </span>
                </p>
              </div>

              <div className="mt-4 space-y-2 text-sm leading-7 text-gray-200">
                {entry.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:border-lime-400 hover:text-lime-300"
          >
            Volver al inicio
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-lime-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-400"
          >
            Ver blog
          </Link>
        </div>
      </div>
    </main>
  );
}
