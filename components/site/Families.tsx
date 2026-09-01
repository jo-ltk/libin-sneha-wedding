"use client";

import { wedding } from "@/lib/content";
import { motion } from "framer-motion";
import { FadeUp, WordReveal } from "./Reveal";
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
      className={`relative overflow-hidden ${
        isForest ? "bg-forest" : "bg-dusk"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isForest
            ? "radial-gradient(ellipse at 50% 20%, rgba(58,82,68,0.55) 0%, transparent 60%)"
            : "radial-gradient(ellipse at 50% 20%, rgba(61,79,88,0.55) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center gap-8 px-7 py-10 text-center text-paper md:px-12 md:py-14">
        <div>
          <p className="mb-4 font-sans text-[0.62rem] font-medium uppercase tracking-[0.38em] text-sand/75">
            {person.role}
          </p>
          <h3 className="font-display text-[clamp(3.2rem,12vw,5.5rem)] leading-[0.88] tracking-[-0.045em]">
            {person.firstName}
          </h3>
          <p className="mt-3 font-display text-[clamp(1.15rem,3.2vw,1.7rem)] italic text-sand/85">
            {person.lastName}
          </p>
          <p className="mt-5 font-sans text-[0.68rem] uppercase tracking-[0.32em] text-clay">
            {person.district}
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-sans text-[0.78rem] font-light uppercase tracking-[0.18em] text-sand/75">
            {childOf} {person.father}
            <br />
            &amp; {person.mother}
          </p>
          <p className="mx-auto max-w-[16rem] font-display text-[1.15rem] leading-relaxed text-paper/90">
            {person.house}
            <br />
            {person.place}
            <br />
            {person.district}
          </p>
        </div>
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

      <div className="relative">
        <div className="grid md:grid-cols-2">
          <FadeUp y={36}>
            <FamilyPanel
              person={wedding.groom}
              childOf="Son of"
              tone="forest"
            />
          </FadeUp>
          <FadeUp y={36} delay={0.12}>
            <FamilyPanel
              person={wedding.bride}
              childOf="Daughter of"
              tone="dusk"
            />
          </FadeUp>
        </div>

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-sand/30 bg-paper shadow-[0_10px_30px_rgba(26,35,40,0.22)] md:h-16 md:w-16">
            <span className="font-display text-2xl italic leading-none text-clay md:text-[1.7rem]">
              &
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
