import React from "react";

const Cta = () => {
  return (
    <>
      <div className="bg-primary max-lg:flex-wrap max-lg:gap-20 sm:p-50 p-20 flex items-center rounded-[20px] w-full lg:justify-between">
        <div className="lg:w-1/2 w-full">
          <h2 className="xxl:text-5xl xl:text-[42px] sm:text-4xl text-2xxl font-bold font-sora text-white sm:leading-44 leading-34 xl:leading-62 max-lg:text-center">
            Subscribe To Regular Newsletters.
          </h2>
        </div>
        <div className="subscribe-form max-lg:mx-auto max-sm:w-full">
          <form
            className="relative w-full dzSubscribe"
            action="assets/script/mailchamp.php"
            method="post"
          >
            <div className="dzSubscribeMsg"></div>
            <div className="relative flex flex-wrap items-stretch w-full">
              <input
                className="bg-white w-full lg:h-80 sm:h-60 h-55 sm:pl-30 pl-15 sm:pr-167 pr-122 rounded-[12px] outline-none max-sm:text-sm"
                required="required"
                type="email"
                name="dzEmail"
                placeholder="Enter Your Email"
              />
              <button
                name="submit"
                id="submit"
                type="submit"
                className="btn absolute lg:right-7 lg:top-11.5 right-3 top-3.5 rounded-[10px]"
              >
                <span>Subscribe</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cta;
