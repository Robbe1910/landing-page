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

const VideoLab = dynamic(() => import("./video-lab").then((mod) => mod.VideoLab), {
  ssr: false,
  loading: () => (
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] px-6 py-12 text-center text-sm text-white/52 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
      Cargando Video Lab...
    </div>
  ),
});

const VoiceLab = dynamic(() => import("./voice-lab").then((mod) => mod.VoiceLab), {
  ssr: false,
  loading: () => (
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] px-6 py-12 text-center text-sm text-white/52 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
      Cargando Voice Lab...
    </div>
  ),
});

const TtsCard = dynamic(() => import("./tts-card").then((mod) => mod.TtsCard), {
  ssr: false,
  loading: () => (
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] px-6 py-12 text-center text-sm text-white/52 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
      Cargando TTS Lab...
    </div>
  ),
});

type ProjectsExtrasProps = {
  instagramUrl: string;
};

export function ProjectsExtras({ instagramUrl }: ProjectsExtrasProps) {
  return (
    <>
      <section className="mt-14 space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4dd4ff]">Laboratorios</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Prototipos de vídeo, voz y TTS aplicados a producto.</h2>
        </div>
        <VideoLab />
        <VoiceLab />
        <TtsCard />
      </section>

      <section className="mt-14 rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] px-6 py-8 shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4dd4ff]">Instagram</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Proceso, lanzamientos y piezas cortas.</h2>
            <p className="mt-2 text-sm leading-7 text-white/66">
              Una muestra visual del trabajo diario, lanzamientos y piezas cortas que acompañan a la marca.
            </p>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(63,102,255,0.34)] transition hover:scale-[1.02]"
          >
            Ver Instagram
          </a>
        </div>
        <div className="mt-8">
          <InstagramEmbeds />
        </div>
      </section>
    </>
  );
}
