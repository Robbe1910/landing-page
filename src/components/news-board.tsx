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
    <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
        <span className="rounded-full border border-lime-300 px-3 py-1 text-lime-700">{item.displayDate}</span>
        <span className="rounded-full border border-gray-200 px-3 py-1 text-gray-700">{item.category}</span>
        <span className="rounded-full border border-gray-200 px-3 py-1 text-gray-500">{item.interest}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-black">{item.title}</h3>
      <p className="mt-2 text-sm text-gray-700">{item.summary}</p>
      <a
        href={item.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-sm font-semibold text-lime-700 transition hover:text-lime-800"
      >
        Fuente: {item.sourceName}
      </a>
    </article>
  );
}

export function NewsBoard() {
  const [range, setRange] = useState<TimeRange>("month");

  const filtered = useMemo(() => getNewsByRange(range, new Date()), [range]);

  return (
    <section className="mt-14 rounded-2xl border border-gray-200 bg-gradient-to-br from-lime-50 via-white to-gray-50 px-6 py-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-lime-700">Noticias y archivo</p>
          <h2 className="mt-2 text-2xl font-semibold text-black">
            Filtra por día, semana, mes o año
          </h2>
          <p className="mt-2 text-gray-700">
            Elige una ventana de tiempo para ver las novedades más recientes sin perder el histórico.
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
                    ? "border-black bg-black text-white shadow-sm"
                    : "border-gray-300 bg-white text-gray-700 hover:border-lime-300 hover:text-lime-700"
                }`}
                aria-pressed={active}
              >
                {option.label}
                <span className="ml-1 text-xs font-normal text-gray-500">({option.helper})</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-5 text-sm text-gray-600">
        Mostrando {filtered.length} de {newsArchive.length} noticias.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((news) => (
          <NewsCard key={news.id} item={news} />
        ))}
      </div>
    </section>
  );
}
