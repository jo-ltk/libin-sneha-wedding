"use client";

import { wedding } from "@/lib/content";
import {
  getCountdown,
  padCountdownUnit,
  parseWeddingDateTime,
  type CountdownValues,
} from "@/lib/countdown";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const UNITS = ["days", "hours", "minutes", "seconds"] as const;
type UnitKey = (typeof UNITS)[number];

const UNIT_LABELS: Record<UnitKey, string> = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
};

function CountdownUnit({
  label,
  value,
  valueRef,
}: {
  label: string;
  value: string;
  valueRef: (node: HTMLSpanElement | null) => void;
}) {
  return (
    <div className="countdown-unit flex min-w-0 flex-1 flex-col items-center gap-2 sm:gap-3">
      <span
        ref={valueRef}
        className="countdown-value font-display text-[clamp(2.15rem,10.5vw,3.75rem)] leading-none tracking-[-0.04em] text-ink tabular-nums"
        aria-hidden="true"
      >
        {value}
      </span>
      <span className="font-sans text-[0.58rem] font-medium uppercase tracking-[0.32em] text-muted sm:text-[0.62rem]">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const target = parseWeddingDateTime(wedding.event.dateTime);
  const sectionRef = useRef<HTMLElement>(null);
  const ornamentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);
  const unitsWrapRef = useRef<HTMLDivElement>(null);
  const valueRefs = useRef<Partial<Record<UnitKey, HTMLSpanElement | null>>>({});
  const prevValues = useRef<CountdownValues | null>(null);
  const pulseTween = useRef<gsap.core.Tween | null>(null);

  const [countdown, setCountdown] = useState<CountdownValues>(() =>
    target ? getCountdown(target) : { days: 0, hours: 0, minutes: 0, seconds: 0, complete: true },
  );

  useEffect(() => {
    if (!target) return;

    const tick = () => setCountdown(getCountdown(target));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [target]);

  useEffect(() => {
    if (!target) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      tl.fromTo(
        ornamentRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.15 },
      )
        .fromTo(
          glowRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.9 },
          "-=0.55",
        )
        .fromTo(
          labelRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.45",
        )
        .fromTo(
          dateRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.35",
        )
        .fromTo(
          unitsWrapRef.current?.querySelectorAll(".countdown-unit") ?? [],
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.09 },
          "-=0.25",
        );

      pulseTween.current = gsap.to(glowRef.current, {
        opacity: 0.55,
        scale: 1.08,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.4,
      });
    }, sectionRef);

    return () => {
      pulseTween.current?.kill();
      ctx.revert();
    };
  }, [target]);

  useEffect(() => {
    if (!target) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !prevValues.current) {
      prevValues.current = countdown;
      return;
    }

    UNITS.forEach((unit) => {
      if (prevValues.current![unit] === countdown[unit]) return;

      const node = valueRefs.current[unit];
      if (!node) return;

      gsap.fromTo(
        node,
        { opacity: 0.42, y: unit === "seconds" ? 2 : 4 },
        { opacity: 1, y: 0, duration: unit === "seconds" ? 0.28 : 0.45, ease: "power1.out" },
      );
    });

    prevValues.current = countdown;
  }, [countdown, target]);

  if (!target) return null;

  const values: Record<UnitKey, string> = {
    days: padCountdownUnit(countdown.days),
    hours: padCountdownUnit(countdown.hours),
    minutes: padCountdownUnit(countdown.minutes),
    seconds: padCountdownUnit(countdown.seconds),
  };

  const liveLabel = countdown.complete
    ? "The celebration has begun"
    : `${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, and ${countdown.seconds} seconds until the wedding`;

  return (
    <section
      ref={sectionRef}
      id="countdown"
      aria-live="polite"
      aria-atomic="true"
      className="relative overflow-hidden border-y border-sand/35 bg-mist px-4 py-14 sm:px-6 sm:py-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(133,189,214,0.16), transparent 52%), radial-gradient(ellipse at 50% 100%, rgba(168,200,172,0.14), transparent 48%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-3xl text-center">
        <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10">
          <div className="h-px flex-1 max-w-[4.5rem] bg-sand/55 sm:max-w-[5.5rem]" aria-hidden="true" />
          <span
            ref={glowRef}
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-clay/80"
            aria-hidden="true"
          />
          <div className="h-px flex-1 max-w-[4.5rem] bg-sand/55 sm:max-w-[5.5rem]" aria-hidden="true" />
        </div>

        <p
          ref={labelRef}
          className="mb-3 font-sans text-[0.62rem] font-medium uppercase tracking-[0.42em] text-clay sm:text-[0.68rem]"
        >
          Until our day
        </p>

        <p
          ref={dateRef}
          className="font-display text-[clamp(1.15rem,4.2vw,1.55rem)] leading-snug tracking-[-0.02em] text-ink"
        >
          {wedding.event.displayDate}
          <span className="mx-2 text-sage" aria-hidden="true">
            ·
          </span>
          <span className="text-muted">{wedding.event.displayTime}</span>
        </p>

        <div ref={ornamentRef} className="mx-auto my-8 w-[min(220px,62vw)] origin-center sm:my-10">
          <div className="horizon-line" aria-hidden="true" />
        </div>

        {countdown.complete ? (
          <p className="font-display text-[clamp(1.35rem,5vw,2rem)] italic tracking-[-0.02em] text-clay-deep">
            Today we begin forever
          </p>
        ) : (
          <div
            ref={unitsWrapRef}
            className="mx-auto grid max-w-[22rem] grid-cols-4 gap-x-1 gap-y-2 sm:max-w-none sm:gap-x-3 md:gap-x-5"
            role="timer"
            aria-label={liveLabel}
          >
            {UNITS.map((unit) => (
              <CountdownUnit
                key={unit}
                label={UNIT_LABELS[unit]}
                value={values[unit]}
                valueRef={(node) => {
                  valueRefs.current[unit] = node;
                }}
              />
            ))}
          </div>
        )}

        <p className="sr-only">{liveLabel}</p>

        <div className="mx-auto mt-8 flex items-center justify-center gap-3 sm:mt-10">
          <div className="h-px flex-1 max-w-[4.5rem] bg-sand/45 sm:max-w-[5.5rem]" aria-hidden="true" />
          <span className="font-display text-lg italic leading-none text-sage/80" aria-hidden="true">
            &
          </span>
          <div className="h-px flex-1 max-w-[4.5rem] bg-sand/45 sm:max-w-[5.5rem]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
