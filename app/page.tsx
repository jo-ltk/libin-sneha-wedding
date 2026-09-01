import Contact from "@/components/site/Contact";
import Countdown from "@/components/site/Countdown";
import Dock from "@/components/site/Dock";
import Families from "@/components/site/Families";
import Footer from "@/components/site/Footer";
import Gallery from "@/components/site/Gallery";
import Hero from "@/components/site/Hero";
import Invitation from "@/components/site/Invitation";
import Loader from "@/components/site/Loader";
import Location from "@/components/site/Location";

export default function Home() {
  return (
    <>
      <a
        href="#invitation"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2"
      >
        Skip to invitation
      </a>
      <div className="grain" aria-hidden="true" />
      <Loader />
      <main>
        <Hero />
        <Countdown />
        <Invitation />
        <Families />
        <Location />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <Dock />
    </>
  );
}
