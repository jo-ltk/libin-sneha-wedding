"use client";

import { familyMeeting, images } from "@/lib/content";
import Image from "next/image";
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

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 md:gap-8">
          {images.familyMeeting.map((photo, index) => (
            <FadeUp key={photo.src} delay={0.08 + index * 0.1}>
              <figure className="group overflow-hidden rounded-2xl border border-sand/45 bg-paper shadow-[0_20px_56px_-28px_rgba(61,74,80,0.16)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={88}
                    className="cine-grade object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-sand/30" />
                </div>
                <figcaption className="border-t border-sand/35 px-5 py-4 text-center">
                  <p className="font-sans text-[0.62rem] font-medium uppercase tracking-[0.28em] text-clay">
                    {photo.caption}
                  </p>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
