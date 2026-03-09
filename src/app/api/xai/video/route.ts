import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const XAI_API_BASE = "https://api.x.ai/v1";
const MODEL_ID = "grok-imagine-video";

const sliceError = (text: string) => text.slice(0, 300);

export async function POST(req: NextRequest) {
  try {
    const { prompt, imageUrl } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Falta el prompt (texto a convertir en video)." },
        { status: 400 },
      );
    }

    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Configura XAI_API_KEY en el servidor." },
        { status: 500 },
      );
    }

    const payload: Record<string, unknown> = {
      model: MODEL_ID,
      prompt: prompt.trim(),
    };

    if (imageUrl && typeof imageUrl === "string" && imageUrl.trim().length > 0) {
      payload.prompt = {
        type: "image",
        image: imageUrl.trim(),
        text: prompt.trim(),
      };
    }

    const response = await fetch(`${XAI_API_BASE}/videos/generations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const detail = sliceError(await response.text());
      return NextResponse.json(
        { error: "No se pudo iniciar la generacion de video.", detail },
        { status: 502 },
      );
    }

    const data = await response.json();
    const requestId = data?.request_id as string | undefined;

    if (!requestId) {
      return NextResponse.json(
        { error: "La API no devolvio request_id." },
        { status: 502 },
      );
    }

    return NextResponse.json({ requestId });
  } catch (error) {
    console.error("POST /api/xai/video error", error);
    return NextResponse.json(
      { error: "Error inesperado al iniciar la generacion." },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const requestId = req.nextUrl.searchParams.get("id");
    if (!requestId) {
      return NextResponse.json(
        { error: "Falta el parametro id (request_id)." },
        { status: 400 },
      );
    }

    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Configura XAI_API_KEY en el servidor." },
        { status: 500 },
      );
    }

    const response = await fetch(`${XAI_API_BASE}/videos/${requestId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      const detail = sliceError(await response.text());
      return NextResponse.json(
        { error: "No se pudo consultar el estado del video.", detail },
        { status: 502 },
      );
    }

    const data = await response.json();
    const status = data?.status ?? "unknown";

    return NextResponse.json({
      status,
      video: data?.video ?? null,
      model: data?.model ?? null,
    });
  } catch (error) {
    console.error("GET /api/xai/video error", error);
    return NextResponse.json(
      { error: "Error inesperado al consultar el video." },
      { status: 500 },
    );
  }
}
