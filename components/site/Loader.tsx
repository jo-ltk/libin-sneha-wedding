"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { wedding } from "@/lib/content";

const HOLD_MS = 2200;
const OPEN_MS = 1000;

export default function Loader() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<"hold" | "opening" | "done">("hold");

  useEffect(() => {
    if (reduceMotion) {
      const t = setTimeout(() => setPhase("done"), 400);
      return () => clearTimeout(t);
    }

    const holdTimer = setTimeout(() => setPhase("opening"), HOLD_MS);
    return () => clearTimeout(holdTimer);
  }, [reduceMotion]);

  useEffect(() => {
    if (phase !== "opening" || reduceMotion) return;

    const doneTimer = setTimeout(() => setPhase("done"), OPEN_MS);
    return () => clearTimeout(doneTimer);
  }, [phase, reduceMotion]);

  if (phase === "done") return null;

  const opening = phase === "opening";

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        className="fixed inset-0 z-[100] overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Left door — white */}
        <motion.div
          className="absolute inset-y-0 left-0 z-20 w-1/2 origin-left bg-paper"
          initial={{ x: 0 }}
          animate={opening ? { x: "-100%" } : { x: 0 }}
          transition={{
            duration: reduceMotion ? 0.2 : OPEN_MS / 1000,
            ease: [0.76, 0, 0.24, 1],
          }}
        />

        {/* Right door — sky blue */}
        <motion.div
          className="absolute inset-y-0 right-0 z-20 w-1/2 origin-right bg-dusk"
          initial={{ x: 0 }}
          animate={opening ? { x: "100%" } : { x: 0 }}
          transition={{
            duration: reduceMotion ? 0.2 : OPEN_MS / 1000,
            ease: [0.76, 0, 0.24, 1],
          }}
        />

        {/* Names — visible while doors are closed, fade as they open */}
        <motion.div
          className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
          initial={{ opacity: 1 }}
          animate={opening ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <p className="font-display text-[0.65rem] font-medium uppercase tracking-[0.45em] text-clay/80 sm:text-xs">
            You are invited to celebrate
          </p>
          <h1 className="font-display mt-5 text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
            {wedding.couple.groomsName}
            <span className="mx-2 italic text-clay">&</span>
            {wedding.couple.bridesName}
          </h1>
          <p className="mt-4 font-display text-sm italic text-ink/55 sm:text-base">
            {wedding.event.displayDate}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
