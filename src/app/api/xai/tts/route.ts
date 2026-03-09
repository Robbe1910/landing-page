import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Configura XAI_API_KEY en el servidor." },
      { status: 500 },
    );
  }

  const { text } = await req.json();
  if (!text || typeof text !== "string") {
    return NextResponse.json(
      { error: "Falta el texto para sintetizar." },
      { status: 400 },
    );
  }

  try {
    const res = await fetch("https://api.x.ai/v1/tts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        voice_id: "Eve",
        output_format: {
          codec: "mp3",
          sample_rate: 44100,
          bit_rate: 128000,
        },
      }),
    });

    if (!res.ok) {
      const detail = (await res.text()).slice(0, 300);
      return NextResponse.json(
        { error: "No se pudo generar audio.", detail },
        { status: 502 },
      );
    }

    const arrayBuffer = await res.arrayBuffer();
    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("TTS error", error);
    return NextResponse.json(
      { error: "Fallo inesperado generando audio." },
      { status: 500 },
    );
  }
}
