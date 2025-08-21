'use client';
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
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
import Preloader from '@/components/Preloader';
import Landing from '@/components/Landing';
// import SlidingImages from '@/components/SlidingImages';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("preloader_shown");

    if (alreadyLoaded) {
      // Már futott → ne mutass Preloadert
      setIsLoading(false);
      setShowPreloader(false);
    } else {
      // Első alkalommal → mutasd Preloadert
      setShowPreloader(true);

      setTimeout(() => {
        setIsLoading(false);
        setShowPreloader(false);
        sessionStorage.setItem("preloader_shown", "true");
      }, 2000);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {showPreloader && <Preloader />}
      </AnimatePresence>
      <Landing animateHero={showPreloader} />
      {/* csak akkor fusson animáció a Hero-ban, ha showPreloader == true volt */}
      <TestSection/>
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
