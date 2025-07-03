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
import Link from "next/link";

const Gallery = () => {
  const images = [
    "/assets/img/gallery8.jpeg",
    "/assets/img/gallery2.jpeg",
    "/assets/img/gallery4.jpeg",
    "/assets/img/gallery6.jpeg",
  ];

  // Thumbnail URL generálása - ha van külön thumbnail kép
  const getThumbnailUrl = (imageUrl) => {
    return imageUrl;
  };

  const onInit = () => {
    console.log("LightGallery sikeresen inicializálva!");
  };

  // CSS stílusok hozzáadása a thumbnail képek egyforma méretéhez és a reszponzivitás javítása
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

      /* Responsive image container for the main gallery grid */
      .gallery-grid-item {
        width: 100%; /* Ensure it takes full width on small screens */
        height: 200px; /* Adjust height for smaller screens */
        border-radius: 0.75rem; /* rounded-xl */
        background-size: cover;
        background-position: center;
      }

      @media (min-width: 768px) { /* md breakpoint */
        .gallery-grid-item {
          height: 360px; /* Original height for md and larger */
        }
        /* Adjust column span for larger screens */
        .gallery-grid-item.md\:col-span-2 {
          grid-column: span 2 / span 2;
        }
      }

      @media (max-width: 767px) { /* Extra styles for small screens if needed */
        .lg-outer.lg-components-open .lg-toolbar,
        .lg-outer.lg-components-open .lg-dropdown-outer {
          top: 0; /* Adjust toolbar position on small screens */
        }
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
        <div className="container ">
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
            thumbnail={true}
            thumbWidth="100px"
            thumbHeight="80px"
            thumbMargin={5}
            animateThumb={true}
            currentPagerPosition="middle"
            thumbnailContainer={true}
            thumbsPosition="bottom"
          >
            {images.map((image, index) => (
              <a
                key={`gallery-item-${index}`}
                className={`gallery-grid-item ${
                  index === 0 || index === images.length - 1
                    ? "md:col-span-2"
                    : ""
                }`}
                style={{ backgroundImage: `url(${image})` }}
                data-src={image}
                data-thumb={getThumbnailUrl(image)}
              >
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
            <Link href="/gallery" className="btn max-xxl:px-30">
              <span className="flex gap-10">
                További képek <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;