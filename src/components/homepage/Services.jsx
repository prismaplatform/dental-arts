"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  Brain,
  FileText,
  Stethoscope,
  Smile,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Általános fogászati ellátás",
      description:
        "Rendszeres kontroll, tömések, foghúzás és egyéb alapellátások fájdalommentesen.",
      icon: Stethoscope,
      bgColor: "bg-[#58CBF2]",
      shadowColor: "shadow-[0px_0px_24px_0px_rgba(88,203,242,0.4)]",
      link: "/szolgaltatasok/altalanos-fogaszat",
    },
    {
      id: 2,
      title: "Esztétikai fogászat",
      description:
        "Fogfehérítés, héjak és esztétikus tömések a ragyogó mosolyért.",
      icon: Smile,
      bgColor: "bg-[#F05DA8]",
      shadowColor: "shadow-[0px_0px_24px_0px_rgba(240,93,168,0.4)]",
      link: "/szolgaltatasok/esztetikai-fogaszat",
    },
    {
      id: 3,
      title: "Implantáció és fogpótlás",
      description:
        "Modern, tartós megoldások hiányzó fogak pótlására, személyre szabottan.",
      icon: FileText,
      bgColor: "bg-[#9B52E1]",
      shadowColor: "shadow-[0px_0px_24px_0px_rgba(155,82,225,0.4)]",
      link: "/szolgaltatasok/implantatum-fogpotlas",
    },
    {
      id: 4,
      title: "Szájsebészet",
      description:
        "Bölcsességfog eltávolítás, gyökércsúcs rezekció és egyéb sebészeti beavatkozások.",
      icon: Brain,
      bgColor: "bg-[#69b741]",
      shadowColor: "shadow-[0px_0px_24px_0px_rgba(105,183,65,0.4)]",
      link: "/szolgaltatasok/szajsebeszet",
    },
    {
      id: 5,
      title: "Gyermekfogászat",
      description:
        "Kíméletes és játékos megközelítés kis pácienseink fogainak egészségéért.",
      icon: Smile,
      bgColor: "bg-[#FFC107]",
      shadowColor: "shadow-[0px_0px_24px_0px_rgba(255,193,7,0.4)]",
      link: "/szolgaltatasok/gyermekfogaszat",
    },
    {
      id: 6,
      title: "Digitális diagnosztika",
      description:
        "Röntgen, panorámafelvétel és szkennelés – a precíz diagnózis érdekében.",
      icon: Stethoscope,
      bgColor: "bg-[#00BCD4]",
      shadowColor: "shadow-[0px_0px_24px_0px_rgba(0,188,212,0.4)]",
      link: "/szolgaltatasok/digitalis-diagnosztika",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="xl:pb-50 lg:pb-40 pb-30 flex justify-between items-end">
          <div>
            <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-5 block">
              # Szolgáltatásaink
            </span>
            <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-secondary font-sora leading-[1.2]">
               Professzionális fogászati ellátás minden korosztálynak.
            </h2>
          </div>

          {/* Navigation Buttons next to title */}
          <div className="flex gap-4">
            <div className="services-swiper-button-prev w-50 h-50 bg-white border-2 border-gray-200 text-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 shadow-lg z-99">
              <ChevronLeft size={24} />
            </div>
            <div className="services-swiper-button-next w-50 h-50 bg-white border-2 border-gray-200 text-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 shadow-lg z-99">
              <ChevronRight size={24} />
            </div>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={1}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".services-swiper-button-next",
              prevEl: ".services-swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className="services-slider"
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <SwiperSlide key={service.id} className="group h-full">
                  <div className="services-box flex flex-col justify-between h-full min-h-[400px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.07)] relative xxl:p-40 p-30 xxl:m-15 m-10 before:w-full before:h-0 before:bg-primary before:absolute before:bottom-0 before:left-0 group-hover:before:h-full before:duration-500">
                    <i
                      className={`${service.bgColor} group-hover:bg-white size-90 flex items-center justify-center mb-25 relative ${service.shadowColor} rounded-full`}
                    >
                      <IconComponent
                        size={45}
                        className="text-white group-hover:text-gray-800 transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </i>

                    <h4 className="xl:text-xl font-sora text-secondary font-medium leading-[1.2]">
                      <Link
                        href={service.link}
                        className="xxl:text-2xl text-xl font-bold font-sora relative text-secondary group-hover:text-white duration-500 hover:underline"
                      >
                        {service.title}
                      </Link>
                    </h4>

                    <p className="pt-10 pb-20 relative text-base leading-32 text-[#6f6f6f] font-normal group-hover:text-white duration-500">
                      {service.description}
                    </p>

                    <Link
                      href={service.link}
                      className="relative font-bold text-secondary font-sora group-hover:text-white duration-500 inline-flex items-center hover:underline"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-3 relative" />
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
