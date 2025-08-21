"use client";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { servicesData } from '../../data/services';
import { useTranslations } from "next-intl";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Services = () => {
  const t = useTranslations("services");
  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        boxShadow: "0px 0px 25px 0px #2E003A",
        backgroundImage: `url('/assets/img/backgroundServices.png')`,
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="container relative z-10">
        <div className="xl:pb-50 lg:pb-40 pb-30 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="mb-8 md:mb-0">
            <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-purple font-sora pb-5 block">
              {t("title")}
            </span>
            <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-white font-sora leading-[1.2]">
              {t("subtitle")}
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="services-swiper-button-prev w-50 h-50 bg-[#FFFFFF1A] border-2 border-[#E9FBFB1A] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B122E5] hover:text-white hover:border-[#B122E5] transition-all duration-300 shadow-lg z-99">
              <ChevronLeft size={24} />
            </div>
            <div className="services-swiper-button-next w-50 h-50 bg-[#FFFFFF1A] border-2 border-[#E9FBFB1A] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B122E5] hover:text-white hover:border-[#B122E5] transition-all duration-300 shadow-lg z-99">
              <ChevronRight size={24} />
            </div>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".services-swiper-button-next",
              prevEl: ".services-swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="services-slider"
          >
            {servicesData.map((service) => {
              return (
                <SwiperSlide key={service.id} className="group h-full">
                  <div
                    className="services-box flex flex-col justify-between h-full min-h-[400px] relative xxl:p-40 p-30 rounded-xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid transparent',
                      borderImageSource: `
                        radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%),
                        radial-gradient(60% 51.57% at 50% 50%, ${service.shadowColorHex} 0%, rgba(${parseInt(service.shadowColorHex.slice(1,3), 16)}, ${parseInt(service.shadowColorHex.slice(3,5), 16)}, ${parseInt(service.shadowColorHex.slice(5,7), 16)}, 0) 100%),
                        radial-gradient(54.8% 53% at 50% 50%, #151515 0%, rgba(21, 21, 21, 0) 100%)
                      `,
                      borderImageSlice: '1',
                    }}
                  >
                    <div
                      className={`${service.bgColor} size-90 flex items-center justify-center mb-25 relative rounded-full`}
                      style={{
                        boxShadow: `0px 0px 20px 0px ${service.shadowColorHex}73`,
                      }}
                    >
                      <Image
                        src={`/assets/icons/${service.icon}`}
                        alt={service.title}
                        width={55}
                        height={55}
                        className="text-white transition-colors duration-300"
                      />
                    </div>

                      <h5
                        className="xxl:text-2xl text-xl font-bold font-sora relative text-white duration-500 hover:underline"
                      >
                        {service.title}
                      </h5>

                    <p className="pt-10 pb-20 relative text-base text-gray-200 font-normal duration-500">
                      {service.description}
                    </p>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="text-center mt-40">
          <a href="/services" className="btn max-xxl:px-30">
            <span className="flex gap-10">
              {t("button")} <ArrowRight size={20} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;