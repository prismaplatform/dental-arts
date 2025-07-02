"use client";
import React, { useEffect } from "react";
import LightGallery from "lightgallery/react";
// LightGallery CSS importok
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
// LightGallery plugin importok
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { ArrowRight } from "lucide-react";

const Gallery = () => {
  const images = [
    "/assets/img/gallery8.jpeg",
    "/assets/img/gallery2.jpeg",
    "/assets/img/gallery4.jpeg",
    "/assets/img/gallery6.jpeg",
  ];

  // Thumbnail URL generálása - ha van külön thumbnail kép
  const getThumbnailUrl = (imageUrl) => {
    // Ha van külön thumbnail verzió, például '_lg.jpeg' helyett '_thumb.jpeg'
    // return imageUrl.replace('_lg.jpeg', '_thumb.jpeg');

    // Egyelőre ugyanazt a képet használjuk kisebb méretben
    return imageUrl;
  };

  const onInit = () => {
    console.log("LightGallery sikeresen inicializálva!");
  };

  // CSS stílusok hozzáadása a thumbnail képek egyforma méretéhez
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .lg-thumb-item {
        width: 100px !important;
        height: 80px !important;
        margin-right: 5px !important;
        overflow: hidden !important;
        border-radius: 4px;
        flex-shrink: 0;
      }
      
      .lg-thumb-item img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        display: block !important;
      }
      
      .lg-thumb-item.active {
        border: 2px solid #007bff;
        box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
      }
      
      .lg-thumb-outer {
        padding: 10px 0;
      }
      
      .lg-thumb {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <section className="lg:pt-120 md:pt-80 pt-60 relative section-about-two">
        <div className="container mx-auto px-4">
          <div className="mb-10 w-[fit-content]">
            <span className="black font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg leading-50 text-primary">
              # Galéria
            </span>
            <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
              Pillantson be rendelőnk világába!
            </h2>
          </div>

          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="mt-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24"
            // Thumbnail plugin beállítások - fix méretek
            thumbnail={true}
            thumbWidth="100px"
            thumbHeight="80px"
            thumbMargin={5}
            animateThumb={true}
            currentPagerPosition="middle"
            // Thumbnail container beállítások
            thumbnailContainer={true}
            thumbsPosition="bottom"
          >
            {images.map((image, index) => (
              <a
                key={`gallery-item-${index}`}
                className={`hidden md:block h-360 rounded-xl bg-cover bg-center ${
                  index === 0 || index === images.length - 1
                    ? "md:col-span-2"
                    : ""
                }`}
                style={{ backgroundImage: `url(${image})` }}
                data-src={image} // href helyett data-src
                data-thumb={getThumbnailUrl(image)} // data-external-thumb-image helyett data-thumb
              >
                {/* Opcionális: egy placeholder img elem a háttérképhez */}
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl opacity-0"
                  loading="lazy"
                />
              </a>
            ))}
          </LightGallery>
          <div className="text-center mt-40">
            <a href="/gallery" className="btn max-xxl:px-30">
              <span className="flex gap-10">
                További képek <ArrowRight size={20} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
