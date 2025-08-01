'use client';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from "next-intl";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [patientsCount, setPatientsCount] = useState(0);
  const [reportsCount, setReportsCount] = useState(0);
  const [specialistsCount, setSpecialistsCount] = useState(0);
  const patientsRef = useRef(null);
  const reportsRef = useRef(null);
  const specialistsRef = useRef(null);
  const t = useTranslations("hero");

  const animateCounter = (target, setter, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(interval);
      } else {
        setter(Math.ceil(start));
      }
    }, 16);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, 
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetElement = entry.target;
          const maxVal = parseInt(targetElement.dataset.max);

          if (targetElement === patientsRef.current) {
            animateCounter(maxVal, setPatientsCount);
          } else if (targetElement === reportsRef.current) {
            animateCounter(maxVal, setReportsCount);
          } else if (targetElement === specialistsRef.current) {
            animateCounter(maxVal, setSpecialistsCount);
          }
          observer.unobserve(targetElement);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (patientsRef.current) observer.observe(patientsRef.current);
    if (reportsRef.current) observer.observe(reportsRef.current);
    if (specialistsRef.current) observer.observe(specialistsRef.current);

    return () => {
      if (patientsRef.current) observer.unobserve(patientsRef.current);
      if (reportsRef.current) observer.unobserve(reportsRef.current);
      if (specialistsRef.current) observer.unobserve(specialistsRef.current);
    };
  }, []);

 return (
  <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    {/* Video háttér */}
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/assets/video/dental-loop.webm" type="video/mp4" /> 
      A böngésződ nem támogatja a videótag-et.
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-20"></div>

    {/* Tartalom */}
    <div className="relative z-10 container mx-auto flex items-center justify-center h-full">
      <div className="w-full lg:w-2/3 text-center">
        <h1 className="xxl:text-6xl xl:text-6xl md:text-5.2xl sm:text-4.3xl text-4.75xl font-bold mb-10 uppercase font-sora text-white leading-[1.2] [text-shadow:_0_0_45px_#00000080]">
         {t("slogan")}
        </h1>

        <div className="mt-10 flex justify-center">
          <Link href="/about-us" className="btn">
            <span className="flex gap-10 items-center">
              {t("learnMore")} <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

};

export default Hero;