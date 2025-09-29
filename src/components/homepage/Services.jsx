"use client";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Services = ({services}) => {
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
            {services.services.map((service) => {
              return (
                <SwiperSlide key={service.id} className="group h-full">
                  <div
                    className="services-box flex flex-col justify-between h-full min-h-[400px] relative xxl:p-40 p-30 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                    style={{
                      background: 'linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderImageSlice: '1',
                    }}
                  >
                    {/* Service Image - Improved styling */}
                    <div className="relative mb-25 flex items-center justify-center">
                      <div 
                        className="relative w-100  h-100 rounded-full overflow-hidden border-4 border-[#B122E5] shadow-[0_0_30px_rgba(177,34,229,0.4)] group-hover:shadow-[0_0_40px_rgba(177,34,229,0.6)] transition-all duration-500"
                      >
                        {service.main_image_url ? (
                          <Image
                            src={`http://adminpanel.dentalarts.hu/uploads/services/${service.main_image_url}`}
                            alt={service.title}
                            fill
                            
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              // Fallback to icon if image fails
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        
                        {/* Fallback icon */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-br from-[#B122E5] to-[#8A1CB8] flex items-center justify-center"
                          style={{ display: service.main_image_url ? 'none' : 'flex' }}
                        >
                          <span className="text-white text-3xl">🦷</span>
                        </div>
                      </div>
                      
                      {/* Animated background glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#B122E5] to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                    </div>

                    {/* Service Title */}
                    <h5 className="xxl:text-2xl text-xl font-bold font-sora relative text-white duration-500 hover:text-[#B122E5] cursor-pointer mb-4">
                      {service.title}
                    </h5>

                    {/* Service Description */}
                    <p className="relative text-base text-gray-300 font-normal duration-500 leading-relaxed flex-grow">
                      {service.short_description}
                    </p>

                    {/* Service Price (if available) */}
                    {service.price && (
                      <div className="mt-6 pt-4 border-t border-[#FFFFFF1A]">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Starting from</span>
                          <span className="px-4 py-2 bg-gradient-to-r from-[#B122E5] to-[#8A1CB8] text-white text-sm font-bold rounded-full shadow-lg">
                            ${service.price}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#B122E5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
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