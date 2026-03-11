"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSenseBlockProps = {
  slot: string;
  className?: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  variant?: "default" | "project";
};

const ADSENSE_CLIENT = "ca-pub-7977064296204880";

export function AdSenseBlock({
  slot,
  className,
  format = "auto",
  responsive = true,
  variant = "default",
}: AdSenseBlockProps) {
  const pushedRef = useRef(false);
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (!adRef.current || pushedRef.current) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushedRef.current = true;
    } catch (error) {
      console.error("AdSense push failed", error);
    }
  }, []);

  return (
    <div className={className}>
      <div
        className={`rounded-[1.5rem] p-4 shadow-[0_24px_60px_rgba(3,8,20,0.24)] ${
          variant === "project"
            ? "border border-[#4dd4ff]/14 bg-[linear-gradient(180deg,rgba(8,21,38,0.94),rgba(6,12,26,0.88))]"
            : "border border-white/10 bg-white/[0.03]"
        }`}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.32em] ${
              variant === "project" ? "text-[#4dd4ff]/80" : "text-white/45"
            }`}
          >
            Publicidad
          </p>
          <p className="text-xs text-white/45">AdSense</p>
        </div>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    </div>
  );
}
