"use client";

import { useMemo, useState } from "react";
import { getNewsByRange, newsArchive, type NewsItem, type TimeRange } from "../data/newsArchive";

const ranges: { id: TimeRange; label: string; helper: string }[] = [
  { id: "day", label: "Último día", helper: "24h" },
  { id: "week", label: "Última semana", helper: "7d" },
  { id: "month", label: "Último mes", helper: "30d" },
  { id: "year", label: "Último año", helper: "365d" },
  { id: "all", label: "Todo", helper: `${newsArchive.length} items` },
];

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="rounded-[1.6rem] border border-white/10 bg-[rgba(6,12,26,0.82)] p-5 shadow-[0_26px_70px_rgba(3,8,20,0.24)] transition hover:-translate-y-1 hover:border-[#4dd4ff]/20">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
        <span className="rounded-full border border-[#4dd4ff]/20 bg-[#081526] px-3 py-1 text-[#4dd4ff]">
          {item.displayDate}
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-white/70">
          {item.category}
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-white/54">
          {item.interest}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-7 text-white/66">{item.summary}</p>
      <a
        href={item.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-sm font-semibold text-[#4dd4ff] transition hover:text-white"
      >
        Fuente: {item.sourceName}
      </a>
    </article>
  );
}

export function NewsBoard() {
  const [range, setRange] = useState<TimeRange>("month");

  const filtered = useMemo(() => getNewsByRange(range), [range]);

  return (
    <section className="mt-14 rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] px-6 py-8 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4dd4ff]">Noticias y archivo</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Filtra por día, semana, mes o año</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-white/66">
            Elige una ventana de tiempo para revisar las novedades más recientes sin perder el histórico.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {ranges.map((option) => {
            const active = option.id === range;

            return (
              <button
                key={option.id}
                onClick={() => setRange(option.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "border-[#4dd4ff]/25 bg-[#081526] text-[#4dd4ff]"
                    : "border-white/10 bg-white/[0.03] text-white/72 hover:border-[#4dd4ff]/20 hover:text-white"
                }`}
                aria-pressed={active}
              >
                {option.label}
                <span className="ml-1 text-xs font-normal text-white/45">({option.helper})</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-5 text-sm text-white/54">
        Mostrando {filtered.length} de {newsArchive.length} noticias.
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((news) => (
            <NewsCard key={news.id} item={news} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-[1.6rem] border border-dashed border-white/12 bg-white/[0.02] px-5 py-10 text-sm text-white/58">
          No hay entradas dentro de esa ventana todavía. Cambia el filtro o revisa el histórico completo.
        </div>
      )}
    </section>
  );
}
