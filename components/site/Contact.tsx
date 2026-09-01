"use client";

import { wedding } from "@/lib/content";
import { Phone } from "lucide-react";
import { FadeUp, LineGrow, WordReveal } from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-paper px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <FadeUp>
          <p className="mb-5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.38em] text-clay">
            Get in touch
          </p>
        </FadeUp>

        <WordReveal
          text="We would love to hear from you."
          className="font-display text-[clamp(1.9rem,5.2vw,3rem)] leading-[1.15] tracking-[-0.03em] text-ink"
        />

        <LineGrow className="mx-auto my-10 w-24" delay={0.15} />

        <FadeUp delay={0.1}>
          <a
            href={`tel:${wedding.contact.phoneTel}`}
            className="group inline-flex flex-col items-center"
          >
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-clay text-paper">
              <Phone size={20} strokeWidth={1.5} />
            </span>
            <span className="font-display text-[clamp(1.7rem,6vw,2.6rem)] tracking-[-0.03em] text-ink">
              {wedding.contact.phoneDisplay}
            </span>
            <span className="mt-3 font-sans text-[0.68rem] uppercase tracking-[0.28em] text-muted">
              Tap to call
            </span>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
