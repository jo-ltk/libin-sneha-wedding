"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { HorizonMark } from "./Mark";
import { wedding } from "@/lib/content";

export default function Loader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const hideAt = reduce ? 400 : 2400;
    const timer = window.setTimeout(() => setVisible(false), hideAt);
    return () => {
      document.body.style.overflow = previous;
      window.clearTimeout(timer);
    };
  }, [reduce]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-forest"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-dusk"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center px-6 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <HorizonMark className="mb-7 h-8 w-14 text-clay" />
            <p className="font-display text-[clamp(2.4rem,10vw,3.6rem)] leading-none tracking-[-0.03em] text-paper">
              {wedding.couple.groomsName}
              <span className="mx-2 italic text-clay"> & </span>
              {wedding.couple.bridesName}
            </p>
            <p className="mt-5 font-sans text-[0.68rem] font-light uppercase tracking-[0.42em] text-sand/80">
              A wedding
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
