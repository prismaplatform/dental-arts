"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Import the image comparison slider components
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

// Import Lucide React icons
import { ArrowRight } from "lucide-react";

const PortfolioAll = () => {
  // Define a larger set of default images for 9 items
  const defaultBeforeImage1 = "/assets/img/before-after/before-1.png";
  const defaultAfterImage1 = "/assets/img/before-after/after-1.png";
  const defaultBeforeImage2 = "/assets/img/before-after/before-2.png";
  const defaultAfterImage2 = "/assets/img/before-after/after-2.png";
  const defaultBeforeImage3 = "/assets/img/before-after/before-3.png";
  const defaultAfterImage3 = "/assets/img/before-after/after-3.png";
  const defaultBeforeImage4 = "/assets/img/before-after/before-4.png"; // Assuming you have these images
  const defaultAfterImage4 = "/assets/img/before-after/after-4.png";
  const defaultBeforeImage5 = "/assets/img/before-after/before-5.png";
  const defaultAfterImage5 = "/assets/img/before-after/after-5.png";
  const defaultBeforeImage6 = "/assets/img/before-after/before-6.png";
  const defaultAfterImage6 = "/assets/img/before-after/after-6.png";
  const defaultBeforeImage7 = "/assets/img/before-after/before-7.png";
  const defaultAfterImage7 = "/assets/img/before-after/after-7.png";
  const defaultBeforeImage8 = "/assets/img/before-after/before-8.png";
  const defaultAfterImage8 = "/assets/img/before-after/after-8.png";
  const defaultBeforeImage9 = "/assets/img/before-after/before-9.png";
  const defaultAfterImage9 = "/assets/img/before-after/after-9.png";

  const portfolioItems = [
    {
      id: 1,
      type: "horizontal",
      beforeImage: defaultBeforeImage1,
      afterImage: defaultAfterImage1,
      category: "Esztétikai fogászat",
      title: "Mosolytervezés és -átalakítás",
      link: "/portfolio-details/mosolytervezes",
    },
    {
      id: 2,
      type: "horizontal", // Changed to horizontal for consistency, but `portrait` prop handles vertical
      beforeImage: defaultBeforeImage2,
      afterImage: defaultAfterImage2,
      category: "Fogfehérítés",
      title: "Ragyogóbb fogak",
      link: "/portfolio-details/fogfeherites",
    },
    {
      id: 3,
      type: "horizontal",
      beforeImage: defaultBeforeImage3,
      afterImage: defaultAfterImage3,
      category: "Korona és Híd",
      title: "Hiányzó fogak pótlása",
      link: "/portfolio-details/korona-hid",
    },
    {
      id: 4,
      type: "horizontal",
      beforeImage: defaultBeforeImage4,
      afterImage: defaultAfterImage4,
      category: "Fogszabályozás",
      title: "Egyenes fogsor, magabiztos mosoly",
      link: "/portfolio-details/fogszabalyozas",
    },
    {
      id: 5,
      type: "horizontal",
      beforeImage: defaultBeforeImage5,
      afterImage: defaultAfterImage5,
      category: "Fogimplantátum",
      title: "Teljes fogsor rehabilitáció",
      link: "/portfolio-details/fogimplantatum",
    },
    {
      id: 6,
      type: "horizontal",
      beforeImage: defaultBeforeImage6,
      afterImage: defaultAfterImage6,
      category: "Gyökérkezelés",
      title: "Fájdalommentes gyógyulás",
      link: "/portfolio-details/gyokerkezeles",
    },
    {
      id: 7,
      type: "horizontal",
      beforeImage: defaultBeforeImage7,
      afterImage: defaultAfterImage7,
      category: "Parodontológia",
      title: "Egészséges íny visszaállítása",
      link: "/portfolio-details/parodontologia",
    },
    {
      id: 8,
      type: "horizontal",
      beforeImage: defaultBeforeImage8,
      afterImage: defaultAfterImage8,
      category: "Konzerváló fogászat",
      title: "Tömés és restauráció",
      link: "/portfolio-details/konzervalo-fogaszat",
    },
    {
      id: 9,
      type: "horizontal",
      beforeImage: defaultBeforeImage9,
      afterImage: defaultAfterImage9,
      category: "Gyermekfogászat",
      title: "Egészséges gyermekfogak",
      link: "/portfolio-details/gyermekfogaszat",
    },
  ];

  return (
    <section className="lg:py-120 md:py-80 py-60">
      <div className="container ">
        <div className="xl:pb-50 lg:pb-40 pb-30 text-center">
          <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-6 block">
            # Esettanulmányok
          </span>
          <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-secondary font-sora leading-[1.2]">
            Látványos változások – előtte és utána.
          </h2>
        </div>

        {/* Adjusted grid layout for 3 columns on larger screens, 2 on medium, and 1 on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 md:gap-15 lg:gap-20 mb-20">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-stretch rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="relative w-full overflow-hidden">
                <div className="relative w-full aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <ReactCompareSlider
                    // portrait={item.type === "vertical"} // Keep this if you want to use vertical sliders
                    itemOne={
                      <ReactCompareSliderImage
                        src={item.beforeImage}
                        alt={`Before: ${item.title}`}
                        // Optimized image styles for better fit
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={item.afterImage}
                        alt={`After: ${item.title}`}
                        // Optimized image styles for better fit and optional background for transparency
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    }
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Information section below the slider */}
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-primary text-sm font-semibold mb-2 uppercase">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    <Link
                      href={item.link}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  </h3>
                </div>
                <Link
                  href={item.link}
                  className="text-primary font-bold inline-flex items-center justify-center hover:text-secondary transition-colors duration-200 mt-4"
                >
                  Részletek megtekintése <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default PortfolioAll;