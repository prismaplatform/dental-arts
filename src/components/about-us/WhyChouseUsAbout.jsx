import { ArrowRight } from "lucide-react";
import React from "react";

const WhyChouseUsAbout = () => {
  return (
    <>
      <section className="lg:py-120 md:py-80 py-60 relative section-about-two">
        <div className="container">
          <div className="grid grid-cols-12 gap-30">
            <div className="lg:col-span-6 col-span-12">
              <div className="pb-50 w-[fit-content]">
                <span className="pb-6 black font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg leading-40 text-primary">
                   # Soproni Fogászat
                </span>
                <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
                Ahol szájüregi egészsége az első.
                </h2>
                <p className="mt-25 text-base font-normal text-gary xl:leading-30 leading-26">
                 Az egészség a legfontosabb számunkra. Elkötelezettek vagyunk amellett, hogy személyre szabott, magas színvonalú fogászati ellátást nyújtsunk meleg és barátságos környezetben. Akár megelőző ellátásra, helyreállító kezelésekre vagy esztétikai beavatkozásokra van szüksége.
                </p>
              </div>
              <ul className="list-style w-full flex flex-wrap justify-between relative mb-40 before:content-[''] xl:before:left-[46%] before:left-1/2 before:absolute before:w-px before:h-full before:bg-lightgary before:-translate-1/2 before:top-1/2">
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                  Átfogó szolgáltatások
                </li>
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                Közösségközpontú megközelítés
                </li>
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                 Modern technológia
                </li>
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                  Megbízható örökség
                </li>
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                  Elkötelezettség a kényelem iránt
                </li>
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                   Fenntartható ellátás
                </li>
              </ul>
             
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="relative">
                <img
                  src="/assets/img/deltaArtsClinic2.png"
                  alt="img"
                  className="relative z-10"
                />
                <img
                  src="assets/img/plus.png"
                  alt="img"
                  className="plus absolute max-xxl:w-[60%] max-lg:w-[38%]"
                />
                <img
                  src="assets/img/dots-img.png"
                  alt="img"
                  className="dots-img animate-fa-spin absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChouseUsAbout;
