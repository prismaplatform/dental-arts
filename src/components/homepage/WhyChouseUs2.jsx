import React from "react";
import { Stethoscope, HeartHandshake, ArrowRight } from "lucide-react"; // Importáld a Lucid ikonokat
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
                  # Miért válassza a Dental Arts-ot?
                </span>
                <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-secondary font-sora leading-[1.2]">
                  A ragyogó mosolyhoz vezető útja itt kezdődik.
                </h2>
                <p className="text-base leading-28 text-gary font-normal border-l-3 border-primary pl-27 mt-25">
                  A soproni Dental Artsnál hisszük, hogy a kiváló fogászati
                  ellátás túlmutat a kezeléseken. Ez egy{" "}
                  <strong>személyre szabott élmény</strong>, mely a bizalomra és
                  a kényelemre épül, ahol az Ön szájhigiéniája és gyönyörű
                  mosolya a legfőbb prioritásunk.
                </p>
              </div>
              <div className="sm:flex gap-20 mb-25 border-b border-[#D8D8D8] pb-25 group">
                <span
                  className="bg-[#F05DA8] size-90 flex items-center justify-center mb-25 relative 
							shadow-[#f05da866_0px_0px_24px_0px] rounded-full"
                >
                  <Stethoscope className="size-90 p-20 group-hover:[transform:rotate3d(1,1,1,360deg)] duration-500 text-white" />
                </span>
                <div>
                  <h4 className="font-bold xl:text-2.3xl text-2xl pb-7 text-secondary leading-[1.2] font-sora">
                    Képzett szakemberek, modern ellátás
                  </h4>
                  <p className="text-base leading-30 text-gary fobt-normal">
                    Tapasztalt fogorvosainkból és szakembereinkből álló
                    csapatunk többéves szakértelemmel és a legmagasabb szintű
                    ellátás iránti elkötelezettséggel rendelkezik. Tudásukat{" "}
                    <strong>korszerű technológiával</strong> ötvözzük a pontos
                    és hatékony kezelések érdekében.
                  </p>
                </div>
              </div>
              <div className="sm:flex gap-20 group">
                <span
                  className="bg-[#58CBF2] size-90 flex items-center justify-center mb-25 relative 
							shadow-[#f05da866_0px_0px_24px_0px] rounded-full"
                >
                  <HeartHandshake className="size-90 p-20 group-hover:[transform:rotate3d(1,1,1,360deg)] duration-500 text-white" />
                </span>
                <div>
                  <h4 className="font-bold xl:text-2.3xl text-2xl pb-7 text-secondary leading-[1.2] font-sora">
                    Páciensközpontú megközelítés
                  </h4>
                  <p className="text-base leading-30 text-gary fobt-normal">
                    Az Ön kényelmét és jólétét helyezzük előtérbe. Az{" "}
                    <strong>azonnali, még aznapi korona eljárásoktól</strong> a
                    kíméletes bölcsességfog-eltávolításig, együttérző
                    személyzetünk elkötelezett amellett, hogy minden látogatása
                    pozitív, <strong>stresszmentes élmény</strong> legyen.
                  </p>
                </div>
              </div>
               
              <Link href="/about-us" className="btn max-xxl:px-30 mt-40">
                <span className="flex gap-10">
                  Foglalj időpontot <ArrowRight size={20} />
                </span>
              </Link>
            </div>
             
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChouseUs2;
