import {
  ArrowRight,
  Heart,
  Trophy,
  User2,
  Users
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const WhyChouseUs2 = () => {
  const t = useTranslations("mission");
  const t2 = useTranslations("highlights");
  return (
    <section className="lg:py-120 md:py-80 py-60 relative section-about-two">
      <div className="container">
        <div className="grid grid-cols-12 gap-25">
          {/* Kép rész */}
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
                  className="size-80 p-17 bg-primary rounded-full"
                />
                <img
                  alt="img"
                  src="/assets/img/circle-image.png"
                  className="circle absolute size-auto bg-transparent p-17 mx-auto mt-10 text-center z-[1] animate-fa-spin"
                />
              </div>
            </div>
          </div>

          {/* Szöveges rész */}
          <div className="lg:col-span-6 col-span-12">
            <div className="pb-50 w-[fit-content]">
              <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-6 block">
                {t("title")}
              </span>

              <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-secondary font-sora leading-[1.2]">
                {t("subtitle")}
              </h2>

              <p className="text-base leading-28 text-gary font-normal border-l-3 border-primary pl-27 mt-25">
                {t("content")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
              <div className="flex items-center gap-4 mb-4 md:mb-0 group">
                <User2 className="size-30 text-primary flex-shrink-0 me-10" />{" "}
                <p className="text-base leading-28 text-gary font-normal">
                  {t2("generations")}
                </p>
              </div>

              <div className="flex items-center gap-4 mb-4 md:mb-0 group">
                <Trophy className="size-30 text-primary flex-shrink-0 me-10" />{" "}
                <p className="text-base leading-28 text-gary font-normal">
                  {t2("experience")}
                </p>
              </div>

              <div className="flex items-center gap-4 mb-4 md:mb-0 group">
                <Users className="size-30 text-primary flex-shrink-0 me-10" />{" "}
                <p className="text-base leading-28 text-gary font-normal">
                 {t2("patients")}
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <Heart className="size-30 text-primary flex-shrink-0 me-10" />{" "}
                <p className="text-base leading-28 text-gary font-normal">
                  {t2("familyBusiness")}
                </p>
              </div>
            </div>

            {/* Gomb */}
            <div className="flex justify-end">
              <Link href="/appointment" className="btn max-xxl:px-30 mt-40">
                <span className="flex gap-10">
                  {t2("bookAppointment")} <ArrowRight size={20} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChouseUs2;
