"use client";

import { wedding } from "@/lib/content";
import { FadeUp, LineGrow } from "./Reveal";

export default function Invitation() {
  return (
    <section
      id="invitation"
      className="relative overflow-hidden bg-paper px-6 py-24 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-[42rem] text-center">
        <FadeUp>
          <p className="mb-6 font-sans text-[0.68rem] font-medium uppercase tracking-[0.38em] text-clay">
            An invitation
          </p>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h2 className="font-display text-[clamp(2.35rem,8.5vw,4.1rem)] font-normal leading-[1.08] tracking-[-0.03em] text-ink">
            Two families.
            <br />
            <em className="text-clay-deep">Two homes.</em>
            <br />
            One life beginning.
          </h2>
        </FadeUp>

        <LineGrow className="mx-auto my-10 w-28" delay={0.2} />

        <FadeUp delay={0.15}>
          <p className="font-display text-[clamp(1.15rem,2.6vw,1.4rem)] leading-[1.7] text-muted">
            With the blessing of God and their families,{" "}
            <em className="text-ink">{wedding.couple.groomsFullName}</em> and{" "}
            <em className="text-ink">{wedding.couple.bridesFullName}</em>{" "}
            invite you to celebrate their marriage on{" "}
            <em className="text-ink">{wedding.event.displayDate}</em> at{" "}
            <em className="text-ink">{wedding.event.displayTime}</em>.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
