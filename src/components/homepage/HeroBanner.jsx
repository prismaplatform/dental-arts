'use client';

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { ArrowRight, Heart } from 'lucide-react'; 
import { Link } from '@/i18n/navigation';

const Hero = () => {
  const [patientsCount, setPatientsCount] = useState(0);
  const [reportsCount, setReportsCount] = useState(0);
  const [specialistsCount, setSpecialistsCount] = useState(0);
  const patientsRef = useRef(null);
  const reportsRef = useRef(null);
  const specialistsRef = useRef(null);

  const animateCounter = (target, setter, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16)
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
    <>
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/img/herobanner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="container relative z-20 pt-20">
          <div className="flex justify-center">
            <div className="max-w-4xl text-center">
              <div className="relative">
                <div className="relative">
                  <h1 className="xxl:text-6xl xl:text-6xl md:text-5.2xl sm:text-4.3xl text-4.75xl font-bold mb-20 uppercase font-sora text-white leading-[1.2]">
                    Mosolyt adunk <span className="text-primary">szakértelemmel</span> és törődéssel
                  </h1>
                </div>
                <p className="xxl:text-xxl xl:text-xl text-lg leading-32 xl:leading-34 pb-45 text-white font-normal max-w-3xl mx-auto">
                  Az EU‑konform Dental Arts modern, zöldövezeti rendelője fájdalommentes ellátást és személyre szabott kezelést kínál Fürdősor 12/B címen Sopron‑Balfon.
                </p>
                <div className="flex items-center justify-center gap-18 max-xl:flex-wrap">
                  <Link href="/about-us" className="btn">
                    <span className='flex gap-10'>
                      Tudj meg tobbet <ArrowRight size={20} />
                    </span>
                  </Link>
                  <ul className="flex ml-14 experience-team">
                    <li className="-ml-15">
                      <Image
                        src="/assets/img/team-1.png"
                        alt="Team Member 1"
                        width={50}
                        height={50}
                        className="max-xxl:w-50 rounded-full" 
                      />
                    </li>
                    <li className="-ml-15">
                      <Image
                        src="/assets/img/team-2.png"
                        alt="Team Member 2"
                        width={50}
                        height={50}
                        className="max-xxl:w-50 rounded-full"
                      />
                    </li>
                    <li className="-ml-15">
                      <Image
                        src="/assets/img/team-3.png"
                        alt="Team Member 3"
                        width={50}
                        height={50}
                        className="max-xxl:w-50 rounded-full"
                      />
                    </li>
                    <li className="-ml-15">
                      <Link href="/team" className="size-50 flex items-center justify-center rounded-full bg-primary text-white text-lg font-bold hover:bg-secondary transition-colors duration-300">
                        +
                      </Link>
                    </li>
                  </ul>
                  <div className='hidden md:block '>
                    <h6 className="font-bold text-white font-sora text-base">
                      1000+
                    </h6>
                    <span className="text-white max-xxl:text-xs">
                      Elégedett 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;