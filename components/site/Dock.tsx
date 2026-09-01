"use client";

import { wedding } from "@/lib/content";
import { Heart, Home, Images, MapPin, Phone } from "lucide-react";

const items = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#couple", label: "Couple", icon: Heart },
  { href: "#place", label: "Place", icon: MapPin },
  { href: "#gallery", label: "Photos", icon: Images },
  { href: `tel:${wedding.contact.phoneTel}`, label: "Call", icon: Phone },
] as const;

export default function Dock() {
  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(0.45rem,env(safe-area-inset-bottom))] md:hidden"
      aria-label="Quick navigation"
    >
      <div className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-sand/50 bg-paper/92 px-1.5 py-1 shadow-[0_6px_24px_rgba(61,74,80,0.08)] backdrop-blur-xl">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex min-h-9 min-w-[3.1rem] flex-col items-center justify-center gap-px rounded-full px-1.5 text-ink/65 transition-colors active:bg-sand/25 active:text-ink"
            >
              <Icon size={14} strokeWidth={1.6} />
              <span className="font-sans text-[0.48rem] font-medium uppercase tracking-[0.14em]">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
