"use client";

import dynamic from "next/dynamic";

const InstagramEmbeds = dynamic(
  () => import("./instagram-embeds").then((mod) => mod.InstagramEmbeds),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-4 py-10 text-center text-sm text-white/52">
        Cargando bloque de Instagram...
      </div>
    ),
  },
);

const NewsBoard = dynamic(
  () => import("./news-board").then((mod) => mod.NewsBoard),
  {
    ssr: false,
    loading: () => (
      <div className="mt-14 rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] px-6 py-10 text-center text-sm text-white/52 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
        Cargando archivo de noticias...
      </div>
    ),
  },
);

type BlogExtrasProps = {
  instagramUrl: string;
};

export function BlogExtras({ instagramUrl }: BlogExtrasProps) {
  return (
    <>
      <NewsBoard />

      <section className="mt-14 rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] px-6 py-8 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4dd4ff]">Instagram</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Contenido corto y avances de proceso</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/66">
              Tips, ensayos visuales, piezas de storytelling y parte del trabajo diario en formato corto.
            </p>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(63,102,255,0.34)] transition hover:scale-[1.02]"
          >
            Ver perfil principal
          </a>
        </div>

        <div className="mt-8">
          <InstagramEmbeds />
        </div>
      </section>
    </>
  );
}
