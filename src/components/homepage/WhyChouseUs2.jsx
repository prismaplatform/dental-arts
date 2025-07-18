import React from "react";
import { Stethoscope, HeartHandshake, ArrowRight, User2, Trophy, Users, Family, Heart } from "lucide-react";
import Link from "next/link";

const WhyChouseUs2 = () => {
  return (
    <>
      <section className="lg:pt-120 md:pt-80 pt-60 relative section-about-two">
        <div className="container">
          <div className="grid grid-cols-12 gap-25">
            <div className="lg:col-span-6 col-span-12">
              <div className="text-end relative before:absolute before:w-[71%] before:h-full before:bg-primary before:-left-38 before:z-[-1] before:rotate-[5deg] before:top-[13%] mt-50 lg:mr-40 max-lg:before:hidden">
                <figure className="overflow-hidden">
                  <img
                    src="/assets/img/deltaArtsClinic1.png"
                    alt="img"
                    className="w-full"
                  />
                </figure>
                <div className="absolute xl:top-[-15%] xl:left-[-10%] lg:top-[-11%] lg:left-[-11%] top-[-12%] left-[-6%] xl:size-200 size-170 bg-white rounded-full flex items-center justify-center max-md:size-165">
                  <img
                    alt="img"
                    src="/assets/img/choose-us-logo.png"
                    className="size-80 p-17 bg-primary rounded-full "
                  />
                  <img
                    alt="img"
                    src="/assets/img/circle-image.png"
                    className="circle absolute size-auto bg-transparent p-17 mx-auto mt-10 text-center z-[1] animate-fa-spin"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="pb-50 w-[fit-content]">
                <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-6 block">
                  # Az Ön Mosolya, A Mi Küldetésünk
                </span>
                <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-secondary font-sora leading-[1.2]">
                  Miért a Dental Arts a legjobb választás az Ön számára?
                </h2>
                <p className="text-base leading-28 text-gary font-normal border-l-3 border-primary pl-27 mt-25">
                  A soproni Dental Artsnál nem csak fogakat kezelünk, hanem{" "}
                  **mosolyokat építünk**, melyek magabiztosságot
                  és örömet sugároznak. Elkötelezettek vagyunk amellett, hogy
                  minden páciensünk számára kivételes, személyre szabott
                  ellátást nyújtsunk, családias hangulatban. Az Ön kényelme és
                  egészsége a legfontosabb számunkra.
                </p>
              </div>

              {/* Two Column Layout for Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
                <div className="flex items-center gap-4 mb-4 md:mb-0 group"> {/* Adjusted for title next to icon */}
                  <span
                    className="size-50 flex items-center justify-center relative rounded-full flex-shrink-0
                   bg-[linear-gradient(256.15deg,#FF63DE_0%,#B122E5_100%)]
                   shadow-[0px_0px_24px_0px_#f05da866,0px_0px_10px_0px_#FF63DEBF]
                   backdrop-blur-[42px]"
                  >
                    <User2 className="size-30 p-5 group-hover:[transform:rotate3d(1,1,1,360deg)] duration-500 text-white" /> {/* Smaller icon size and padding */}
                  </span>
                  <h4 className="font-bold xl:text-xl text-lg text-secondary leading-[1.2] font-sora">
                    Több Generáció a Szolgálatában
                  </h4>
                </div>

                <div className="flex items-center gap-4 mb-4 md:mb-0 group"> {/* Adjusted for title next to icon */}
                  <span
                    className="size-50 flex items-center justify-center relative rounded-full flex-shrink-0
                   bg-[linear-gradient(256.15deg,#029CF5_0%,#00E4F5_100%)]
                   shadow-[0px_0px_24px_0px_#f05da866,0px_0px_10px_0px_#12EBF2BF]
                   backdrop-blur-[42px]"
                  >
                    <Trophy className="size-30 p-5 group-hover:[transform:rotate3d(1,1,1,360deg)] duration-500 text-white" /> {/* Smaller icon size and padding */}
                  </span>
                  <h4 className="font-bold xl:text-xl text-lg text-secondary leading-[1.2] font-sora">
                    Több mint 30 év Szakértelem
                  </h4>
                </div>

                <div className="flex items-center gap-4 mb-4 md:mb-0 group"> {/* Adjusted for title next to icon */}
                  <span
                    className="size-50 flex items-center justify-center relative rounded-full flex-shrink-0
                   bg-[linear-gradient(256.15deg,#FF63DE_0%,#B122E5_100%)]
                   shadow-[0px_0px_24px_0px_#f05da866,0px_0px_10px_0px_#FF63DEBF]
                   backdrop-blur-[42px]"
                  >
                    <Users className="size-30 p-5 group-hover:[transform:rotate3d(1,1,1,360deg)] duration-500 text-white" /> {/* Smaller icon size and padding */}
                  </span>
                  <h4 className="font-bold xl:text-xl text-lg text-secondary leading-[1.2] font-sora">
                    Több mint 10.000 Elégedett Páciens
                  </h4>
                </div>

                <div className="flex items-center gap-4 group"> {/* Adjusted for title next to icon */}
                  <span
                    className="size-50 flex items-center justify-center relative rounded-full flex-shrink-0
                   bg-[linear-gradient(256.15deg,#029CF5_0%,#00E4F5_100%)]
                   shadow-[0px_0px_24px_0px_#f05da866,0px_0px_10px_0px_#12EBF2BF]
                   backdrop-blur-[42px]"
                  >
                    <Heart className="size-30 p-5 group-hover:[transform:rotate3d(1,1,1,360deg)] duration-500 text-white" /> {/* Smaller icon size and padding */}
                  </span>
                  <h4 className="font-bold xl:text-xl text-lg text-secondary leading-[1.2] font-sora">
                    Családi Vállalkozás, Gondoskodó Közeg
                  </h4>
                </div>
              </div>
              {/* End Two Column Layout for Values */}

              <div className="flex justify-end">
                <Link href="/appointment" className="btn max-xxl:px-30 mt-40">
                  <span className="flex gap-10">
                    Foglalj időpontot <ArrowRight size={20} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChouseUs2;