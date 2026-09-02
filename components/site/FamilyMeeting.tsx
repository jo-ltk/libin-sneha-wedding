"use client";

import { familyMeeting } from "@/lib/content";
import { FadeUp, LineGrow, WordReveal } from "./Reveal";

export default function FamilyMeeting() {
  return (
    <section
      id="families-meet"
      className="relative overflow-hidden bg-forest px-6 py-20 md:px-12 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 18% 12%, rgba(168,200,172,0.28), transparent 48%), radial-gradient(ellipse at 82% 88%, rgba(133,189,214,0.2), transparent 46%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <p className="mb-5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.38em] text-clay">
              {familyMeeting.label}
            </p>
          </FadeUp>

          <WordReveal
            text={familyMeeting.heading}
            className="font-display text-[clamp(2rem,6.5vw,3.4rem)] leading-[1.1] tracking-[-0.03em] text-ink"
          />

          <LineGrow className="mx-auto my-8 w-24 md:my-10" delay={0.15} />

          <FadeUp delay={0.12}>
            <p className="font-display text-[clamp(1.05rem,2.4vw,1.25rem)] leading-[1.75] text-muted">
              {familyMeeting.subheading}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
