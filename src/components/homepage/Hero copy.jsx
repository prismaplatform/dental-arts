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
      <section className="bg-[#DCE9F4] pt-100 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-12 items-center">
            <div className="lg:col-span-6 col-span-12 pb-50 md:pb-0">
              <div className="relative">
                {/* <span className="xxl:text-xxl sm:text-lg text-sm uppercase font-bold text-secondary flex items-center">
                  <Heart size={20} className="pr-2 text-[#FC4F4F]" /> 
                  Solutions for Better Health
                </span> */}
                <div className="relative">
                  <h1 className="xxl:text-6xl xl:text-6xl md:text-5.2xl sm:text-4.3xl text-4.75xl font-bold mb-20 uppercase font-sora text-secondary leading-[1.2]">
                  Mosolyt adunk szakértelemmel és törődéssel
                  </h1>
                </div>
                <p className="xxl:text-xxl xl:text-xl text-lg leading-32 xl:leading-34 pb-45 text-gary font-normal">
                 Az EU‑konform Dental Arts modern, zöldövezeti rendelője fájdalommentes ellátást és személyre szabott kezelést kínál Fürdősor 12/B címen Sopron‑Balfon.
                </p>
                <div className="flex items-center gap-18 max-xl:flex-wrap">
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
                      <Link href="/team" className="size-50 flex items-center justify-center rounded-full bg-primary text-white text-lg font-bold hover:bg-secondary transition-colors duration-300"> {/* Converted to Link, added styles */}
                        +
                      </Link>
                    </li>
                  </ul>
                  <div className='hidden md:block '>
                    <h6 className="font-bold text-secondary font-sora text-base">
                      1000+
                    </h6>
                    <span className="text-secondary max-xxl:text-xs">
                      Elégedett 
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="flex xl:gap-60 sm:gap-40 gap-20 pt-50">
                <div>
                  <h2
                    data-max="500" 
                    ref={patientsRef} 
                    className="counter xl:text-5.2xl md:text-4.65xl text-2.3xl font-bold text-secondary font-sora"
                  >
                    {patientsCount.toLocaleString()}+ 
                  </h2>
                  <span className="text-secondary max-md:text-xs max-md:leading-18 max-md:block">
                    Patients Served
                  </span>
                </div>
                <div>
                  <h2
                    data-max="2"
                    ref={reportsRef} 
                    className="counter xl:text-5.2xl md:text-4.65xl text-2.3xl font-bold text-secondary font-sora"
                  >
                    {reportsCount.toLocaleString()}M+ 
                  </h2>
                  <span className="text-secondary max-md:text-xs max-md:leading-18 max-md:block">
                    Reports Delivered
                  </span>
                </div>
                <div>
                  <h2
                    data-max="100"
                    ref={specialistsRef}
                    className="counter xl:text-5.2xl md:text-4.65xl text-2.3xl font-bold text-secondary font-sora"
                  >
                    {specialistsCount.toLocaleString()}+ 
                  </h2>
                  <span className="text-secondary max-md:text-xs max-md:leading-18 max-md:block">
                    Expert Specialists
                  </span>
                </div>
              </div> */}
            </div>
            <div className="lg:col-span-6 col-span-12 hidden md:block">
              <div className="relative">
                <Image
                  src="/assets/img/heroDental2.png"
                  alt="Hero Image"
                  width={800} 
                  height={800} 
                  className="4xl:max-w-[125%] max-xl:mt-150 max-lg:mt-50 w-full h-auto object-contain" 
                />
                <ul className="shaps">
                  <li className="absolute">
                    <Image
                      src="/assets/img/shaps-1.svg"
                      alt="Shape 1"
                      width={100}
                      height={100}
                      className="max-w-[125%] animate-topshap max-md:w-70"
                    />
                  </li>
                  {/* If you want shaps-2.png, uncomment and add Next.js Image props */}
                  {/* <li className="absolute">
                    <Image
                      src="/assets/img/shaps-2.png"
                      alt="Shape 2"
                      width={150} // Adjust width/height
                      height={150}
                      className="max-w-[125%] animate-topshap max-md:w-130 max-sm:w-70"
                    />
                  </li> */}
                  {/* shaps-3 and shaps-4 would go here if uncommented in original HTML */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;