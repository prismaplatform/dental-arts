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

const Portfolio = () => {
  const defaultBeforeImage = "/assets/img/before-after/before-1.png";
  const defaultAfterImage = "/assets/img/before-after/after-1.png";
  const defaultBeforeImage2 = "/assets/img/before-after/before-2.png";
  const defaultAfterImage2 = "/assets/img/before-after/after-2.png";
  const defaultBeforeImage3 = "/assets/img/before-after/before-3.png";
  const defaultAfterImage3 = "/assets/img/before-after/after-3.png";
  const portfolioItems = [
    {
      id: 1,
      type: "horizontal",
      beforeImage: defaultBeforeImage3,
      afterImage: defaultAfterImage3,
      category: "Horizontal View",
      title: "Side-by-Side Comparison",
      link: "/portfolio-details/horizontal-view",
    },
    {
      id: 2,
      type: "horizontal",
      beforeImage: defaultBeforeImage2,
      afterImage: defaultAfterImage2,
      category: "Vertical View",
      title: "Top-Bottom Transformation",
      link: "/portfolio-details/vertical-view",
    },
    {
      id: 3,
      type: "horizontal",
      beforeImage: defaultBeforeImage,
      afterImage: defaultAfterImage,
      category: "Premium Treatment",
      title: "Advanced Procedure Results",
      link: "/portfolio-details/premium-treatment",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 mb-40">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group flex flex-col items-stretch">
              <div className="relative w-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <ReactCompareSlider
                    portrait={item.type === "vertical"}
                    itemOne={
                      <ReactCompareSliderImage
                        src={item.beforeImage}
                        alt={`Before: ${item.title}`}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={item.afterImage}
                        alt={`After: ${item.title}`}
                        style={
                          item.type === "vertical"
                            ? {
                                backgroundColor: "white",
                                backgroundImage: `
                                  linear-gradient(45deg, #ccc 25%, transparent 25%),
                                  linear-gradient(-45deg, #ccc 25%, transparent 25%),
                                  linear-gradient(45deg, transparent 75%, #ccc 75%),
                                  linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
                                backgroundSize: `20px 20px`,
                                backgroundPosition: `0 0, 0 10px, 10px -10px, -10px 0px`,
                                objectFit: "cover",
                                objectPosition: "center",
                              }
                            : { objectFit: "cover", objectPosition: "center" }
                        }
                      />
                    }
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* <div className="p-6 text-center bg-white flex-grow">
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
                <Link
                  href={item.link}
                  className="text-primary font-bold inline-flex items-center hover:text-secondary transition-colors duration-200"
                >
                  View Details <ArrowRight size={16} className="ml-2" />
                </Link>
              </div> */}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/cases" className="btn max-xxl:px-30">
            <span className="flex gap-10">
              Összes eset <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
