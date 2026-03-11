"use client";

import { useEffect, useRef, useState } from "react";

type TranscriptItem = {
  id: string;
  role: "user" | "assistant";
  text: string;
  interrupted?: boolean;
};

const voiceOptions = ["Eve", "Ara", "Leo", "Rex", "Sal"] as const;

const audioToBase64 = (int16: Int16Array) => {
  const bytes = new Uint8Array(int16.buffer, int16.byteOffset, int16.byteLength);
  let binary = "";
  const chunkSize = 0x2000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
};

const base64ToFloat32 = (base64: string) => {
  const raw = atob(base64);
  const bytes = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i += 1) bytes[i] = raw.charCodeAt(i);
  const int16 = new Int16Array(bytes.buffer);
  const float32 = new Float32Array(int16.length);
  for (let i = 0; i < int16.length; i += 1) float32[i] = int16[i] / 32768;
  return float32;
};

export function VoiceLab() {
  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const workletNodeRef = useRef<AudioWorkletNode | null>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const currentResponseIdRef = useRef<string | null>(null);
  const nextPlayTimeRef = useRef(0);
  const queuedSourcesRef = useRef<AudioBufferSourceNode[]>([]);
  const refreshTimerRef = useRef<number | null>(null);
  const connectionTimeoutRef = useRef<number | null>(null);
  const sessionReadyRef = useRef(false);
  const micBufferRef = useRef<Int16Array[]>([]);

  const [status, setStatus] = useState<"idle" | "connecting" | "active" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [voice, setVoice] = useState<(typeof voiceOptions)[number]>("Eve");
  const [instructions, setInstructions] = useState("Responde en español, breve y directo.");
  const [vadThreshold, setVadThreshold] = useState(0.85);
  const [silenceMs, setSilenceMs] = useState(200);
  const [tokenExpiresAt, setTokenExpiresAt] = useState<number | null>(null);
  const [transcript, setTranscript] = useState<TranscriptItem[]>([]);

  const interruptPlayback = () => {
    for (const source of queuedSourcesRef.current) {
      try { source.stop(); } catch {}
    }
    queuedSourcesRef.current = [];
    nextPlayTimeRef.current = 0;
  };

  const cleanup = () => {
    if (refreshTimerRef.current) window.clearTimeout(refreshTimerRef.current);
    if (connectionTimeoutRef.current) window.clearTimeout(connectionTimeoutRef.current);
    interruptPlayback();
    workletNodeRef.current?.disconnect();
    sourceNodeRef.current?.disconnect();
    micStreamRef.current?.getTracks().forEach((track) => track.stop());
    audioContextRef.current?.close().catch(() => undefined);
    wsRef.current?.close();
    wsRef.current = null;
    workletNodeRef.current = null;
    sourceNodeRef.current = null;
    micStreamRef.current = null;
    audioContextRef.current = null;
    sessionReadyRef.current = false;
    micBufferRef.current = [];
  };

  useEffect(() => cleanup, []);

  const scheduleRefresh = (expiresAt: number) => {
    setTokenExpiresAt(expiresAt);
    if (refreshTimerRef.current) window.clearTimeout(refreshTimerRef.current);
    const delay = Math.max(1000, expiresAt * 1000 - Date.now() - 5000);
    refreshTimerRef.current = window.setTimeout(() => {
      if (status === "active") disconnect();
    }, delay);
  };

  const fetchToken = async () => {
    const response = await fetch("/api/xai/realtime/token", { method: "POST" });
    const data = await response.json();
    if (!response.ok) throw new Error(data?.error || "No se pudo crear el token efímero.");
    if (data?.expiresAt) scheduleRefresh(data.expiresAt);
    return data?.token as string;
  };

  const playChunk = (base64: string) => {
    const audioContext = audioContextRef.current;
    if (!audioContext) return;
    const float32 = base64ToFloat32(base64);
    const buffer = audioContext.createBuffer(1, float32.length, 24000);
    buffer.getChannelData(0).set(float32);
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    const startAt = Math.max(audioContext.currentTime, nextPlayTimeRef.current);
    source.start(startAt);
    nextPlayTimeRef.current = startAt + buffer.duration;
    queuedSourcesRef.current.push(source);
    source.onended = () => {
      queuedSourcesRef.current = queuedSourcesRef.current.filter((item) => item !== source);
    };
  };

  const flushBufferedAudio = () => {
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN || !sessionReadyRef.current) return;
    for (const chunk of micBufferRef.current) {
      ws.send(JSON.stringify({ type: "input_audio_buffer.append", audio: audioToBase64(chunk) }));
    }
    micBufferRef.current = [];
  };

  const handleServerEvent = (event: Record<string, unknown>) => {
    switch (event.type) {
      case "session.updated":
        sessionReadyRef.current = true;
        setStatus("active");
        flushBufferedAudio();
        break;
      case "input_audio_buffer.speech_started":
        interruptPlayback();
        currentResponseIdRef.current = null;
        wsRef.current?.send(JSON.stringify({ type: "response.cancel" }));
        setTranscript((prev) => prev.map((item) => item.role === "assistant" ? { ...item, interrupted: true } : item));
        break;
      case "conversation.item.input_audio_transcription.completed": {
        const text = String(event.transcript ?? "").trim();
        if (!text) break;
        setTranscript((prev) => [...prev, { id: crypto.randomUUID(), role: "user", text }]);
        break;
      }
      case "response.created": {
        const response = event.response as { id?: string } | undefined;
        currentResponseIdRef.current = response?.id ?? crypto.randomUUID();
        setTranscript((prev) => [...prev, { id: currentResponseIdRef.current ?? crypto.randomUUID(), role: "assistant", text: "" }]);
        break;
      }
      case "response.output_audio_transcript.delta": {
        const delta = String(event.delta ?? "");
        const currentId = currentResponseIdRef.current;
        if (!currentId) break;
        setTranscript((prev) => prev.map((item) => item.id === currentId ? { ...item, text: `${item.text}${delta}` } : item));
        break;
      }
      case "response.output_audio.delta":
        if (typeof event.delta === "string") playChunk(event.delta);
        break;
      case "response.done":
        currentResponseIdRef.current = null;
        break;
      case "error":
        setError(String(event.message ?? "Error desconocido."));
        setStatus("error");
        break;
      default:
        break;
    }
  };

  const connect = async () => {
    try {
      setError(null);
      setStatus("connecting");
      const token = await fetchToken();
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, sampleRate: 24000 },
      });
      micStreamRef.current = stream;

      const audioContext = new AudioContext({ sampleRate: 24000 });
      audioContextRef.current = audioContext;
      if (audioContext.state === "suspended") await audioContext.resume();
      await audioContext.audioWorklet.addModule("/pcm-processor-worklet.js");

      const sourceNode = audioContext.createMediaStreamSource(stream);
      const workletNode = new AudioWorkletNode(audioContext, "pcm-processor");
      sourceNode.connect(workletNode);
      sourceNodeRef.current = sourceNode;
      workletNodeRef.current = workletNode;

      const ws = new WebSocket("wss://api.x.ai/v1/realtime", [`xai-client-secret.${token}`]);
      wsRef.current = ws;

      workletNode.port.onmessage = (message) => {
        const chunk = message.data as Int16Array;
        const isReady = sessionReadyRef.current && ws.readyState === WebSocket.OPEN;
        if (isReady) ws.send(JSON.stringify({ type: "input_audio_buffer.append", audio: audioToBase64(chunk) }));
        else micBufferRef.current.push(chunk);
      };

      connectionTimeoutRef.current = window.setTimeout(() => {
        if (ws.readyState !== WebSocket.OPEN) {
          setError("Timeout conectando con la sesión de voz.");
          setStatus("error");
          cleanup();
        }
      }, 10000);

      ws.onopen = () => {
        ws.send(JSON.stringify({
          type: "session.update",
          session: {
            voice,
            instructions,
            turn_detection: { type: "server_vad", threshold: vadThreshold, silence_duration_ms: silenceMs },
            input_audio_transcription: { model: "grok-2-audio" },
            audio: {
              input: { format: { type: "audio/pcm", rate: 24000 } },
              output: { format: { type: "audio/pcm", rate: 24000 } },
            },
          },
        }));
      };
      ws.onmessage = ({ data }) => handleServerEvent(JSON.parse(String(data)) as Record<string, unknown>);
      ws.onerror = () => {
        setError("La conexión de voz ha fallado.");
        setStatus("error");
      };
      ws.onclose = () => {
        if (status !== "idle") setStatus("idle");
      };
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "No se pudo iniciar la voz.");
      setStatus("error");
      cleanup();
    }
  };

  const disconnect = () => {
    cleanup();
    setStatus("idle");
  };

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-14 text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4dd4ff]">Voz en tiempo real</p>
          <h2 className="text-3xl font-semibold">Agente de voz con Grok</h2>
          <p className="text-gray-200">Conecta micrófono y altavoces del navegador. Usamos token efímero, VAD del servidor y transcripción en vivo.</p>
          <div className="grid gap-3 rounded-xl border border-slate-800 bg-black/40 p-4">
            <label className="flex items-center justify-between gap-3 text-sm"><span>Voz</span><select value={voice} onChange={(e) => setVoice(e.target.value as (typeof voiceOptions)[number])} className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white">{voiceOptions.map((v) => <option key={v}>{v}</option>)}</select></label>
            <label className="flex flex-col gap-2 text-sm"><span>Instrucciones</span><textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white" rows={3} suppressHydrationWarning /></label>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <label className="flex flex-col gap-1"><span>VAD</span><input type="range" min={0.1} max={1} step={0.05} value={vadThreshold} onChange={(e) => setVadThreshold(parseFloat(e.target.value))} /><span className="text-xs text-gray-400">{vadThreshold.toFixed(2)}</span></label>
              <label className="flex flex-col gap-1"><span>Silencio</span><input type="range" min={0} max={1500} step={50} value={silenceMs} onChange={(e) => setSilenceMs(parseInt(e.target.value, 10))} /><span className="text-xs text-gray-400">{silenceMs} ms</span></label>
            </div>
            <p className="text-xs text-gray-500">Estado: {status}{tokenExpiresAt ? ` · token expira en ${Math.max(0, Math.floor(tokenExpiresAt - Date.now() / 1000))}s` : ""}</p>
            {error && <p className="text-sm text-red-400">{error}</p>}
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-black/60 p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-sm capitalize text-gray-200">{status}</p>
            <button type="button" onClick={status === "idle" || status === "error" ? connect : disconnect} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${status === "idle" || status === "error" ? "bg-[linear-gradient(90deg,#3f66ff_0%,#2dd4ff_100%)] text-white hover:opacity-95" : "bg-red-500 text-white hover:bg-red-400"}`}>{status === "idle" || status === "error" ? "Conectar" : "Detener"}</button>
          </div>
          <div className="max-h-[360px] space-y-3 overflow-y-auto pr-1">
            {transcript.length === 0 && <p className="text-sm text-gray-500">Aún no hay mensajes. Pulsa conectar y habla.</p>}
            {transcript.map((item) => <div key={item.id} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3"><div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs uppercase">{item.role === "user" ? "Tú" : "AI"}</div><div className="text-sm text-gray-100"><p className={item.interrupted ? "opacity-60" : ""}>{item.text || "..."}</p>{item.interrupted && <span className="text-xs text-orange-400">(interrumpido)</span>}</div></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
