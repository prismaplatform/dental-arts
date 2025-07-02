"use client";
import React, { useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// LightGallery CSS importok
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

// LightGallery plugin importok
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const GalleryPage = () => {
  const images = [
    "/assets/img/gallery1.jpeg",
    "/assets/img/gallery2.jpeg",
    "/assets/img/gallery3.jpeg",
    "/assets/img/gallery4.jpeg",
    "/assets/img/gallery5.jpeg",
    "/assets/img/gallery6.jpeg",
    "/assets/img/gallery7.jpeg",
    "/assets/img/gallery8.jpeg",

  ];

  // Thumbnail URL generálása
  const getThumbnailUrl = (imageUrl) => {
    return imageUrl;
  };

  const onInit = () => {
    console.log('LightGallery sikeresen inicializálva!');
  };

  // CSS stílusok hozzáadása
  useEffect(() => {
    const style = document.createElement('style');
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
      
      .gallery-item {
        cursor: pointer;
        border-radius: 12px;
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        margin-bottom: 16px;
      }
      
      .gallery-item:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
      
      .gallery-item img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 12px;
        transition: transform 0.3s ease;
      }
      
      .gallery-item:hover img {
        transform: scale(1.02);
      }
      
      .masonry-container {
        margin-top: 2rem;
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
             Pillanatok a rendelő mindennapjaiból
            </h2>
          </div>
          
          <div className="masonry-container">
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              elementClassNames="lightgallery-masonry"
              thumbnail={true}
              thumbWidth="100px"
              thumbHeight="80px"
              thumbMargin={5}
              animateThumb={true}
              currentPagerPosition="middle"
              thumbnailContainer={true}
              thumbsPosition="bottom"
              selector=".gallery-item"
            >
              <ResponsiveMasonry
                columnsCountBreakPoints={{
                  350: 1,
                  750: 2,
                  900: 3,
                  1200: 4
                }}
              >
                <Masonry gutter="16px">
                  {images.map((image, index) => (
                    <div
                      key={`gallery-item-${index}`}
                      className="gallery-item"
                      data-src={image}
                      data-thumb={getThumbnailUrl(image)}
                    >
                      <img 
                        src={image} 
                        alt={`Gallery image ${index + 1}`}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: 'auto',
                          minHeight: `${200 + Math.floor(Math.random() * 200)}px` // Véletlenszerű magasság a masonry effekthez
                        }}
                      />
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </LightGallery>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;