'use client';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from "next-intl";


const Hero = () => {
 
  const t = useTranslations("hero");

  

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