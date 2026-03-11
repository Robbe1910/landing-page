import type { Metadata } from "next";
import Link from "next/link";
import { AdSenseBlock } from "../../components/adsense-block";
import { poetryEntries } from "../../data/poetryEntries";
import { buildMetadata } from "../../lib/site-config";

const slotLabels: Record<(typeof poetryEntries)[number]["slot"], string> = {
  desayuno: "Desayuno",
  comida: "Comida",
  cena: "Cena",
};

export const metadata: Metadata = buildMetadata({
  title: "Música y poesía",
  description:
    "La capa creativa de Robbe360: poesía breve, ritmo editorial diario y piezas cortas publicadas por franjas en horario de España.",
  path: "/musica",
  keywords: ["música y poesía", "poesía diaria", "creatividad de marca", "contenido editorial"],
});

export default function MusicaPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Música y poesía</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          La parte humana de la marca también tiene estructura.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
          Este espacio mantiene la sensibilidad creativa dentro del sistema. Piezas cortas, ritmo diario y una lógica
          editorial que acompaña desayuno, comida y cena en horario de España.
        </p>

        <AdSenseBlock slot="7413946655" className="mt-10" />

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-6 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
          <h2 className="text-xl font-semibold text-white">Programación automatizada (España)</h2>
          <p className="mt-3 text-sm leading-7 text-white/68">
            Zona horaria: <span className="font-semibold text-white">Europe/Madrid</span>. Cadencia:{" "}
            <span className="font-semibold text-white">Diario</span>.
          </p>
          <p className="mt-2 text-sm leading-7 text-white/68">
            Regla aplicada: cada entrada se publica exactamente una hora antes de la franja objetivo.
          </p>
        </section>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {poetryEntries.map((entry) => (
            <article
              key={entry.id}
              className="rounded-[1.8rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-5 shadow-[0_26px_70px_rgba(3,8,20,0.24)]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full border border-[#4dd4ff]/20 bg-[#081526] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#4dd4ff]">
                  {slotLabels[entry.slot]}
                </span>
                <span className="text-xs text-white/45">{entry.cadence}</span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">{entry.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/66">{entry.excerpt}</p>

              <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-3 text-xs text-white/62">
                <p>
                  Hora objetivo ({slotLabels[entry.slot]}):{" "}
                  <span className="font-semibold text-white">{entry.targetMealTimeSpain}</span>
                </p>
                <p className="mt-1">
                  Publicación automática:{" "}
                  <span className="font-semibold text-[#f6b34a]">{entry.publishTimeSpain}</span>
                </p>
              </div>

              <div className="mt-4 space-y-2 text-sm leading-7 text-white/74">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
          >
            Volver al inicio
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
          >
            Ver blog
          </Link>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4dd4ff]/40 hover:bg-white/[0.06]"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </main>
  );
}
