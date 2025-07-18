import React from "react";
import Link from "next/link";
import Image from "next/image";
import Copyrights from "./Copyrights";
import Cta from "./Cta";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="lg:pt-120 md:pt-80 pt-60 relative bg-[linear-gradient(63.97deg,_#2E003A_-0.01%,_#8000A0_100%)]">
        <div className="container">
          <Cta/>
          <div className="lg:py-100 md:py-80 py-60">
            <div className="grid grid-cols-12 gap-25">
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <div className="footre-logo">
                  <Link href="/">
                    <Image src="/assets/img/logoWhiteFull.svg" alt="logo" width={300} height={80}/>
                  </Link>
                  <p className="pt-14 pb-30 text-white leading-30  font-normal">
                    Elkötelezettek vagyunk a kivételes egészségügyi ellátás iránt, együttérzéssel, szakértelemmel és innovációval. Csapatunk elhivatottan dolgozik az Ön egészségéért.
                  </p>
                  <ul className="flex gap-x-10">
                    <li>
                      <Link
                        href="https://www.facebook.com/"
                        className="flex items-center text-white justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook/>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://x.com/"
                        className="flex items-center text-white justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter/>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/"
                        className="flex items-center text-white justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram/>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.youtube.com/"
                        className="flex items-center text-white justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <div className="lg:border-l lg:border-[#D8D8D8] xxl:pl-40 xl:pl-25 sm:pl-20 xxl:ml-20 sm:ml-10">
                  <h5 className="font-bold xxl:text-2xxl text-xxl capitalize pb-18 font-sora text-white">
                    Hasznos linkek
                  </h5>
                  <ul>
                    <li className="pb-16">
                      <Link
                        href="/about-us"
                        className="text-white font-sora hover:text-primary duration-500 capitalize"
                      >
                        Rólunk
                      </Link>
                    </li>
                    <li className="pb-16">
                      <Link
                        href="/services"
                        className="text-white font-sora hover:text-primary duration-500 capitalize"
                      >
                        Szolgáltatásaink
                      </Link>
                    </li>
                    <li className="pb-16">
                      <Link
                        href="/blog"
                        className="text-white font-sora hover:text-primary duration-500 capitalize"
                      >
                        Esettanulmányok
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us"
                        className="text-white font-sora hover:text-primary duration-500 capitalize"
                      >
                        Kapcsolat
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <div className="lg:border-l lg:border-[#D8D8D8] xxl:pl-40 xl:pl-25 lg:pl-20 xxl:ml-20 lg:ml-10">
                  <h5 className="font-bold xxl:text-2xxl text-xxl capitalize pb-18 font-sora text-white">
                    Szolgáltatások
                  </h5>
                  <ul>
                    <li className="pb-16">
                      <Link
                        href="/services/altalanos-fogaszat"
                        className="text-white font-sora hover:text-primary duration-500 capitalize"
                      >
                        Általános fogászati ellátás
                      </Link>
                    </li>
                    <li className="pb-16">
                      <Link
                        href="/services/esztetikai-fogaszat"
                        className="text-white font-sora hover:text-primary duration-500 capitalize"
                      >
                        Esztétikai fogászat
                      </Link>
                    </li>
                    <li className="pb-16">
                      <Link
                        href="/services/implantatum-fogpotlas"
                        className="text-white font-sora hover:text-primary duration-500 capitalize"
                      >
                        Implantáció és fogpótlás
                      </Link>
                    </li>
                    <li className="pb-16">
                      <Link
                        href="/services/szajsebeszet"
                        className="text-white font-sora hover:text-primary duration-500 capitalize"
                      >
                        Szájsebészet
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/gyermekfogaszat"
                        className="text-white font-sora hover:text-primary duration-500 capitalize"
                      >
                        Gyermekfogászat
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <div className="lg:border-l lg:border-[#D8D8D8] xxl:pl-35 xl:pl-20 sm:pl-15 xxl:ml-20 sm:ml-10">
                  <h5 className="font-bold xxl:text-2xxl text-xxl capitalize pb-18 font-sora text-white">
                    Elérhetőségek
                  </h5>
                  <ul>
                    <li className="pb-16">
                      <h6 className="pb-6 capitalize font-urbanist text-white text-base font-medium leading-[1.2] flex items-center">
                        <MapPin className="mr-5 text-white" size={16}/>
                        Cím
                      </h6>
                      <span className="font-bold font-urbanist text-white hover:text-primary duration-500">
                       Balf, Sopron, Fürdő sor 12, 9494 Magyarország
                      </span>
                    </li>
                    <li className="pb-16">
                      <h6 className="pb-6 capitalize font-urbanist text-white text-base font-medium leading-[1.2] flex items-center">
                        <Phone className="mr-5 text-white" size={16}/>
                        Telefon
                      </h6>
                      <Link
                        className="font-bold font-urbanist text-white hover:text-primary duration-500"
                        href="tel:013354213-92132"
                      >
                        +36 99 531 015
                      </Link>
                    </li>
                    <li>
                      <h6 className="pb-6 capitalize font-urbanist text-white text-base font-medium leading-[1.2] flex items-center">
                        <Mail className="mr-5 text-white" size={16}/>
                        E-mail
                      </h6>
                      <Link
                        className="font-bold font-urbanist text-white hover:text-primary duration-500"
                        href="mailto:info123@gmail.com"
                      >
                        info123@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Copyrights />
        </div>
      </footer>
    </>
  );
};

export default Footer;
