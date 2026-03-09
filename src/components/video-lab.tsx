"use client";

import { useEffect, useRef, useState } from "react";

export function VideoLab() {
  const pollTimerRef = useRef<number | null>(null);
  const [videoPrompt, setVideoPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [requestId, setRequestId] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [statusText, setStatusText] = useState("Listo para generar");
  const [videoError, setVideoError] = useState<string | null>(null);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);

  useEffect(() => {
    return () => {
      if (pollTimerRef.current) window.clearInterval(pollTimerRef.current);
    };
  }, []);

  const stopPolling = () => {
    if (pollTimerRef.current) {
      window.clearInterval(pollTimerRef.current);
      pollTimerRef.current = null;
    }
  };

  const startPolling = (id: string) => {
    stopPolling();
    setStatusText("Generando...");
    pollTimerRef.current = window.setInterval(async () => {
      try {
        const response = await fetch(`/api/xai/video?id=${encodeURIComponent(id)}`);
        const data = await response.json();
        if (!response.ok) throw new Error(data?.error || "No se pudo consultar el estado del vídeo.");
        if (data?.status === "done") {
          setVideoUrl(data?.video?.url ?? null);
          setStatusText("Listo: vídeo generado");
          setIsGeneratingVideo(false);
          stopPolling();
          return;
        }
        if (data?.status === "expired") {
          setStatusText("Expirado. Lánzalo de nuevo.");
          setIsGeneratingVideo(false);
          stopPolling();
        }
      } catch (error) {
        console.error(error);
        setStatusText("Error al consultar estado.");
        setIsGeneratingVideo(false);
        stopPolling();
      }
    }, 4500);
  };

  const handleVideoSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!videoPrompt.trim()) {
      setVideoError("Escribe un prompt antes de generar el vídeo.");
      return;
    }
    setVideoError(null);
    setVideoUrl(null);
    setRequestId(null);
    setIsGeneratingVideo(true);
    setStatusText("Enviando solicitud...");
    try {
      const response = await fetch("/api/xai/video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: videoPrompt.trim(), imageUrl: imageUrl.trim() || undefined }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "No se pudo iniciar la generación.");
      if (!data?.requestId) throw new Error("La API no devolvió request_id.");
      setRequestId(data.requestId);
      startPolling(data.requestId);
    } catch (error) {
      console.error(error);
      setVideoError(error instanceof Error ? error.message : "Error inesperado.");
      setStatusText("No se pudo iniciar la generación.");
      setIsGeneratingVideo(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 px-6 py-14 text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-lime-400">IA en vivo</p>
          <h2 className="text-3xl font-semibold">Genera vídeo con Grok</h2>
          <ul className="grid gap-2 text-gray-200">
            <li>1. Escribe un prompt claro.</li>
            <li>2. Opcional: añade una URL de imagen pública.</li>
            <li>3. Espera al estado final y descarga el MP4.</li>
          </ul>
          <div className="rounded-xl border border-gray-800 bg-black/40 p-4">
            <p className="text-sm text-gray-300">Estado: {statusText}</p>
            {requestId && <p className="mt-1 break-all text-xs text-gray-500">request_id: {requestId}</p>}
            {videoError && <p className="mt-2 text-sm text-red-400">{videoError}</p>}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-black/60 p-6 shadow-xl">
          <form className="space-y-4" onSubmit={handleVideoSubmit} suppressHydrationWarning>
            <textarea value={videoPrompt} onChange={(e) => setVideoPrompt(e.target.value)} placeholder="Ej: A glowing crystal-powered rocket launching from Mars..." className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-lime-400 focus:outline-none" rows={4} suppressHydrationWarning />
            <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-lime-400 focus:outline-none" suppressHydrationWarning />
            <button type="submit" disabled={isGeneratingVideo} suppressHydrationWarning className="flex w-full items-center justify-center rounded-xl bg-lime-400 px-5 py-3 font-bold text-black transition hover:bg-lime-300 disabled:opacity-70">{isGeneratingVideo ? "Generando..." : "Generar vídeo con Grok"}</button>
          </form>
          <div className="mt-6 space-y-3">
            <p className="text-sm text-gray-300">Previsualización</p>
            {videoUrl ? <div className="overflow-hidden rounded-xl border border-gray-800 bg-black"><video key={videoUrl} controls className="w-full" src={videoUrl} /><div className="flex flex-wrap items-center gap-3 bg-gray-950 px-4 py-3"><a href={videoUrl} download className="rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-black hover:bg-lime-300">Descargar MP4</a><span className="text-xs text-gray-400">La URL es temporal, guárdala si quieres usarla luego.</span></div></div> : <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900/60 px-4 py-10 text-center text-gray-500">Aún no hay vídeo. Genera uno y aparecerá aquí.</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
