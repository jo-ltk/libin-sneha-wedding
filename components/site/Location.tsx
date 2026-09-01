"use client";

import { wedding } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, WordReveal } from "./Reveal";

export default function Location() {
  return (
    <section
      id="place"
      className="relative overflow-hidden bg-dusk pt-24 pb-12 md:pt-32 md:pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(133,189,214,0.22), transparent 42%), radial-gradient(ellipse at 100% 100%, rgba(168,200,172,0.2), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
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
            Find Marian Center on the map below.
          </p>
        </FadeUp>
      </div>

      <FadeUp delay={0.2} className="relative mt-10 w-full">
        <div className="relative h-[min(70vh,42rem)] w-full bg-forest-mid/50">
          <iframe
            title={`Map of ${wedding.location.name}`}
            src={wedding.location.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full grayscale-[0.15] contrast-[1.05] saturate-[0.92]"
          />
        </div>
      </FadeUp>

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
        <FadeUp delay={0.28} className="mt-8">
          <a
            href={wedding.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-clay/35 bg-paper/60 px-6 py-2.5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] text-clay-deep transition-colors hover:border-clay/55 hover:bg-paper"
          >
            Open in Maps
            <ArrowUpRight size={14} strokeWidth={1.6} />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
