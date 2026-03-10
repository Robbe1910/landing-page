"use client";

import Script from "next/script";
import { useCallback } from "react";

const INSTAGRAM_POSTS: string[] = [
  "https://www.instagram.com/reel/DTP4XHmiLd5/",
  "https://www.instagram.com/p/DUfK4qeiC9H/",
  "https://www.instagram.com/reel/DTS9spdCOjE/",
  "https://www.instagram.com/p/DUirc74iCQh/",
  "https://www.instagram.com/p/DVCbtFniEFI/",
  "https://www.instagram.com/p/DUaiDvaiMQ-/",
];

type Props = {
  /** Optional className to adjust outer spacing where it is used. */
  className?: string;
};

export function InstagramEmbeds({ className }: Props) {
  const handleEmbedLoad = useCallback(() => {
    if (typeof window === "undefined") return;
    // Instagram re-runs processing to hydrate the freshly rendered blockquotes.
    // Guarded to avoid errors when the script is not ready yet.
    // @ts-expect-error - instgrm is injected by Instagram's embed script
    window.instgrm?.Embeds?.process();
  }, []);

  return (
    <div className={className}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center justify-between gap-4 text-sm text-gray-400">
          <p>Posts reales de Instagram.</p>
          <p className="hidden sm:block">Desliza para ver mas</p>
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {INSTAGRAM_POSTS.map((url) => (
          <div
            key={url}
            className="w-[320px] min-w-[320px] snap-start overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur sm:w-[340px] sm:min-w-[340px]"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={`${url}?utm_source=ig_web_copy_link`}
              data-instgrm-version="14"
              style={{ background: "#fff", border: 0, margin: 0, width: "100%" }}
            />
          </div>
        ))}
        </div>
      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={handleEmbedLoad}
      />
    </div>
  );
}
