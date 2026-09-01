"use client";

import { wedding } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, WordReveal } from "./Reveal";
import { HorizonMark } from "./Mark";

export default function Location() {
  return (
    <section
      id="place"
      className="relative overflow-hidden bg-forest px-6 py-24 md:px-12 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(194,116,98,0.18), transparent 42%), radial-gradient(ellipse at 100% 100%, rgba(139,154,140,0.18), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeUp>
          <p className="mb-5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.38em] text-clay">
            The place
          </p>
          <HorizonMark className="mx-auto mb-8 h-7 w-14 text-sand/80" />
        </FadeUp>

        <WordReveal
          text={wedding.location.name}
          className="font-display text-[clamp(2.6rem,8vw,5.2rem)] leading-[0.95] tracking-[-0.04em] text-paper"
        />

        <FadeUp delay={0.12} className="mt-8">
          <p className="mx-auto max-w-md font-display text-[1.15rem] leading-relaxed text-sand/80">
            Find Marian Center on the map for directions.
          </p>
        </FadeUp>

        <FadeUp delay={0.2} className="mt-12">
          <a
            href={wedding.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-paper px-7 py-3 font-sans text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ink transition-transform duration-300 active:scale-[0.98]"
          >
            Open in Maps
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
