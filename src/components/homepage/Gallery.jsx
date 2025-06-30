
const Gallery = () => {
  const images = [
    "https://prohealth-nextjs.vercel.app/images/about/portfolio_4_lg.jpeg",
    "https://prohealth-nextjs.vercel.app/images/about/portfolio_3_lg.jpeg",
    "https://prohealth-nextjs.vercel.app/images/about/portfolio_2_lg.jpeg",
    "https://prohealth-nextjs.vercel.app/images/about/portfolio_1_lg.jpeg",
  ];

  return (
    <>
      <section className="lg:pt-120 md:pt-80 pt-60 relative section-about-two">
        <div className="container mx-auto px-4">
          <div className="mb-50 w-[fit-content]">
            <span className="black font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg leading-50 text-primary">
              # Testimonials
            </span>
            <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
              Feedback That Inspires?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 md:gap-16 lg:gap-24">
            {images.map((image, index) => (
              <div
                key={`desktop-${index}`}
                className={`
                  hidden md:block h-360 rounded-xl bg-cover bg-center 
                  ${
                    index === 0 || index === images.length - 1
                      ? "md:col-span-2"
                      : ""
                  }
                `}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
