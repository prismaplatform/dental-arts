"use client";
import { useTranslations } from "next-intl";
import styles from "./style.module.scss";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function TestSection() {
  const t = useTranslations("hero");
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const [firstImageWidth, setFirstImageWidth] = useState(66.66);
  const [secondImageWidth, setSecondImageWidth] = useState(33.33);
  const [isMobile, setIsMobile] = useState(false);

  const reversed = false;
  let xPercent = reversed ? 100 : 0;

  // Mobil ellenőrzés
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const manageMouseMove = (e) => {
    // Ha mobil, ne fusson az animáció
    if (isMobile) return;

    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;
    const firstImagePercent = 66.66 - xPercent * 0.33;
    const secondImagePercent = 33.33 + xPercent * 0.33;

    setFirstImageWidth(firstImagePercent);
    setSecondImageWidth(secondImagePercent);

    if (firstImage.current && secondImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`;
      secondImage.current.style.width = `${secondImagePercent}%`;
    }
  };

  // Dinamikus szövegméret számítása
  const getTextSize = (imageWidth) => {
    if (isMobile) return 1.5; // Kisebb méret mobilon

    const baseSize = 2.5;
    const scaleFactor = imageWidth / 66.66;
    const minScale = 0.6;
    const maxScale = 1.2;
    const scale = Math.max(minScale, Math.min(maxScale, scaleFactor));
    return baseSize * scale;
  };

  // Dinamikus gombméret számítása
  const getButtonSize = (imageWidth) => {
    if (isMobile) return 0.8; // Kisebb gomb mobilon

    const baseSize = 1;
    const scaleFactor = imageWidth / 66.66;
    const minScale = 0.7;
    const maxScale = 1.1;
    const scale = Math.max(minScale, Math.min(maxScale, scaleFactor));
    return baseSize * scale;
  };

  // Dinamikus padding számítása
  const getPadding = (imageWidth) => {
    if (isMobile) return 2; // Kisebb padding mobilon

    const basePadding = 8;
    const scaleFactor = imageWidth / 66.66;
    const minScale = 0.5;
    const maxScale = 1;
    const scale = Math.max(minScale, Math.min(maxScale, scaleFactor));
    return basePadding * scale;
  };

  // Ha mobil, egyszerű grid layout-ot használunk
  if (isMobile) {
    return (
      <section className="lg:pt-120 md:pt-80 pt-60 relative section-about-two">
        <div className="container">
          <div className="mb-10 w-full lg:max-w-[50%]">
            <span className="black font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg leading-50 text-primary">
              {t("dentistryTag")}
            </span>
            <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
              {t("subline")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-25 gap-12 md:gap-16 lg:gap-24">
            {/* Bal oldali div */}
            <div
              className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url('/assets/img/paitings/monet.webp')`,
                boxShadow: "0px 0px 30px 0px #6AC1E4",
              }}
            >
              <div className="absolute inset-0 backdrop-blur-[1px]"></div>
              <div className="absolute bottom-0 p-32">
                <h2 className="text-white xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold font-sora leading-[1.2] [text-shadow:_0_0_10px_#00000099]">
                  {t("analogDentistry")}
                  <br></br> {t("footer")}
                </h2>
                <button
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-medium"
                  style={{
                    fontSize: `1rem`,
                    padding: `0.5rem`,
                    marginTop: `0.5rem`,
                  }}
                >
                  {t("learnMore") || "Tudj meg többet"}
                </button>
              </div>
            </div>

            {/* Jobb oldali div */}
            <div
              className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url('/assets/img/paitings/monet-invert.webp')`,
                boxShadow: "0px 0px 30px 0px #735DC3BF",
              }}
            >
              <div className="absolute inset-0 backdrop-blur-[1px]"></div>
              <div className="absolute bottom-0 p-32">
                <h2 className="text-white xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold font-sora leading-[1.2] [text-shadow:_0_0_10px_#00000099]">
                  {t("digitalDentistry")}
                  <br></br> {t("footer")}
                </h2>
                <button
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-medium"
                  style={{
                    fontSize: `1rem`,
                    padding: `0.5rem`,
                    marginTop: `0.5rem`,
                  }}
                >
                  {t("learnMore") || "Tudj meg többet"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Asztali verzió az eredeti animációval
  return (
    <section className="lg:pt-120 md:pt-80 pt-60 relative section-about-two">
      <div className="">
        <div className="container lg:max-w-[50%]">
          <span className="black font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg leading-50 text-primary">
            {t("dentistryTag")}
          </span>
          <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
            {t("subline")}
          </h2>
        </div>
        <div
          onMouseMove={(e) => {
            manageMouseMove(e);
          }}
          className={styles.double}
        >
          <div ref={firstImage} className={styles.imageContainer}>
            <div className={styles.stretchyWrapper}>
              <Image
                src={`/assets/img/paitings/monet.webp`}
                fill={true}
                alt={"image"}
              />
              <div className="absolute inset-0 backdrop-blur-[1px]"></div>
              <div
                className="absolute bottom-0 text-white font-semibold font-sora leading-[1.2] [text-shadow:_0_0_10px_#00000099]"
                style={{
                  fontSize: `${getTextSize(firstImageWidth) * 1.6}rem`,
                  padding: `${getPadding(firstImageWidth)}rem`,
                }}
              >
                <h2 className="mb-4">
                  {t("analogDentistry")}
                  <br /> {t("footer")}
                </h2>
                <button
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-medium"
                  style={{
                    fontSize: `${getButtonSize(firstImageWidth) * 1.6}rem`,
                    padding: `${getButtonSize(firstImageWidth) * 0.75}rem ${
                      getButtonSize(firstImageWidth) * 1.5
                    }rem`,
                  }}
                >
                  {t("learnMore") || "Tudj meg többet"}
                </button>
              </div>
            </div>
          </div>

          <div ref={secondImage} className={styles.imageContainer}>
            <div className={styles.stretchyWrapper}>
              <Image
                src={`/assets/img/paitings/monet-invert.webp`}
                fill={true}
                alt={"image"}
              />
              <div className="absolute inset-0 backdrop-blur-[1px]"></div>
              <div
                className="absolute bottom-0 right-0 text-white text-right font-semibold font-sora leading-[1.2] [text-shadow:_0_0_10px_#00000099]"
                style={{
                  fontSize: `${getTextSize(secondImageWidth) * 1.6}rem`,
                  padding: `${getPadding(secondImageWidth)}rem`,
                }}
              >
                <h2 className="mb-4">
                  {t("digitalDentistry")}
                  <br /> {t("footer")}
                </h2>
                <button
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-medium"
                  style={{
                    fontSize: `${getButtonSize(secondImageWidth) * 1.6}rem`,
                    padding: `${getButtonSize(secondImageWidth) * 0.75}rem ${
                      getButtonSize(secondImageWidth) * 1.5
                    }rem`,
                  }}
                >
                  {t("learnMore") || "Tudj meg többet"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
