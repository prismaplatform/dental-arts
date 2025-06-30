import React from "react";

const WhyChouseUs = () => {
  return (
    <>
      <section className="lg:py-120 md:py-80 py-60 relative section-about-two">
        <div className="container">
          <div className="grid grid-cols-12 gap-30">
            <div className="lg:col-span-6 col-span-12">
              <div className="pb-50 w-[fit-content]">
                <span className="pb-6 black font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg leading-40 text-primary">
                  # Dental About Us
                </span>
                <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
                  Where Your Oral Health Comes First.
                </h2>
                <p className="mt-25 text-base font-normal text-gary xl:leading-30 leading-26">
                  Health is our top priority. We are dedicated to providing
                  personalized, high-quality dental care in a warm and welcoming
                  environment. Whether you need preventive care, restorative
                  treatments, or cosmetic enhancements.
                </p>
              </div>
              <ul className="list-style w-full flex flex-wrap justify-between relative mb-40 before:content-[''] xl:before:left-[46%] before:left-1/2 before:absolute before:w-px before:h-full before:bg-lightgary before:-translate-1/2 before:top-1/2">
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                  Comprehensive Services
                </li>
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                  Community Focused
                </li>
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                  Modern Technology
                </li>
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                  Trusted Legacy
                </li>
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                  Commitment to Comfort
                </li>
                <li className="w-[45%] pb-21 font-semibold font-sora pl-20 relative text-secondary max-xl:text-sm">
                  Sustainability in Care
                </li>
              </ul>
              <a href="about.html" className="btn max-xxl:px-30">
                <span>
                  More About Us<i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="relative">
                <img
                  src="assets/img/kep2.png"
                  alt="img"
                  className="relative z-10"
                />
                <img
                  src="assets/img/plus.png"
                  alt="img"
                  className="plus absolute max-xxl:w-[60%] max-lg:w-[38%]"
                />
                <img
                  src="assets/img/dots-img.png"
                  alt="img"
                  className="dots-img animate-fa-spin absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChouseUs;
