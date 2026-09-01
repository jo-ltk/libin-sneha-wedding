"use client";

import { wedding } from "@/lib/content";
import {
  getCountdown,
  padCountdownUnit,
  parseWeddingDateTime,
  type CountdownValues,
} from "@/lib/countdown";
import { gsap } from "gsap";
import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { FadeUp, LineGrow } from "./Reveal";

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
  unitRef,
}: {
  label: string;
  value: string;
  unitRef: RefObject<HTMLSpanElement | null>;
}) {
  return (
    <div className="countdown-unit flex min-w-0 flex-1 flex-col items-center gap-2 sm:gap-3">
      <span
        ref={unitRef}
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
  const targetMs = useMemo(() => {
    const parsed = parseWeddingDateTime(wedding.event.dateTime);
    return parsed ? parsed.getTime() : null;
  }, []);

  const dayRef = useRef<HTMLSpanElement>(null);
  const hourRef = useRef<HTMLSpanElement>(null);
  const minuteRef = useRef<HTMLSpanElement>(null);
  const secondRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const prevValues = useRef<CountdownValues | null>(null);

  const [countdown, setCountdown] = useState<CountdownValues>(() =>
    targetMs !== null
      ? getCountdown(new Date(targetMs))
      : { days: 0, hours: 0, minutes: 0, seconds: 0, complete: true },
  );

  useEffect(() => {
    if (targetMs === null) return;

    const target = new Date(targetMs);
    const tick = () => setCountdown(getCountdown(target));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [targetMs]);

  useEffect(() => {
    if (targetMs === null) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const tween = gsap.to(glowRef.current, {
      opacity: 0.55,
      scale: 1.08,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      tween.kill();
    };
  }, [targetMs]);

  useEffect(() => {
    if (targetMs === null) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      prevValues.current = countdown;
      return;
    }

    if (!prevValues.current) {
      prevValues.current = countdown;
      return;
    }

    const refs = { days: dayRef, hours: hourRef, minutes: minuteRef, seconds: secondRef };

    UNITS.forEach((unit) => {
      if (prevValues.current![unit] === countdown[unit]) return;

      const node = refs[unit].current;
      if (!node) return;

      gsap.fromTo(
        node,
        { opacity: 0.42, y: unit === "seconds" ? 2 : 4 },
        {
          opacity: 1,
          y: 0,
          duration: unit === "seconds" ? 0.28 : 0.45,
          ease: "power1.out",
          overwrite: "auto",
        },
      );
    });

    prevValues.current = countdown;
  }, [countdown, targetMs]);

  if (targetMs === null) return null;

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
      id="countdown"
      aria-live="polite"
      aria-atomic="true"
      className="relative overflow-x-hidden border-y border-sand/35 bg-mist px-4 py-14 sm:px-6 sm:py-16 md:py-20"
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
        <FadeUp>
          <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10">
            <div
              className="h-px flex-1 max-w-[4.5rem] bg-sand/55 sm:max-w-[5.5rem]"
              aria-hidden="true"
            />
            <span
              ref={glowRef}
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-clay/80"
              aria-hidden="true"
            />
            <div
              className="h-px flex-1 max-w-[4.5rem] bg-sand/55 sm:max-w-[5.5rem]"
              aria-hidden="true"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="mb-3 font-sans text-[0.62rem] font-medium uppercase tracking-[0.42em] text-clay sm:text-[0.68rem]">
            Until our day
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="font-display text-[clamp(1.15rem,4.2vw,1.55rem)] leading-snug tracking-[-0.02em] text-ink">
            {wedding.event.displayDate}
            <span className="mx-2 text-sage" aria-hidden="true">
              ·
            </span>
            <span className="text-muted">{wedding.event.displayTime}</span>
          </p>
        </FadeUp>

        <LineGrow className="mx-auto my-8 w-[min(220px,62vw)] sm:my-10" delay={0.15} />

        {countdown.complete ? (
          <FadeUp delay={0.2}>
            <p className="font-display text-[clamp(1.35rem,5vw,2rem)] italic tracking-[-0.02em] text-clay-deep">
              Today we begin forever
            </p>
          </FadeUp>
        ) : (
          <FadeUp delay={0.2}>
            <div
              className="mx-auto grid w-full max-w-[22rem] grid-cols-4 gap-x-1 gap-y-2 sm:max-w-none sm:gap-x-3 md:gap-x-5"
              role="timer"
              aria-label={liveLabel}
            >
              {UNITS.map((unit) => (
                <CountdownUnit
                  key={unit}
                  label={UNIT_LABELS[unit]}
                  value={values[unit]}
                  unitRef={
                    unit === "days"
                      ? dayRef
                      : unit === "hours"
                        ? hourRef
                        : unit === "minutes"
                          ? minuteRef
                          : secondRef
                  }
                />
              ))}
            </div>
          </FadeUp>
        )}

        <p className="sr-only">{liveLabel}</p>

        <FadeUp delay={0.28}>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3 sm:mt-10">
            <div
              className="h-px flex-1 max-w-[4.5rem] bg-sand/45 sm:max-w-[5.5rem]"
              aria-hidden="true"
            />
            <span
              className="font-display text-lg italic leading-none text-sage/80"
              aria-hidden="true"
            >
              &
            </span>
            <div
              className="h-px flex-1 max-w-[4.5rem] bg-sand/45 sm:max-w-[5.5rem]"
              aria-hidden="true"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
