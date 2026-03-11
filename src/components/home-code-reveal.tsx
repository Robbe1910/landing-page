"use client";

import { useEffect, useState } from "react";

const decodeSteps = [
  {
    title: "369 leído como patrón",
    detail:
      "Inviertes el 3 y aparece una primera silueta de 8: antes de ejecutar, toca aprender a leer mejor el sistema.",
  },
  {
    title: "6 y 9 cerrando ciclo",
    detail:
      "Cuando se espejan aparece otro 8: equilibrio entre idea, estructura y la forma concreta de aterrizarla.",
  },
  {
    title: "El tercer 8 es constancia",
    detail:
      "La repetición no es humo. Es método, iteración y aguante hasta que la pieza responde como debe.",
  },
];

const codeTraits = [
  "Estructura antes que ruido.",
  "Proceso real antes que humo.",
  "Constancia antes que promesa vacía.",
];

export function HomeCodeReveal() {
  const [isOpen, setIsOpen] = useState(false);
  const [glitchText, setGlitchText] = useState("369");

  useEffect(() => {
    if (isOpen) {
      setGlitchText("888");
      return;
    }

    const sequences = ["369", "398", "689", "986", "838", "889"];
    const chars = "3698";

    const interval = window.setInterval(() => {
      const nextValue =
        Math.random() > 0.45
          ? sequences[Math.floor(Math.random() * sequences.length)]
          : Array.from({ length: 3 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");

      setGlitchText(nextValue);
    }, 180);

    return () => window.clearInterval(interval);
  }, [isOpen]);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] px-6 py-10 shadow-[0_32px_80px_rgba(3,8,20,0.28)] sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(63,102,255,0.12),transparent_32%),radial-gradient(circle_at_72%_20%,rgba(77,212,255,0.14),transparent_22%)]" />
      <div className="pointer-events-none absolute right-6 top-4 text-[7rem] font-black leading-none text-white/[0.04]">
        888
      </div>

      <div className="relative z-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4dd4ff]">
          Código 888
        </p>
        <h3 className="mt-3 text-3xl font-semibold text-white">
          Precisión técnica con símbolo propio
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/72">
          El 888 en Robbe360 no tapa el trabajo. Lo ordena. Sirve para recordar estructura, repetición
          deliberada y consistencia cuando toca construir algo que de verdad funcione.
        </p>

        <div className="mx-auto mt-8 max-w-4xl rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(2,7,16,0.98),rgba(3,10,20,0.92))] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_70px_rgba(3,8,20,0.3)]">
          <div className="pointer-events-none absolute inset-x-12 top-[7.2rem] h-px bg-[linear-gradient(90deg,transparent,rgba(186,242,108,0.16),transparent)]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-white/40">
            Secuencia 369 · 888
          </p>

          <div className="mt-6 min-h-[7rem]">
            <span
              className={`cipher-display inline-flex items-center justify-center font-mono text-6xl font-black tracking-[0.16em] sm:text-8xl ${
                isOpen
                  ? "cipher-display--unlocked text-[#baf26c]"
                  : "cipher-display--locked text-white/16"
              }`}
              aria-label={isOpen ? "Código 888 desbloqueado" : "Secuencia 369 en decodificación"}
            >
              {glitchText}
            </span>
          </div>

          <div
            className={`mx-auto mt-6 max-w-xl transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            aria-hidden={!isOpen}
          >
            <p className="text-lg leading-8 text-white/76">
              Del patrón a la ejecución. Cuando la idea se ordena, el sistema deja de sonar místico y empieza a funcionar.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#baf26c]">
              Acceso concedido · Robbe360
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] ${
              isOpen
                ? "border border-[#baf26c]/24 bg-[#151f10] text-[#efffd8] shadow-[0_12px_28px_rgba(186,242,108,0.16)]"
                : "bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] shadow-[0_14px_34px_rgba(63,102,255,0.34)]"
            }`}
            aria-expanded={isOpen}
          >
            {isOpen ? "Replegar secuencia" : "Decodificar secuencia"}
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="cipher-dot h-1.5 w-1.5 rounded-full bg-[#baf26c]/60"
                style={{ animationDelay: `${dot * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className={`relative z-10 mx-auto mt-8 max-w-4xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[44rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 text-left">
          <p className="text-base leading-8 text-white/76">
            El 369 aquí no entra como teoría vacía. Funciona como recordatorio visual de cómo ordeno el
            trabajo: leer patrones, cerrar ciclos y sostener consistencia hasta que la pieza aguante de verdad.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {decodeSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-[1.25rem] border border-[#4dd4ff]/18 bg-[#081526] p-4 text-sm text-white/74"
              >
                <p className="font-semibold text-white">{step.title}</p>
                <p className="mt-2 leading-7 text-white/66">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-[rgba(8,21,38,0.9)] p-5">
            <p className="text-base leading-8 text-white/76">
              XEMOS me sirvió para aterrizar esa lógica en algo concreto: ocho puntos de precisión,
              sensores, app complementaria y una manera de pensar donde código y sistema físico se
              entienden entre sí.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {codeTraits.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-4 text-sm text-white/74"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
