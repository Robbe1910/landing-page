module.exports = {

"[project]/src/components/voice-lab.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s({
    "VoiceLab": (()=>VoiceLab)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const voiceOptions = [
    "Eve",
    "Ara",
    "Leo",
    "Rex",
    "Sal"
];
function VoiceLab() {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [voice, setVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Eve");
    const [instructions, setInstructions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Eres un agente de soporte amable. Responde breve.");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [vadThreshold, setVadThreshold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.85);
    const [silenceMs, setSilenceMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(200);
    const [tokenExpiresAt, setTokenExpiresAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sourceNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const micStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const workletNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const micBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isSessionReadyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const nextPlayTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const playbackSourcesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const currentResponseIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tokenTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const intentionalDisconnectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const connectionTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Helpers
    const clearTokenTimer = ()=>{
        if (tokenTimerRef.current) {
            clearTimeout(tokenTimerRef.current);
            tokenTimerRef.current = null;
        }
    };
    const scheduleRefresh = (expiresAt)=>{
        clearTokenTimer();
        const now = Date.now() / 1000;
        const seconds = Math.max(expiresAt - now - 5, 5);
        tokenTimerRef.current = setTimeout(()=>{
            void fetchToken();
        }, seconds * 1000);
    };
    const clearConnectionTimeout = ()=>{
        if (connectionTimeoutRef.current) {
            clearTimeout(connectionTimeoutRef.current);
            connectionTimeoutRef.current = null;
        }
    };
    const fetchToken = async ()=>{
        try {
            const res = await fetch("/api/xai/realtime/token", {
                method: "POST"
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.error || "No se pudo crear token");
            }
            setTokenExpiresAt(data.expiresAt ?? null);
            if (data.expiresAt) scheduleRefresh(data.expiresAt);
            return data.token;
        } catch (err) {
            setError("No se pudo obtener token de sesion.");
            setStatus("error");
            console.error(err);
            return null;
        }
    };
    const audioToBase64 = (int16)=>{
        const bytes = new Uint8Array(int16.buffer, int16.byteOffset, int16.byteLength);
        const CHUNK = 0x2000;
        const parts = [];
        for(let i = 0; i < bytes.length; i += CHUNK){
            parts.push(String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + CHUNK))));
        }
        return btoa(parts.join(""));
    };
    const interruptPlayback = ()=>{
        playbackSourcesRef.current.forEach((src)=>{
            try {
                src.stop();
            } catch  {
            /* ignore */ }
        });
        playbackSourcesRef.current = [];
        nextPlayTimeRef.current = 0;
    };
    const playPcmChunk = (base64)=>{
        const audioCtx = audioCtxRef.current;
        if (!audioCtx) return;
        const raw = atob(base64);
        const bytes = new Uint8Array(raw.length);
        for(let i = 0; i < raw.length; i++)bytes[i] = raw.charCodeAt(i);
        const int16 = new Int16Array(bytes.buffer);
        const float32 = new Float32Array(int16.length);
        for(let i = 0; i < int16.length; i++)float32[i] = int16[i] / 32768;
        const buf = audioCtx.createBuffer(1, float32.length, 24000);
        buf.getChannelData(0).set(float32);
        const src = audioCtx.createBufferSource();
        src.buffer = buf;
        src.connect(audioCtx.destination);
        const now = audioCtx.currentTime;
        const startAt = Math.max(now, nextPlayTimeRef.current);
        src.start(startAt);
        nextPlayTimeRef.current = startAt + buf.duration;
        playbackSourcesRef.current.push(src);
        src.onended = ()=>{
            playbackSourcesRef.current = playbackSourcesRef.current.filter((s)=>s !== src);
        };
    };
    const stopAll = (nextStatus = "idle")=>{
        clearTokenTimer();
        clearConnectionTimeout();
        isSessionReadyRef.current = false;
        micBufferRef.current = [];
        currentResponseIdRef.current = null;
        intentionalDisconnectRef.current = true;
        try {
            wsRef.current?.close();
        } catch  {
        /* noop */ }
        wsRef.current = null;
        interruptPlayback();
        if (sourceNodeRef.current) {
            try {
                sourceNodeRef.current.disconnect();
            } catch  {
            /* noop */ }
            sourceNodeRef.current = null;
        }
        if (workletNodeRef.current) {
            try {
                workletNodeRef.current.port.close();
                workletNodeRef.current.disconnect();
            } catch  {
            /* noop */ }
            workletNodeRef.current = null;
        }
        if (micStreamRef.current) {
            micStreamRef.current.getTracks().forEach((t)=>t.stop());
            micStreamRef.current = null;
        }
        if (audioCtxRef.current) {
            audioCtxRef.current.close().catch(()=>undefined);
            audioCtxRef.current = null;
        }
        setStatus(nextStatus);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>stopAll();
    }, []);
    const start = async ()=>{
        setError(null);
        setStatus("connecting");
        intentionalDisconnectRef.current = false;
        try {
            const audioCtx = new AudioContext({
                sampleRate: 24000
            });
            if (audioCtx.state === "suspended") await audioCtx.resume();
            audioCtxRef.current = audioCtx;
        } catch (err) {
            console.error(err);
            setError("No se pudo preparar el audio del navegador.");
            setStatus("error");
            return;
        }
        const token = await fetchToken();
        if (!token) {
            stopAll("error");
            return;
        }
        const audioCtx = audioCtxRef.current;
        if (!audioCtx) {
            setStatus("error");
            return;
        }
        // Mic + AudioContext in parallel
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                    sampleRate: 24000
                }
            });
            micStreamRef.current = stream;
            await audioCtx.audioWorklet.addModule("/pcm-processor-worklet.js");
            const source = audioCtx.createMediaStreamSource(stream);
            sourceNodeRef.current = source;
            const worklet = new AudioWorkletNode(audioCtx, "pcm-processor");
            workletNodeRef.current = worklet;
            worklet.port.onmessage = (event)=>{
                const int16 = event.data;
                if (isSessionReadyRef.current && wsRef.current?.readyState === 1) {
                    wsRef.current.send(JSON.stringify({
                        type: "input_audio_buffer.append",
                        audio: audioToBase64(int16)
                    }));
                } else {
                    // buffer while waiting for session.updated
                    if (micBufferRef.current.length < 120) {
                        micBufferRef.current.push(int16);
                    }
                }
            };
            source.connect(worklet);
        } catch (err) {
            console.error(err);
            setError("No se pudo acceder al microfono.");
            setStatus("error");
            return;
        }
        const ws = new WebSocket("wss://api.x.ai/v1/realtime", [
            `xai-client-secret.${token}`
        ]);
        wsRef.current = ws;
        connectionTimeoutRef.current = setTimeout(()=>{
            if (ws.readyState !== WebSocket.OPEN) {
                setError("Timeout conectando con xAI Realtime.");
                stopAll("error");
            }
        }, 10000);
        ws.onopen = ()=>{
            clearConnectionTimeout();
            const sessionUpdate = {
                type: "session.update",
                session: {
                    voice,
                    instructions,
                    turn_detection: {
                        type: "server_vad",
                        threshold: vadThreshold,
                        silence_duration_ms: silenceMs
                    },
                    input_audio_transcription: {
                        model: "grok-2-audio"
                    },
                    audio: {
                        input: {
                            format: {
                                type: "audio/pcm",
                                rate: 24000
                            }
                        },
                        output: {
                            format: {
                                type: "audio/pcm",
                                rate: 24000
                            }
                        }
                    }
                }
            };
            ws.send(JSON.stringify(sessionUpdate));
        };
        ws.onerror = ()=>{
            setError("WebSocket error");
            stopAll("error");
        };
        ws.onclose = ()=>{
            clearConnectionTimeout();
            if (!intentionalDisconnectRef.current) {
                setStatus("idle");
            }
        };
        ws.onmessage = ({ data })=>{
            const event = JSON.parse(data);
            switch(event.type){
                case "session.updated":
                    {
                        isSessionReadyRef.current = true;
                        setStatus("active");
                        const buffered = micBufferRef.current;
                        micBufferRef.current = [];
                        buffered.forEach((chunk)=>{
                            ws.send(JSON.stringify({
                                type: "input_audio_buffer.append",
                                audio: audioToBase64(chunk)
                            }));
                        });
                        break;
                    }
                case "input_audio_buffer.speech_started":
                    {
                        interruptPlayback();
                        ws.send(JSON.stringify({
                            type: "response.cancel"
                        }));
                        if (currentResponseIdRef.current) {
                            setTranscript((prev)=>prev.map((m)=>m.id === currentResponseIdRef.current ? {
                                        ...m,
                                        interrupted: true
                                    } : m));
                        }
                        currentResponseIdRef.current = null;
                        break;
                    }
                case "conversation.item.input_audio_transcription.completed":
                    {
                        const text = event.transcript;
                        setTranscript((prev)=>[
                                ...prev,
                                {
                                    id: event.item?.id ?? crypto.randomUUID(),
                                    role: "user",
                                    text
                                }
                            ]);
                        break;
                    }
                case "response.created":
                    {
                        currentResponseIdRef.current = event.response?.id;
                        setTranscript((prev)=>[
                                ...prev,
                                {
                                    id: event.response?.id ?? crypto.randomUUID(),
                                    role: "assistant",
                                    text: ""
                                }
                            ]);
                        break;
                    }
                case "response.output_audio_transcript.delta":
                    {
                        const delta = event.delta;
                        const rid = currentResponseIdRef.current;
                        if (!rid) break;
                        setTranscript((prev)=>prev.map((m)=>m.id === rid ? {
                                    ...m,
                                    text: m.text + delta
                                } : m));
                        break;
                    }
                case "response.output_audio.delta":
                    {
                        const base64 = event.delta;
                        playPcmChunk(base64);
                        break;
                    }
                case "response.done":
                    {
                        currentResponseIdRef.current = null;
                        break;
                    }
                case "error":
                    {
                        setError(event.message || "Error en la sesion");
                        stopAll("error");
                        break;
                    }
            }
        };
    };
    const toggle = ()=>{
        if (status === "idle" || status === "error") {
            start();
        } else {
            stopAll();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-14 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[0.2em] text-lime-400",
                            children: "Voz en tiempo real"
                        }, void 0, false, {
                            fileName: "[project]/src/components/voice-lab.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-semibold",
                            children: "Agente de voz con Grok"
                        }, void 0, false, {
                            fileName: "[project]/src/components/voice-lab.tsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-200",
                            children: "Conecta micrÃ³fono y altavoces del navegador. Usamos token efÃ­mero, VAD del servidor y transcripciÃ³n en vivo. No exponemos tu API key."
                        }, void 0, false, {
                            fileName: "[project]/src/components/voice-lab.tsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 rounded-xl border border-slate-800 bg-black/40 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center justify-between gap-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Voz"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voice-lab.tsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: voice,
                                            onChange: (e)=>setVoice(e.target.value),
                                            className: "rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-white",
                                            children: voiceOptions.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: v
                                                }, v, false, {
                                                    fileName: "[project]/src/components/voice-lab.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voice-lab.tsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voice-lab.tsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex flex-col gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Instrucciones"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voice-lab.tsx",
                                            lineNumber: 423,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: instructions,
                                            onChange: (e)=>setInstructions(e.target.value),
                                            className: "rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-white",
                                            rows: 3,
                                            suppressHydrationWarning: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voice-lab.tsx",
                                            lineNumber: 424,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voice-lab.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "VAD threshold"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voice-lab.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: 0.1,
                                                    max: 1,
                                                    step: 0.05,
                                                    value: vadThreshold,
                                                    onChange: (e)=>setVadThreshold(parseFloat(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voice-lab.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400",
                                                    children: vadThreshold.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voice-lab.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voice-lab.tsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Silencio (ms)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voice-lab.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: 0,
                                                    max: 1500,
                                                    step: 50,
                                                    value: silenceMs,
                                                    onChange: (e)=>setSilenceMs(parseInt(e.target.value, 10))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voice-lab.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400",
                                                    children: [
                                                        silenceMs,
                                                        " ms"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voice-lab.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voice-lab.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voice-lab.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: [
                                        "Estado: ",
                                        status,
                                        tokenExpiresAt ? ` · token expira en ${Math.max(0, Math.floor(tokenExpiresAt - Date.now() / 1000))}s` : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voice-lab.tsx",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-400",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voice-lab.tsx",
                                    lineNumber: 469,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voice-lab.tsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400",
                            children: "Recomendado para 1:1 en navegador. Si necesitas multiusuario o SIP, migra a LiveKit y reusa el backend de tokens."
                        }, void 0, false, {
                            fileName: "[project]/src/components/voice-lab.tsx",
                            lineNumber: 471,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/voice-lab.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-slate-800 bg-black/60 p-6 shadow-xl space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `h-2 w-2 rounded-full ${status === "active" ? "bg-lime-400" : status === "connecting" ? "bg-amber-400" : status === "error" ? "bg-red-400" : "bg-slate-500"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voice-lab.tsx",
                                            lineNumber: 480,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-200 capitalize",
                                            children: status
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voice-lab.tsx",
                                            lineNumber: 491,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voice-lab.tsx",
                                    lineNumber: 479,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: toggle,
                                    className: `rounded-full px-5 py-2 text-sm font-semibold shadow transition ${status === "idle" || status === "error" ? "bg-lime-400 text-black hover:bg-lime-300" : "bg-red-500 text-white hover:bg-red-400"}`,
                                    children: status === "idle" || status === "error" ? "Conectar" : "Detener"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voice-lab.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voice-lab.tsx",
                            lineNumber: 478,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 max-h-[360px] overflow-y-auto pr-1",
                            children: [
                                transcript.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: "AÃºn no hay mensajes. Pulsa conectar y habla."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voice-lab.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this),
                                transcript.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-xs uppercase",
                                                children: item.role === "user" ? "TÃº" : "AI"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voice-lab.tsx",
                                                lineNumber: 517,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: item.interrupted ? "opacity-60" : "",
                                                        children: item.text || "…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voice-lab.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 19
                                                    }, this),
                                                    item.interrupted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-orange-400",
                                                        children: "(interrumpido)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voice-lab.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/voice-lab.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/components/voice-lab.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voice-lab.tsx",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/voice-lab.tsx",
                    lineNumber: 477,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/voice-lab.tsx",
            lineNumber: 397,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/voice-lab.tsx",
        lineNumber: 396,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/voice-lab.tsx [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/voice-lab.tsx [app-ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_components_voice-lab_tsx_03af8b04._.js.map