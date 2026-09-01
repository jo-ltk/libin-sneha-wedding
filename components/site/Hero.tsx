"use client";

import { images, wedding } from "@/lib/content";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { HorizonMark } from "./Mark";

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const groomY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const brideY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const enter = reduce ? 0.15 : 2.45;

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-[100svh] min-h-[640px] overflow-hidden"
    >
      <h1 className="sr-only">
        {wedding.couple.groomsFullName} and {wedding.couple.bridesFullName}
      </h1>

      <motion.div
        className="flex h-full flex-col md:flex-row"
        style={{ opacity: fade }}
      >
        {/* Groom */}
        <motion.div
          className="relative flex flex-1 items-center justify-center overflow-hidden"
          style={reduce ? undefined : { y: groomY }}
        >
          <Image
            src={images.hero[0].src}
            alt={images.hero[0].alt}
            fill
            priority
            quality={82}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            style={{ filter: "brightness(0.72) saturate(1.05)" }}
          />
          <div
            className="absolute inset-0 bg-forest/55"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 28% 18%, rgba(194,116,98,0.22), transparent 48%), radial-gradient(ellipse at 80% 88%, rgba(139,154,140,0.2), transparent 42%)",
            }}
          />
          <div className="relative z-10 w-full px-6 pb-10 pt-20 text-center md:pb-0 md:pt-8">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: enter, duration: 0.8 }}
              className="mb-4 font-sans text-[0.62rem] font-medium uppercase tracking-[0.38em] text-sand/75"
            >
              {wedding.groom.role}
            </motion.p>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: enter + 0.08, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(4.6rem,22vw,8.5rem)] leading-[0.82] tracking-[-0.045em] text-paper"
            >
              {wedding.groom.firstName}
            </motion.p>
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: enter + 0.35, duration: 0.8 }}
              className="mt-3 font-display text-[clamp(1.15rem,3.2vw,1.7rem)] italic text-sand/85"
            >
              {wedding.groom.lastName}
            </motion.p>
            <p className="mt-5 font-sans text-[0.68rem] uppercase tracking-[0.32em] text-clay">
              {wedding.groom.district}
            </p>
          </div>
        </motion.div>

        {/* Bride */}
        <motion.div
          className="relative flex flex-1 items-center justify-center overflow-hidden"
          style={reduce ? undefined : { y: brideY }}
        >
          <Image
            src={images.hero[1].src}
            alt={images.hero[1].alt}
            fill
            quality={82}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            style={{ filter: "brightness(0.72) saturate(1.05)" }}
          />
          <div
            className="absolute inset-0 bg-dusk/55"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 72% 20%, rgba(220,203,184,0.16), transparent 46%), radial-gradient(ellipse at 18% 90%, rgba(194,116,98,0.22), transparent 44%)",
            }}
          />
          <div className="relative z-10 w-full px-6 pb-16 pt-10 text-center md:pb-0 md:pt-8">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: enter + 0.18, duration: 0.8 }}
              className="mb-4 font-sans text-[0.62rem] font-medium uppercase tracking-[0.38em] text-sand/75"
            >
              {wedding.bride.role}
            </motion.p>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: enter + 0.22, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(4.6rem,22vw,8.5rem)] leading-[0.82] tracking-[-0.045em] text-paper"
            >
              {wedding.bride.firstName}
            </motion.p>
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: enter + 0.5, duration: 0.8 }}
              className="mt-3 font-display text-[clamp(1.15rem,3.2vw,1.7rem)] italic text-sand/85"
            >
              {wedding.bride.lastName}
            </motion.p>
            <p className="mt-5 font-sans text-[0.68rem] uppercase tracking-[0.32em] text-clay">
              {wedding.bride.district}
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        initial={reduce ? false : { scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: enter + 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-paper shadow-[0_10px_30px_rgba(20,18,16,0.18)] md:h-16 md:w-16">
          <span className="font-display text-2xl italic leading-none text-clay md:text-[1.7rem]">
            &
          </span>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-20 z-10 flex justify-center md:top-[max(1.2rem,env(safe-area-inset-top))] md:pt-6">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ delay: enter + 0.6, duration: 0.8 }}
          className="font-sans text-[0.62rem] uppercase tracking-[0.42em] text-paper/80"
        >
          Together with their families
        </motion.p>
      </div>

      <motion.a
        href="#invitation"
        className="absolute bottom-[calc(4rem+env(safe-area-inset-bottom))] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-paper/70 md:bottom-8"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: enter + 0.8, duration: 0.8 }}
        aria-label="Scroll to invitation"
      >
        <HorizonMark className="h-5 w-10 text-clay" />
        <motion.span
          className="h-8 w-px bg-paper/40"
          animate={
            reduce ? undefined : { scaleY: [1, 0.45, 1], opacity: [0.5, 1, 0.5] }
          }
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
