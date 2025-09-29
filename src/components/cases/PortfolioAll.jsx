"use client";

// Import the image comparison slider components
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const PortfolioAll = ({title, subtitle, home, casesData}) => {
  // Base URL for images
  const imageBaseUrl = "http://adminpanel.dentalarts.hu/uploads/cases/";

  return (
    <section className="lg:py-120 md:py-80 py-60">
      <div className="container ">
        <div className="xl:pb-50 lg:pb-40 pb-30 text-center">
          <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-6 block">
            {title}
          </span>
          <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-secondary font-sora leading-[1.2]">
            {subtitle}
          </h2>
        </div>

        {/* Adjusted grid layout for 3 columns on larger screens, 2 on medium, and 1 on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 md:gap-15 lg:gap-20 mb-20">
          {casesData.cases.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-stretch rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="relative w-full overflow-hidden">
                <div className="relative w-full aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        src={`${imageBaseUrl}${item.before_image}`}
                        alt={`Before: ${item.title}`}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={`${imageBaseUrl}${item.after_image}`}
                        alt={`After: ${item.title}`}
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
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioAll;