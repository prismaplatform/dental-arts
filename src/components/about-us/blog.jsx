import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, User, MessageSquare } from 'lucide-react'; // Importáltuk a User és MessageSquare ikonokat is

const BlogSlider = () => {
  return (
    <>
      <section className="relative lg:pb-120 md:pb-80 pb-60 section-blog">
        <div className="container">
          <div className="row items-center max-sm:ml-0">
            <div className="sm:w-2/3 w-full max-md:px-0">
              <div className="sm:pb-50 pb-20 w-[fit-content]">
                <span className="pb-10 block font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary"># blog</span>
                <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-secondary font-sora leading-[1.2]">Orvosi Blogunk.</h2>
              </div>
            </div>
            <div className="sm:w-1/3 w-full max-md:px-0">
              <div className="sm:float-right max-sm:mb-30">
                <Link href="/blog" className="btn">
                  <span>
                    Összes Blog
                    <ArrowRight className="inline-block ml-2" size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-25">
            {/* Blog Bejegyzés 1 */}
            <div className="lg:col-span-4 col-span-12">
              <div className="relative group">
                <div className="relative">
                  <figure className="overflow-hidden mb-20">
                    <Image
                      src="/assets/img/blog-one-1.jpg"
                      alt="Egészséges étkezés és mozgás"
                      width={600}
                      height={400}
                      layout="responsive"
                      className="group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500 max-lg:w-full"
                    />
                  </figure>
                  <h6 className="text-secondary font-sora font-bold">
                    <Link href="/blog/hogyan-tartsuk-egyensulyban-az-etrendet-es-a-mozgast" className="absolute xxl:text-[33px] text-lg leading-25 max-xxl:size-90 size-110 rounded-full text-center xl:p-32 p-20 text-bold right-10 top-10 shadow-[0px_7px_31px_-6px_rgba(0,0,0,0.15)] font-sora group-hover:bg-primary group-hover:text-white duration-500 text-secondary bg-white">
                      15 <span className="text-2sm text-primary group-hover:text-white duration-500">Április</span>
                    </Link>
                  </h6>
                </div>
                <div className="inline mr-16">
                  <Link href="/blog/hogyan-tartsuk-egyensulyban-az-etrendet-es-a-mozgast" className="text-gary inline-flex items-center gap-x-7 font-sora max-xxl:text-2sm max-xl:text-sm hover:text-primary duration-500">
                    <User className="-translate-y-2" size={15} /> {/* Lucide User ikon */}
                    Admin
                  </Link>
                </div>

                <div className="mr-0 inline">
                  <Link href="/blog/hogyan-tartsuk-egyensulyban-az-etrendet-es-a-mozgast" className="text-gary inline-flex items-center gap-7 font-sora max-xxl:text-2sm max-xl:text-sm hover:text-primary duration-500">
                    <MessageSquare className="-translate-y-0.5" size={15} /> {/* Lucide MessageSquare ikon */}
                    02 Hozzászólás
                  </Link>
                </div>
                <h3 className="xxl:text-2xl xl:text-xxl text-xl leading-34 font-bold pb-20 pt-10 text-secondary font-sora hover:text-primary duration-500">
                  <Link href="/blog/hogyan-tartsuk-egyensulyban-az-etrendet-es-a-mozgast">Hogyan tartsuk egyensúlyban az étrendet és a mozgást.</Link>
                </h3>
                <Link href="/blog/hogyan-tartsuk-egyensulyban-az-etrendet-es-a-mozgast" className="btn two">
                  <span>
                    Tovább olvasok
                    <ArrowRight className="inline-block ml-2" size={16} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Blog Bejegyzés 2 */}
            <div className="lg:col-span-4 col-span-12">
              <div className="relative group">
                <div className="relative">
                  <figure className="overflow-hidden mb-20">
                    <Image
                      src="/assets/img/blog-one-2.jpg"
                      alt="Stressz és szorongás kezelése"
                      width={600}
                      height={400}
                      layout="responsive"
                      className="group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500 max-lg:w-full"
                    />
                  </figure>
                  <h6 className="text-secondary font-sora font-bold">
                    <Link href="/blog/stressz-es-szorongas-kezelesi-strategiai" className="absolute xxl:text-[33px] text-lg leading-25 max-xxl:size-90 size-110 rounded-full text-center xl:p-32 p-20 text-bold right-10 top-10 shadow-[0px_7px_31px_-6px_rgba(0,0,0,0.15)] font-sora group-hover:bg-primary group-hover:text-white duration-500 text-secondary bg-white">
                      15 <span className="text-2sm text-primary group-hover:text-white duration-500">Április</span>
                    </Link>
                  </h6>
                </div>
                <div className="inline mr-16">
                  <Link href="/blog/stressz-es-szorongas-kezelesi-strategiai" className="text-gary inline-flex items-center gap-x-7 font-sora max-xxl:text-2sm max-xl:text-sm hover:text-primary duration-500">
                    <User className="-translate-y-2" size={15} />
                    Admin
                  </Link>
                </div>

                <div className="mr-0 inline">
                  <Link href="/blog/stressz-es-szorongas-kezelesi-strategiai" className="text-gary inline-flex items-center gap-7 font-sora max-xxl:text-2sm max-xl:text-sm hover:text-primary duration-500">
                    <MessageSquare className="-translate-y-0.5" size={15} />
                    02 Hozzászólás
                  </Link>
                </div>
                <h3 className="xxl:text-2xl xl:text-xxl text-xl leading-34 font-bold pb-20 pt-10 text-secondary font-sora hover:text-primary duration-500">
                  <Link href="/blog/stressz-es-szorongas-kezelesi-strategiai">Stressz, szorongás és depresszió kezelési stratégiái.</Link>
                </h3>
                <Link href="/blog/stressz-es-szorongas-kezelesi-strategiai" className="btn two">
                  <span>
                    Tovább olvasok
                    <ArrowRight className="inline-block ml-2" size={16} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Blog Bejegyzés 3 */}
            <div className="lg:col-span-4 col-span-12">
              <div className="relative group">
                <div className="relative">
                  <figure className="overflow-hidden mb-20">
                    <Image
                      src="/assets/img/blog-one-3.jpg"
                      alt="Legújabb orvosi technológiák"
                      width={600}
                      height={400}
                      layout="responsive"
                      className="group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500 max-lg:w-full"
                    />
                  </figure>
                  <h6 className="text-secondary font-sora font-bold">
                    <Link href="/blog/legujabb-orvosi-technologiak-es-kezelesek" className="absolute xxl:text-[33px] text-lg leading-25 max-xxl:size-90 size-110 rounded-full text-center xl:p-32 p-20 text-bold right-10 top-10 shadow-[0px_7px_31px_-6px_rgba(0,0,0,0.15)] font-sora group-hover:bg-primary group-hover:text-white duration-500 text-secondary bg-white">
                      15 <span className="text-2sm text-primary group-hover:text-white duration-500">Április</span>
                    </Link>
                  </h6>
                </div>
                <div className="inline mr-16">
                  <Link href="/blog/legujabb-orvosi-technologiak-es-kezelesek" className="text-gary inline-flex items-center gap-x-7 font-sora max-xxl:text-2sm max-xl:text-sm hover:text-primary duration-500">
                    <User className="-translate-y-2" size={15} />
                    Admin
                  </Link>
                </div>

                <div className="mr-0 inline">
                  <Link href="/blog/legujabb-orvosi-technologiak-es-kezelesek" className="text-gary inline-flex items-center gap-7 font-sora max-xxl:text-2sm max-xl:text-sm hover:text-primary duration-500">
                    <MessageSquare className="-translate-y-0.5" size={15} />
                    02 Hozzászólás
                  </Link>
                </div>
                <h3 className="xxl:text-2xl xl:text-xxl text-xl leading-34 font-bold pb-20 pt-10 text-secondary font-sora hover:text-primary duration-500">
                  <Link href="/blog/legujabb-orvosi-technologiak-es-kezelesek">Elérhető legújabb orvosi technológiák és kezelések.</Link>
                </h3>
                <Link href="/blog/legujabb-orvosi-technologiak-es-kezelesek" className="btn two">
                  <span>
                    Tovább olvasok
                    <ArrowRight className="inline-block ml-2" size={16} />
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

export default BlogSlider;