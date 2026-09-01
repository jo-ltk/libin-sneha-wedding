"use client";

import { images, wedding } from "@/lib/content";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ParallaxImage from "./ParallaxImage";

const heroImage = images.hero[0];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const enter = reduce ? 0.15 : 2.45;

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-paper"
    >
      <ParallaxImage
        className="absolute inset-0"
        scrollOffset={["start start", "end start"]}
        yRange={["0%", "18%"]}
        scaleOverride={1.12}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: reduce ? 1 : 1.14 }}
          animate={{ opacity: 1, scale: reduce ? 1 : 1.02 }}
          transition={
            reduce
              ? { duration: 0 }
              : {
                  opacity: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 8, ease: "linear" },
                }
          }
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            quality={88}
            sizes="100vw"
            className="object-cover object-[center_28%] md:object-center"
            style={{
              filter:
                "brightness(0.88) contrast(1.08) saturate(1.04) sepia(0.01)",
            }}
          />
        </motion.div>
      </ParallaxImage>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(250,248,244,0.15) 0%, rgba(250,248,244,0.02) 38%, rgba(250,248,244,0.55) 72%, rgba(250,248,244,0.92) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 50% 88%, rgba(133,189,214,0.22), transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 42%, transparent 50%, rgba(168,200,172,0.12) 82%, rgba(250,248,244,0.35) 100%)",
        }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-[calc(4.5rem+env(safe-area-inset-bottom))] text-center md:pb-14"
        style={{ y: textY, opacity }}
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: enter, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 font-sans text-[0.62rem] font-medium uppercase tracking-[0.42em] text-muted"
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: enter + 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3.2rem,13vw,6.5rem)] leading-[0.92] tracking-[-0.04em] text-ink"
          style={{ textShadow: "0 2px 24px rgba(250,248,244,0.85)" }}
        >
          {wedding.couple.groomsName}
          <span className="mx-2 italic text-clay">&</span>
          {wedding.couple.bridesName}
        </motion.h1>

        <motion.div
          initial={reduce ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: enter + 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="my-7 flex w-[min(220px,58vw)] items-center gap-3"
        >
          <div className="h-px flex-1 bg-sand/50" />
          <span className="h-1 w-1 shrink-0 rounded-full bg-clay" aria-hidden="true" />
          <div className="h-px flex-1 bg-sand/50" />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: enter + 0.45, duration: 0.8 }}
          className="font-sans text-[0.68rem] uppercase tracking-[0.34em] text-muted"
        >
          {wedding.groom.district} · {wedding.bride.district}
        </motion.p>
      </motion.div>

      <motion.a
        href="#countdown"
        className="absolute bottom-[calc(4rem+env(safe-area-inset-bottom))] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink/45 md:bottom-6"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: enter + 0.7, duration: 0.8 }}
        aria-label="Scroll to countdown"
      >
        <motion.span
          className="h-7 w-px bg-ink/25"
          animate={
            reduce ? undefined : { scaleY: [1, 0.45, 1], opacity: [0.45, 1, 0.45] }
          }
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
