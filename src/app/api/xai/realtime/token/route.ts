import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Configura XAI_API_KEY en el servidor." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch("https://api.x.ai/v1/realtime/client_secrets", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expires_after: { seconds: 300 },
      }),
    });

    if (!res.ok) {
      const detail = (await res.text()).slice(0, 300);
      return NextResponse.json(
        { error: "No se pudo generar el token de sesion.", detail },
        { status: 502 },
      );
    }

    const data = await res.json();
    return NextResponse.json({
      token: data?.value,
      expiresAt: data?.expires_at,
    });
  } catch (error) {
    console.error("Error minting xAI client secret", error);
    return NextResponse.json(
      { error: "Fallo inesperado generando token." },
      { status: 500 },
    );
  }
}
