"use client";

const Painting = () => {
  return (
    <>
      <section className="lg:pt-120 md:pt-80 pt-60 relative section-about-two">
        <div className="container">
          <div className="mb-10 w-full lg:max-w-[50%]">
            <span className="black font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg leading-50 text-primary">
              # Módszereink
            </span>
            <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
              A ragyogó mosolyhoz vezető útja itt kezdődik.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-25 gap-12 md:gap-16 lg:gap-24">
            {/* Bal oldali div */}
            <div
              className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url('/assets/img/paitings/monet-invert.webp')`,
                boxShadow: "0px 0px 30px 0px #735DC3BF",
              }}
            >
              <div className="absolute inset-0 backdrop-blur-[1px]"></div>
              <h2 className="absolute bottom-0 p-32 text-white xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold font-sora leading-[1.2] [text-shadow:_0_0_10px_#00000099]">
                Digitális <br></br> módszerek
              </h2>
            </div>

            {/* Jobb oldali div */}
            <div
              className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url('/assets/img/paitings/monet.webp')`,
                boxShadow: "0px 0px 30px 0px #6AC1E4",
              }}
            >
              <div className="absolute inset-0 backdrop-blur-[1px]"></div>
              <h2 className="absolute bottom-0 p-32 text-white xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold font-sora leading-[1.2] [text-shadow:_0_0_10px_#00000099]">
                Analóg<br></br> módszerek
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Painting;
