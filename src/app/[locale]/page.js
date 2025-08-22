"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Feedback from "@/components/homepage/Feedback";
import Gallery from "@/components/homepage/Gallery";
import Hero from "@/components/homepage/Hero";
import Paiting from "@/components/homepage/Paiting";
import Portfolio from "@/components/homepage/Portfolio";
import Services from "@/components/homepage/Services";
import TestSection from "@/components/homepage/TestSection";
import WhyChouseUs2 from "@/components/homepage/WhyChouseUs2";
import Animation from "@/components/utils/Animation";
import FAQ from "@/components/utils/Faq";
import Preloader from "@/components/Preloader";
import Landing from "@/components/Landing";
// import SlidingImages from '@/components/SlidingImages';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      const scrollPosition = window.scrollY;
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        if (scrollPosition === 0) {
          window.scrollTo(0, 0);
        }
      }, 2000);
    })();
  }, []);

  return (
    <>
<AnimatePresence mode='wait'> {isLoading && <Preloader />} </AnimatePresence> <Landing />
      {/* csak akkor fusson animáció a Hero-ban, ha showPreloader == true volt */}
      <TestSection />
      <WhyChouseUs2 />
      <Services />
      <Gallery />
      <Feedback />
      <Animation />
      <FAQ />
      <Portfolio />
    </>
  );
}
