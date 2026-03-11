"use client";

import { useEffect, useState } from "react";

export function TtsCard() {
  const [text, setText] = useState("Hola, esta es una prueba con la voz Eve.");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  const handleGenerate = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!text.trim()) {
      setError("Escribe algo de texto.");
      return;
    }

    setError(null);
    setIsLoading(true);

    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }

    try {
      const response = await fetch("/api/xai/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text.trim() }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "No se pudo generar audio.");
      }

      const blob = await response.blob();
      setAudioUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      setError("Error generando audio. Reintenta.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 px-6 py-12">
      <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4dd4ff]">Text-to-Speech</p>
          <h2 className="text-3xl font-semibold text-black">Voz Eve on-demand (mp3)</h2>
          <p className="text-gray-700">Genera audio bajo clic y reprodúcelo en la página. La clave se usa solo en el backend.</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
            <li>Formato: mp3, 44.1 kHz, 128 kbps.</li>
            <li>Ideal para botones de reproducir o leer en la web.</li>
            <li>Si quieres otro idioma o voz, cambia los parámetros en el endpoint.</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <form onSubmit={handleGenerate} className="space-y-3" suppressHydrationWarning>
            <label className="text-sm font-semibold text-gray-900">Texto a leer</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#4dd4ff] focus:outline-none"
              rows={4}
              placeholder="Escribe el texto que quieras convertir a audio..."
              suppressHydrationWarning
            />
            <button type="submit" disabled={isLoading} suppressHydrationWarning className="w-full rounded-xl bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] px-4 py-3 font-bold text-white transition hover:opacity-95 disabled:opacity-60">
              {isLoading ? "Generando..." : "Generar y reproducir"}
            </button>
          </form>
          {error && <p className="text-sm text-red-500">{error}</p>}
          {audioUrl ? (
            <div className="space-y-2">
              <audio controls src={audioUrl} className="w-full" />
              <p className="text-xs text-gray-500">El audio se genera bajo demanda y no expone la API key.</p>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-gray-300 px-4 py-10 text-center text-gray-500">
              Aún no hay audio. Genera para reproducirlo aquí.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
