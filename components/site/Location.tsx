"use client";

import { wedding } from "@/lib/content";
import { ArrowUpRight, MapPin } from "lucide-react";
import { FadeUp, WordReveal } from "./Reveal";

export default function Location() {
  return (
    <section
      id="place"
      className="relative overflow-hidden bg-dusk px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(133,189,214,0.22), transparent 42%), radial-gradient(ellipse at 100% 100%, rgba(168,200,172,0.2), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeUp>
          <p className="mb-5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.38em] text-clay">
            Directions
          </p>
        </FadeUp>

        <WordReveal
          text={wedding.location.name}
          className="font-display text-[clamp(2.6rem,8vw,5.2rem)] leading-[0.95] tracking-[-0.04em] text-ink"
        />

        <FadeUp delay={0.12} className="mt-8">
          <p className="mx-auto max-w-md font-display text-[1.15rem] leading-relaxed text-muted">
            Marykulam, Kerala — tap the map to open directions.
          </p>
        </FadeUp>

        <FadeUp delay={0.2} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-sand/50 bg-paper shadow-[0_20px_60px_-24px_rgba(61,74,80,0.18)]">
            <div className="flex items-center gap-3 border-b border-sand/40 px-5 py-4 text-left">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-clay">
                <MapPin size={18} strokeWidth={1.6} />
              </span>
              <div>
                <p className="font-display text-[1.15rem] leading-tight text-ink">
                  {wedding.location.name}
                </p>
                <p className="mt-0.5 font-sans text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  Marykulam · Kerala
                </p>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full bg-forest-mid/30">
              <iframe
                title={`Map of ${wedding.location.name}`}
                src={wedding.location.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[0.1] contrast-[1.03] saturate-[0.95]"
              />
            </div>

            <div className="border-t border-sand/40 px-5 py-4">
              <a
                href={wedding.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-clay/35 bg-dusk/60 px-6 py-2.5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] text-clay-deep transition-colors hover:border-clay/55 hover:bg-dusk"
              >
                Open in Google Maps
                <ArrowUpRight size={14} strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
