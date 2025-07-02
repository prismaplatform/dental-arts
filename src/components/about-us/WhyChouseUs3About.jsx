// components/AboutUs.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Lucide ikon az "Olvass tovább" gombhoz



const WhyChouseUs3About = () => {
  return (
    <section className="lg:py-120 md:py-80 py-60">
      <div className="container">
        <div className="grid grid-cols-12 gap-25">
          <div className="lg:col-span-6 col-span-12">
            <div className="w-full group">
              <figure className="overflow-hidden">
                <Image
                  src="/assets/img/about-1.jpg"
                  alt="Orvosi csapat a klinikán"
                  width={600} // Szükséges a width és height
                  height={400} // Szükséges a width és height
                  layout="responsive" // A kép méreteződjön a szülőjével
                  className="w-full group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500"
                />
              </figure>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="lg:ml-16">
              <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-6 block"># Rólunk</span>
              <h2 className="xxl:text-4.8xl xl:text-4xl sm:text-3xl text-2xl font-semibold text-secondary xl:leading-[1.2] font-sora">Kiválóság az egészségügyben, bizalomra építve.</h2>
              <p className="text-base leading-28 text-gary font-normal xl:mt-25 mt-20 leading-30">Évek óta elkötelezetten nyújtunk kivételes orvosi ellátást, feddhetetlenséggel, együttérzéssel és tisztelettel. A kiválóság iránti elkötelezettségünk túlmutat a kezeléseken – célunk, hogy tartós kapcsolatokat építsünk minden pácienssel, biztosítva, hogy támogatva érezzék magukat egészségügyi útjuk során.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:mt-40 mt-15 gap-25">
          <div className="lg:col-span-5 col-span-12">
            <div className="max-lg:pb-15">
              <ul className="pt-40 pb-34">
                <li className="pb-21 font-semibold font-sora pl-20 relative text-secondary before:absolute before:size-10 before:bg-primary before:rounded-full before:left-0 before:top-8 max-xl:text-sm">Az egészségügyi élmények átalakítása</li>
                <li className="pb-21 font-semibold font-sora pl-20 relative text-secondary before:absolute before:size-10 before:bg-primary before:rounded-full before:left-0 before:top-8 max-xl:text-sm">Gondoskodás kedvességgel és megértéssel</li>
                <li className="pb-21 font-semibold font-sora pl-20 relative text-secondary before:absolute before:size-10 before:bg-primary before:rounded-full before:left-0 before:top-8 max-xl:text-sm">A legmagasabb színvonalra törekvés minden szolgáltatásban</li>
                <li className="pb-21 font-semibold font-sora pl-20 relative text-secondary before:absolute before:size-10 before:bg-primary before:rounded-full before:left-0 before:top-8 max-xl:text-sm">Elkötelezettek a közegészségügyi eredmények javítása iránt</li>
              </ul>
              <div className="flex items-center">
                {/* Használjunk Next.js Linket */}
                <Link href="/about-us" className="btn two">
                  <span>
                    Többet rólunk
                    <ArrowRight className="inline-block ml-2" size={16} /> {/* Lucide ikon */}
                  </span>
                </Link>
                {/* Használjunk Next.js Image-et az aláíráshoz */}
                <Image
                  src="/assets/img/signature.png"
                  alt="Aláírás"
                  width={150} // Becsült szélesség
                  height={50} // Becsült magasság
                  className="sm:ml-30 ml-20 sm:border-l sm:border-[#D8D8D8] sm:pl-30 py-20 sm:py-10"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12">
            <div className="w-full group">
              <figure className="overflow-hidden">
                {/* Használjunk Next.js Image-et */}
                <Image
                  src="/assets/img/about-2.jpg"
                  alt="Orvosi szoba"
                  width={600}
                  height={400}
                  layout="responsive"
                  className="w-full group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500"
                />
              </figure>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChouseUs3About;