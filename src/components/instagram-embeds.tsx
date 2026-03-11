"use client";

import Script from "next/script";
import { useCallback, useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process?: () => void;
      };
    };
  }
}

const INSTAGRAM_POSTS: string[] = [
  "https://www.instagram.com/reel/DTP4XHmiLd5/",
  "https://www.instagram.com/p/DUfK4qeiC9H/",
  "https://www.instagram.com/reel/DTS9spdCOjE/",
  "https://www.instagram.com/p/DUirc74iCQh/",
  "https://www.instagram.com/p/DVCbtFniEFI/",
  "https://www.instagram.com/p/DUaiDvaiMQ-/",
];

type Props = {
  className?: string;
};

function processInstagramEmbeds(): boolean {
  if (typeof window === "undefined") return false;

  const process = window.instgrm?.Embeds?.process;

  if (typeof process !== "function") {
    return false;
  }

  process();
  return true;
}

export function InstagramEmbeds({ className }: Props) {
  const handleEmbedLoad = useCallback(() => {
    processInstagramEmbeds();
  }, []);

  useEffect(() => {
    let timeoutId: number | undefined;
    let attempts = 0;

    const retryProcessing = () => {
      if (processInstagramEmbeds() || attempts >= 12) {
        return;
      }

      attempts += 1;
      timeoutId = window.setTimeout(retryProcessing, 400);
    };

    retryProcessing();

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className={className}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center justify-between gap-4 text-sm text-white/46">
          <p>Posts reales de Instagram.</p>
          <p className="hidden sm:block">Desliza para ver más</p>
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {INSTAGRAM_POSTS.map((url) => (
            <div
              key={url}
              className="w-[320px] min-w-[320px] snap-start overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-3 backdrop-blur sm:w-[340px] sm:min-w-[340px]"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`${url}?utm_source=ig_web_copy_link`}
                data-instgrm-version="14"
                style={{ background: "#fff", border: 0, margin: 0, width: "100%" }}
              >
                <a href={url} target="_blank" rel="noreferrer">
                  Ver publicación en Instagram
                </a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={handleEmbedLoad}
      />
    </div>
  );
}
