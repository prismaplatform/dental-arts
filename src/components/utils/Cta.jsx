import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <>
      <div className="bg-primary max-lg:flex-wrap max-lg:gap-20 sm:p-50 p-20 flex items-center rounded-[20px] w-full lg:justify-between">
        <div className="lg:w-1/2 w-full">
          <h2 className="xxl:text-5xl xl:text-[42px] sm:text-4xl text-2xxl font-bold font-sora text-white sm:leading-44 leading-34 xl:leading-62 max-lg:text-center">
            Iratkozz fel hírlevelünkre!
          </h2>
        </div>
        <div className="subscribe-form max-lg:mx-auto w-full sm:w-auto lg:w-1/2 xl:w-2/5"> {/* Módosított szélesség a jobb illeszkedésért */}
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
                placeholder="Email címed"
              />
              <button
                name="submit"
                id="submit"
                type="submit"
                className="btn absolute lg:right-7 lg:top-11.5 right-3 top-3.5 rounded-[10px]"
              >
                <span>Feliratkozás</span>
              </button>
            </div>

            {/* Rövidített GDPR Checkbox */}
            <div className="flex items-start mt-4">
              <input
                type="checkbox"
                id="gdpr-consent"
                name="gdprConsent"
                required
                className="mr-2 mt-1 min-w-[16px] min-h-[16px]"
              />
              <label htmlFor="gdpr-consent" className="text-white text-sm cursor-pointer">
                Elolvastam és elfogadom az <Link href="/terms" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Adatvédelmi irányelveket</Link>.
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cta;