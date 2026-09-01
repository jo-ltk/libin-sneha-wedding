import { wedding } from "@/lib/content";
import { HorizonMark } from "./Mark";

export default function Footer() {
  return (
    <footer className="bg-dusk px-6 pb-[calc(4.25rem+env(safe-area-inset-bottom))] pt-16 text-center md:pb-16 md:pt-20">
      <HorizonMark className="mx-auto mb-8 h-7 w-14 text-clay" />
      <p className="font-display text-[clamp(1.8rem,5vw,2.6rem)] tracking-[-0.03em] text-paper">
        {wedding.couple.groomsName}
        <span className="mx-2 italic text-clay">&</span>
        {wedding.couple.bridesName}
      </p>
      <p className="mt-4 font-sans text-[0.68rem] uppercase tracking-[0.32em] text-sand/70">
        {wedding.groom.district} · {wedding.bride.district}
      </p>
    </footer>
  );
}
