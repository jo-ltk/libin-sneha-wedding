"use client";

import { wedding } from "@/lib/content";
import { FadeUp, WordReveal } from "./Reveal";
import { HorizonMark } from "./Mark";

type Person = {
  role: string;
  firstName: string;
  lastName: string;
  father: string;
  mother: string;
  house: string;
  place: string;
  district: string;
};

function FamilyPanel({
  person,
  childOf,
  tone,
}: {
  person: Person;
  childOf: string;
  tone: "forest" | "dusk";
}) {
  const isForest = tone === "forest";

  return (
    <article
      className={`relative flex min-h-[28rem] flex-col justify-between overflow-hidden px-7 py-10 md:min-h-[34rem] md:px-12 md:py-14 ${
        isForest ? "bg-forest text-paper" : "bg-dusk text-paper"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isForest
            ? "radial-gradient(ellipse at 80% 0%, rgba(194,116,98,0.16), transparent 50%)"
            : "radial-gradient(ellipse at 10% 100%, rgba(220,203,184,0.14), transparent 48%)",
        }}
      />

      <div className="relative">
        <p className="mb-8 font-sans text-[0.62rem] font-medium uppercase tracking-[0.36em] text-sand/70">
          {person.role}
        </p>
        <h3 className="font-display text-[clamp(2.8rem,8vw,4.6rem)] leading-[0.9] tracking-[-0.04em]">
          {person.firstName}
        </h3>
        <p className="mt-2 font-display text-[1.35rem] italic text-sand/90 md:text-[1.55rem]">
          {person.lastName}
        </p>
      </div>

      <div className="relative mt-12 space-y-6">
        <HorizonMark className={`h-6 w-12 ${isForest ? "text-clay" : "text-sand"}`} />
        <p className="font-sans text-[0.78rem] font-light uppercase tracking-[0.18em] text-sand/75">
          {childOf} {person.father}
          <br />
          &amp; {person.mother}
        </p>
        <p className="max-w-[16rem] font-display text-[1.15rem] leading-relaxed text-paper/90">
          {person.house}
          <br />
          {person.place}
          <br />
          {person.district}
        </p>
      </div>
    </article>
  );
}

export default function Families() {
  return (
    <section id="couple" className="bg-mist">
      <div className="px-6 py-16 text-center md:px-12 md:py-24">
        <FadeUp>
          <p className="mb-4 font-sans text-[0.68rem] font-medium uppercase tracking-[0.38em] text-clay">
            The couple
          </p>
        </FadeUp>
        <WordReveal
          text="With the blessings of our parents"
          className="mx-auto max-w-3xl font-display text-[clamp(1.9rem,5vw,3.1rem)] leading-[1.15] tracking-[-0.03em] text-ink"
        />
      </div>

      <div className="grid md:grid-cols-2">
        <FadeUp y={36}>
          <FamilyPanel person={wedding.groom} childOf="Son of" tone="forest" />
        </FadeUp>
        <FadeUp y={36} delay={0.12}>
          <FamilyPanel person={wedding.bride} childOf="Daughter of" tone="dusk" />
        </FadeUp>
      </div>
    </section>
  );
}
