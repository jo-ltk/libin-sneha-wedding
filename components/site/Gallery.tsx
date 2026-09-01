"use client";

import { images } from "@/lib/content";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FadeUp, WordReveal } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const layout = [
  {
    span: "md:col-span-7",
    aspect: "aspect-[4/5] md:aspect-[3/4]",
    offset: "",
    sizes: "(max-width: 768px) 100vw, 58vw",
  },
  {
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
    offset: "md:mt-24",
    sizes: "(max-width: 768px) 100vw, 42vw",
  },
] as const;

function GalleryFrame({
  image,
  index,
  onOpen,
}: {
  image: (typeof images.gallery)[number];
  index: number;
  onOpen: (index: number) => void;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["9%", "-9%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.05, 1.14]);
  const config = layout[index % layout.length];

  return (
    <div ref={ref} className={`${config.span} ${config.offset} w-full`}>
      <motion.button
        type="button"
        onClick={() => onOpen(index)}
        className={`cine-vignette group relative block ${config.aspect} w-full overflow-hidden rounded-[2px] bg-ink text-left shadow-[0_40px_120px_-30px_rgba(0,0,0,0.85)]`}
        initial={false}
        animate={
          reduce || isInView
            ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
            : { opacity: 0.2, clipPath: "inset(0% 0% 100% 0%)" }
        }
        transition={{ duration: 1.5, delay: index * 0.16, ease }}
      >
        <motion.div
          className="absolute inset-0"
          style={reduce ? { scale: 1.05 } : { y, scale }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={config.sizes}
            quality={88}
            className="cine-grade object-cover transition-[filter,transform] duration-[1200ms] ease-out group-hover:brightness-[1.02] group-hover:contrast-[1.16]"
          />
        </motion.div>

        <div className="absolute inset-0 rounded-[2px] ring-1 ring-inset ring-paper/12 transition-colors duration-700 group-hover:ring-clay/40" />

        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-6 md:px-8 md:pb-8">
          <motion.div
            className="mb-4 h-px w-10 origin-left bg-clay/70"
            initial={false}
            animate={reduce || isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.9 + index * 0.16, ease }}
          />
          <p className="font-display text-[1.15rem] leading-snug tracking-[-0.01em] text-paper md:text-[1.4rem]">
            {image.caption}
          </p>
        </div>
      </motion.button>
    </div>
  );
}

function Lightbox({
  active,
  onClose,
  onNavigate,
}: {
  active: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const reduce = useReducedMotion();
  const image = images.gallery[active];

  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate(active + 1);
      if (event.key === "ArrowLeft") onNavigate(active - 1);
    },
    [active, onClose, onNavigate],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/96 px-4 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.4 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex min-h-11 min-w-11 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/20"
        aria-label="Close gallery"
      >
        <X size={20} strokeWidth={1.6} />
      </button>

      <motion.div
        className="relative h-[min(80vh,760px)] w-full max-w-4xl overflow-hidden rounded-[2px]"
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.6, ease }}
        onClick={(event) => event.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              quality={92}
              className="cine-grade object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-6 py-6 text-center">
          <p className="font-display text-xl text-paper">{image.caption}</p>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
        {images.gallery.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-label={`View ${item.caption}`}
            onClick={(event) => {
              event.stopPropagation();
              onNavigate(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === active ? "w-8 bg-clay" : "w-1.5 bg-paper/35"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const open = useCallback((index: number) => setActive(index), []);
  const close = useCallback(() => setActive(null), []);
  const navigate = useCallback((index: number) => {
    setActive((index + images.gallery.length) % images.gallery.length);
  }, []);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-ink px-6 pt-28 pb-14 md:px-12 md:pt-40 md:pb-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse at 12% 8%, rgba(106,173,201,0.16), transparent 48%), radial-gradient(ellipse at 88% 92%, rgba(58,82,68,0.5), transparent 52%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
          <FadeUp>
            <p className="mb-5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.38em] text-clay">
              Captured moments
            </p>
          </FadeUp>

          <WordReveal
            text="Our gallery."
            className="font-display text-[clamp(2.6rem,8vw,5.2rem)] leading-[0.95] tracking-[-0.04em] text-paper"
          />

          <FadeUp delay={0.1} className="mt-6">
            <p className="font-display text-[1.05rem] leading-relaxed text-sand/70">
              A few frames from the journey — tap any photo to view it full size.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {images.gallery.map((image, index) => (
            <GalleryFrame
              key={image.src}
              image={image}
              index={index}
              onOpen={open}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <Lightbox active={active} onClose={close} onNavigate={navigate} />
        )}
      </AnimatePresence>
    </section>
  );
}
