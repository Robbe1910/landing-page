"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GOOGLE_CALENDAR_LINK } from "../app/home-data";

export function HomeHero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLofiOpen, setIsLofiOpen] = useState(false);
  const [isLofiPlaying, setIsLofiPlaying] = useState(false);
  const [lofiVolume, setLofiVolume] = useState(0.45);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = lofiVolume;
    const onPlay = () => setIsLofiPlaying(true);
    const onPause = () => setIsLofiPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [lofiVolume]);

  const toggleLofi = async () => {
    const audio = audioRef.current;
    const nextOpen = !isLofiOpen;
    setIsLofiOpen(nextOpen);
    if (!audio) return;
    if (!nextOpen) {
      audio.pause();
      return;
    }
    if (audio.paused) await audio.play();
    else audio.pause();
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#06122b] px-6 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(34,98,255,0.22),transparent_24%),radial-gradient(circle_at_74%_74%,rgba(132,243,43,0.28),transparent_30%),linear-gradient(135deg,#020819_0%,#06122b_44%,#0c274f_100%)]" />
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute -bottom-10 right-[-4rem] h-[28rem] w-[28rem] rounded-full bg-[#82f52a]/30 blur-3xl" />

      <nav className="absolute left-1/2 top-6 z-10 flex -translate-x-1/2 flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase tracking-wide">
        <Link href="/musica" className="rounded-full border border-[#2a63ff]/80 bg-[#071838]/55 px-4 py-2 text-white/90 transition hover:border-[#84f32b]">Música</Link>
        <Link href="/blog" className="rounded-full border border-[#84f32b]/70 bg-[#071838]/55 px-4 py-2 text-white/90 transition hover:border-[#20c8ff]">Blog</Link>
        <Link href="/proyectos" className="rounded-full border border-[#84f32b]/70 bg-[#071838]/55 px-4 py-2 text-white/90 transition hover:border-[#20c8ff]">Proyectos</Link>
      </nav>

      <div className="absolute right-4 top-24 z-10 w-[min(92vw,22rem)] md:right-8 md:top-8">
        <div className="rounded-[1.75rem] border border-white/10 bg-[#071838]/60 p-2 backdrop-blur-xl">
          <button type="button" onClick={toggleLofi} className="flex w-full items-center justify-between gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10">
            <span className="flex items-center gap-3">
              <span className="lofi-glow flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#215dff_0%,#20c8ff_44%,#84f32b_100%)] text-black">♫</span>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.26em] text-white/45">Focus mode</span>
                <span className="block text-sm font-semibold text-white">Lo-Fi Mode</span>
              </span>
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              {isLofiOpen ? (isLofiPlaying ? "Pause" : "Play") : "Open"}
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${isLofiOpen ? "mt-3 max-h-[22rem] translate-y-0 opacity-100" : "mt-0 max-h-0 -translate-y-2 opacity-0"}`}>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold">Rainy Day Rhodes</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">Ambient</p>
              <p className="mt-3 text-sm text-white/70">Activa una capa sonora suave para recorrer la landing con menos fricción y más permanencia.</p>
              <label className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45">
                <span>Volumen</span>
                <input type="range" min={0} max={1} step={0.05} value={lofiVolume} onChange={(e) => setLofiVolume(Number(e.target.value))} className="h-1 flex-1 accent-[#84f32b]" />
              </label>
              <audio ref={audioRef} className="mt-4 w-full opacity-90" controls loop preload="none" src="/audio/rainy-day-rhodes.mp3" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mb-7 animate-[fade-up_700ms_ease-out]">
        <div className="relative h-52 w-52 md:h-72 md:w-72">
          <Image src="/logo.png" alt="Logo Robbe" fill className="scale-[1.7] object-contain object-center drop-shadow-[0_0_44px_rgba(32,200,255,0.34)] md:scale-[1.9]" priority />
        </div>
      </div>

      <h1 className="relative z-10 animate-[fade-up_820ms_ease-out] font-[family:var(--font-alfa-slab-one)] text-5xl tracking-[-0.03em] md:text-7xl">Desarrollador Web</h1>
      <p className="relative z-10 mt-4 max-w-xl animate-[fade-up_920ms_ease-out] text-lg text-white/78 md:text-xl">Digitaliza tu negocio fácilmente</p>
      <a href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="relative z-10 mt-8 inline-flex animate-[fade-up_1040ms_ease-out] items-center rounded-full bg-[linear-gradient(90deg,#215dff_0%,#20c8ff_46%,#84f32b_100%)] px-8 py-3 font-[family:var(--font-alfa-slab-one)] text-sm text-white shadow-[0_12px_32px_rgba(33,93,255,0.3)] transition duration-300 hover:scale-[1.03] md:text-base">Agendar una Consulta</a>
    </section>
  );
}
