"use client";
import React from 'react';
import LightGallery from 'lightgallery/react';

// LightGallery CSS importok
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

// LightGallery plugin importok
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = () => {
  const images = [
    "https://prohealth-nextjs.vercel.app/images/about/portfolio_4_lg.jpeg",
    "https://prohealth-nextjs.vercel.app/images/about/portfolio_3_lg.jpeg",
    "https://prohealth-nextjs.vercel.app/images/about/portfolio_2_lg.jpeg",
    "https://prohealth-nextjs.vercel.app/images/about/portfolio_1_lg.jpeg",
  ];
  const thumbnailImages = [
  "https://prohealth-nextjs.vercel.app/images/about/portfolio_4.jpeg", // Replace with actual thumbnail URLs
  "https://prohealth-nextjs.vercel.app/images/about/portfolio_3.jpeg",
  "https://prohealth-nextjs.vercel.app/images/about/portfolio_2.jpeg",
  "https://prohealth-nextjs.vercel.app/images/about/portfolio_1.jpeg",
];

  // Ez a függvény lefut, amikor a LightGallery inicializálódik
  const onInit = () => {
    console.log('LightGallery sikeresen inicializálva!');
  };

  return (
    <>
      <section className="lg:pt-120 md:pt-80 pt-60 relative section-about-two">
        <div className="container mx-auto px-4">
          <div className="mb-10 w-[fit-content]">
            <span className="black font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg leading-50 text-primary">
              # Testimonials
            </span>
            <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
              Feedback That Inspires?
            </h2>
          </div>

          {/* A LightGallery komponens, ami az összes képet tartalmazza */}
          <LightGallery
            onInit={onInit} // Inicializáláskor futó callback
            speed={500} // Animáció sebessége milliszekundumban
            plugins={[lgThumbnail, lgZoom]} // A használni kívánt LightGallery plugin-ek
            // A rácselrendezéshez szükséges Tailwind CSS osztályok átadása
            elementClassNames="mt-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24"
          >
            {/* Végigmegyünk a képek listáján és létrehozzuk az <a> elemeket */}
            {images.map((image, index) => (
              <a
                key={`gallery-item-${index}`} // Egyedi kulcs minden elemhez
                className={`hidden md:block h-360 rounded-xl bg-cover bg-center ${
                  // Az első és az utolsó kép szélesebb oszlopot foglal el mobilon
                  index === 0 || index === images.length - 1 ? "md:col-span-2" : ""
                }`}
                style={{ backgroundImage: `url(${image})` }} // Háttérkép beállítása
                href={image} // Fontos: a LightGallery ezt az URL-t használja a teljes méretű képhez
                // Ha szeretnél külön miniatűr képeket, itt adhatod meg:
               data-external-thumb-image={thumbnailImages[index]} 
              >
                {/* Ezt az <a> elemet üresen is hagyhatod, ha csak háttérképet használsz.
                    LightGallery a href attribútumot használja. */}
              </a>
            ))}
          </LightGallery>
        </div>
      </section>
    </>
  );
};

export default Gallery;