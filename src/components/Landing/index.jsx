'use client'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useTranslations } from "next-intl";
import { useLayoutEffect, useRef } from 'react';
import { slideUp } from './animation';
import { ArrowRight } from 'lucide-react';
import styles from './style.module.scss';
import { Link } from '@/i18n/navigation';
export default function Landing({ animateHero = false }) {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }
 
  const t = useTranslations("hero");

  return (
    <motion.main variants={slideUp} initial={animateHero ? "initial" : false} animate={animateHero ? "enter" : "noAnim"} className={styles.landing}>
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/assets/video/Dentlart-v3.mp4" type="video/mp4" /> 
      A böngésződ nem támogatja a videótag-et.
    </video>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Dental Arts -</p>
          <p ref={secondText}>Dental Arts -</p>
        </div>
      </div>
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
    </motion.main>
  )
}
