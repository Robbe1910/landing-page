"use client";

import { useState } from "react";
import type { CareerEntry } from "../app/home-data";

type HomeCareerTabsProps = {
  entries: CareerEntry[];
};

export function HomeCareerTabs({ entries }: HomeCareerTabsProps) {
  const [activeId, setActiveId] = useState(entries[0]?.id ?? "");
  const activeEntry = entries.find((entry) => entry.id === activeId) ?? entries[0];

  if (!activeEntry) return null;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(6,12,26,0.82)] shadow-[0_32px_80px_rgba(3,8,20,0.28)]">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <div
          className="border-b border-white/10 bg-[rgba(255,255,255,0.02)] lg:border-b-0 lg:border-r"
          role="tablist"
          aria-label="Cronologia profesional"
        >
          {entries.map((entry) => {
            const isActive = entry.id === activeEntry.id;
            return (
              <button
                key={entry.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${entry.id}`}
                onClick={() => setActiveId(entry.id)}
                className={`w-full border-b border-white/8 px-6 py-5 text-left transition last:border-b-0 ${
                  isActive
                    ? "bg-[linear-gradient(90deg,rgba(63,102,255,0.16),rgba(45,212,255,0.08))] text-white"
                    : "text-white/72 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <p className="text-base font-semibold">{entry.company}</p>
                <p className="mt-1 text-sm text-white/60">{entry.role}</p>
              </button>
            );
          })}
        </div>

        <div
          id={`panel-${activeEntry.id}`}
          role="tabpanel"
          className="p-7 sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#4dd4ff]">
            {activeEntry.period}
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white">{activeEntry.role}</h3>
          <p className="mt-2 text-lg text-white/72">{activeEntry.company}</p>
          <p className="mt-6 text-base leading-8 text-white/76">{activeEntry.summary}</p>
          <div className="mt-6 rounded-[1.5rem] border border-[#4dd4ff]/20 bg-[#081526] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f6b34a]">
              Impacto
            </p>
            <p className="mt-3 text-sm leading-7 text-white/74">{activeEntry.impact}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {activeEntry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
