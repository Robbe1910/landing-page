"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GOOGLE_CALENDAR_LINK } from "../app/home-data";

type GrokQA = { q: string; a: string };

const grokQuestions: GrokQA[] = [
  {
    q: "¿Cómo agendar una consulta?",
    a: "Pulsa “Agendar una Consulta” para abrir Google Calendar. Si prefieres, escribe “Quiero agenda” al WhatsApp y te paso hueco (zona horaria Madrid).",
  },
  {
    q: "¿Qué incluye el pack landing 48h?",
    a: "Wireframe probado, textos base, conexión a WhatsApp, prueba social visible y una ronda rápida de ajustes. Entrega en 48h.",
  },
  {
    q: "Redes sociales de Robbe360",
    a: "Instagram y TikTok: @rxbbe8369. LinkedIn: Roberto Berrendo Eguino. Todas enlazadas desde el footer y la sección de Blog.",
  },
  {
    q: "Enlace al WhatsApp directo",
    a: "https://wa.me/609881656 — Mensaje directo para dudas rápidas o reservar.",
  },
  {
    q: "Email de contacto",
    a: "robertoberrendo@gmail.com — Envíame contexto y agendamos llamada.",
  },
];

export function HomeHero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLofiOpen, setIsLofiOpen] = useState(false);
  const [isGrokOpen, setIsGrokOpen] = useState(false);
  const [isLofiPlaying, setIsLofiPlaying] = useState(false);
  const [lofiVolume, setLofiVolume] = useState(0.45);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [grokAnswer, setGrokAnswer] = useState("");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = lofiVolume;

    const onPlay = () => setIsLofiPlaying(true);
    const onPause = () => setIsLofiPlaying(false);
    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration || 0);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
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
    if (audio.paused) {
      try {
        await audio.play();
      } catch (err) {
        // Some browsers block autoplay; keep panel open but silent.
      }
    } else {
      audio.pause();
    }
  };

  const toggleGrok = () => setIsGrokOpen((v) => !v);
  const handleGrokQuestion = (qa: GrokQA) => setGrokAnswer(qa.a);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
      } catch (err) {
        /* ignore */
      }
    } else {
      audio.pause();
    }
  };

  const formatTime = (secs: number) => {
    if (!Number.isFinite(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
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

      <div className={`fixed right-4 top-6 z-30 w-[min(92vw,22rem)] transition ${isLofiOpen ? "opacity-100" : "opacity-0 pointer-events-none"} md:right-8`}>
        <div className="rounded-[1.75rem] border border-white/10 bg-[#071838]/75 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
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
      <div className="relative z-10 mt-6 animate-[fade-up_1120ms_ease-out]">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#84f32b]" />
          Precisión digital para negocios reales
        </span>
      </div>

      {/* Floating action bubbles */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
        <button
          type="button"
          onClick={toggleLofi}
          className={`group flex h-12 items-center gap-3 rounded-full border border-white/15 px-3 pl-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#84f32b]/70 hover:shadow-[0_16px_36px_rgba(0,0,0,0.45)] ${
            isLofiPlaying ? "bg-[linear-gradient(120deg,#215dff_0%,#20c8ff_40%,#84f32b_100%)]" : "bg-[#071838]/70"
          }`}
          aria-expanded={isLofiOpen}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-lg">♫</span>
          <span className="pr-1 text-xs uppercase tracking-[0.2em]">
            {isLofiPlaying ? "Pausar" : "Focus Mode"}
          </span>
        </button>

        <button
          type="button"
          onClick={toggleGrok}
          className="group flex h-12 items-center gap-3 rounded-full border border-white/15 bg-[#0b1f3f]/80 px-3 pl-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#20c8ff]/70 hover:shadow-[0_16px_36px_rgba(0,0,0,0.45)]"
          aria-expanded={isGrokOpen}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#20c8ff_0%,#84f32b_100%)] text-black text-lg">
            ?
          </span>
          <span className="pr-1 text-xs uppercase tracking-[0.2em]">Grok FAQ</span>
        </button>
      </div>

      {/* Grok / FAQ drawer */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-[min(92vw,22rem)] origin-bottom-right transform transition-all duration-200 md:right-8 ${
          isGrokOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-[#08142f]/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/45">Grok helper</p>
              <p className="text-sm font-semibold text-white">Pregúntame</p>
            </div>
            <button onClick={toggleGrok} className="rounded-full border border-white/15 px-2 py-1 text-xs text-white/70 hover:bg-white/10">
              Cerrar
            </button>
          </div>
          <p className="mt-3 text-sm text-white/75">
            Pregunta sobre la web, precios, redes o agenda y te doy una respuesta breve tipo FAQ.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            {grokQuestions.map((qa) => (
              <button
                key={qa.q}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-white/80 transition hover:border-[#20c8ff]/60 hover:bg-white/10"
                onClick={() => handleGrokQuestion(qa)}
              >
                {qa.q}
              </button>
            ))}
          </div>
          {grokAnswer ? (
            <div className="mt-3 rounded-xl border border-white/10 bg-black/30 p-3 text-sm text-white/80">
              {grokAnswer}
            </div>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <a
              href="https://wa.me/609881656"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#84f32b]/60 bg-[#84f32b]/15 px-3 py-2 font-semibold text-[#c5ff9e] transition hover:bg-[#84f32b]/30"
            >
              WhatsApp
            </a>
            <a
              href="mailto:robertoberrendo@gmail.com"
              className="rounded-full border border-white/20 bg-white/5 px-3 py-2 font-semibold text-white/80 transition hover:bg-white/10"
            >
              Email
            </a>
            <a
              href="https://www.instagram.com/rxbbe8369/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#20c8ff]/60 bg-[#20c8ff]/15 px-3 py-2 font-semibold text-[#b7e9ff] transition hover:bg-[#20c8ff]/30"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
