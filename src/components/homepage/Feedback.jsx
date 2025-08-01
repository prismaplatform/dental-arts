"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Feedback = () => {
  const testimonials = [
    {
  id: 1,
  rating: 5,
  text: "Az egész csapat rendkívül kedves és profi volt a kezelésem alatt. Mindenki maximálisan odafigyelt rám, így teljes biztonságban éreztem magam.",
  image: "/assets/img/review-img-1.jpg",
  name: "Kovács Anna",
  position: "elégedett páciens",
},
{
  id: 2,
  rating: 5,
  text: "Gyors és fájdalommentes kezelést kaptam, az orvosok és az asszisztensek is nagyon barátságosak voltak. Bátran ajánlom mindenkinek!",
  image: "/assets/img/review-img-2.jpg",
  name: "Szabó Péter",
  position: "elégedett páciens",
},
{
  id: 3,
  rating: 5,
  text: "A legmodernebb technológiát használják, és nagyon figyelnek a részletekre. Teljesen elégedett vagyok az eredménnyel és a szolgáltatással.",
  image: "/assets/img/team-1.png",
  name: "Nagy Réka",
  position: "elégedett páciens",
},
{
  id: 4,
  rating: 5,
  text: "Köszönöm a kedves és türelmes hozzáállást! A kezelések során mindig minden kérdésemre választ kaptam, ami megnyugtató volt számomra.",
  image: "/assets/img/team-2.png",
  name: "Tóth Gábor",
  position: "elégedett páciens",
},
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <li key={index}>
        <Star
          size={18}
          className={`${
            index < rating ? "text-yellow fill-yellow" : "text-gray-300"
          }`}
        />
      </li>
    ));
  };
const t = useTranslations("testimonials");
  return (
    <section className="lg:py-120 md:py-80 py-60">
      <div className="container ">
        <div className="xl:pb-50 lg:pb-40 pb-30 flex justify-between items-end">
          <div>
            <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-5 block">
             {  t("title")}
            </span>
            <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-secondary font-sora leading-[1.2]">
                  {t("subtitle")}
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
      </div>

      <div className="relative -mt-110 !pt-110">
        <Swiper
          modules={[Navigation, Autoplay, FreeMode]}
          slidesPerView={3}
          spaceBetween={24}
          loop={true}
          centeredSlides={true}
          speed={2000}
          freeMode={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
           navigation={{
              nextEl: '.services-swiper-button-next',
              prevEl: '.services-swiper-button-prev',
            }}
          breakpoints={{
            10: {
              slidesPerView: 1,
            },
            556: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="reviewtwo-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="group">
              <div className="relative bg-white md:p-40 p-15 border border-lightgary duration-500 group-hover:bg-primary">
                <ul className="flex text-sm gap-4 mb-10">
                  {renderStars(testimonial.rating)}
                </ul>
                <p className="md:text-2xl text-xl md:leading-34 font-medium pb-21 text-gary duration-500 group-hover:text-white">
                  {testimonial.text}
                </p>
                <div className="pt-12 flex items-center gap-15">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-50 h-50 object-cover"
                  />
                  <div>
                    <h5 className="md:text-base text-sm font-bold pb-4 font-sora text-secondary group-hover:text-white duration-500">
                      {testimonial.name}
                    </h5>
                    <span className="group-hover:text-white duration-500">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
                <img
                  src="/assets/img/quotes.png"
                  alt="quotes"
                  className="absolute md:right-[10%] right-[5%] md:bottom-48 bottom-36 bg-transparent md:mt-50 group-hover:[filter:invert(1)] duration-500 max-md:w-40"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
       
      </div>
    </section>
  );
};

export default Feedback;
