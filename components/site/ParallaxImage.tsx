"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ParallaxImageProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
  scrollOffset?: [
    "start start" | "start end" | "end start" | "end end",
    "start start" | "start end" | "end start" | "end end",
  ];
  yRange?: [string, string];
  scaleOverride?: number;
};

export default function ParallaxImage({
  children,
  className = "",
  offset = 15,
  scrollOffset = ["start end", "end start"],
  yRange,
  scaleOverride,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: scrollOffset,
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    yRange ?? [`-${offset}%`, `${offset}%`],
  );
  const scale = scaleOverride ?? 1 + (offset * 2) / 100;

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${
        className.includes("absolute") || className.includes("fixed")
          ? ""
          : "relative"
      } ${className}`}
    >
      <motion.div
        className="absolute inset-0 h-full w-full will-change-transform"
        style={{ y, scale }}
      >
        {children}
      </motion.div>
    </div>
  );
}
