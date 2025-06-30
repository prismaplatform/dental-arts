import React from "react";
import Copyrights from "./Copyrights";
import Cta from "./Cta";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <>
      <footer className="lg:pt-120 md:pt-80 pt-60 relative bg-[#DCE9F4]">
        <div className="container">
          <Cta/>
          <div className="lg:py-100 md:py-80 py-60">
            <div className="grid grid-cols-12 gap-25">
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <div className="footre-logo">
                  <a href="index.html">
                    <Image src="/assets/img/logo.svg" alt="logo" width={300} height={80}/>
                  </a>
                  <p className="pt-14 pb-30 text-base leading-30 text-gary font-normal">
                    We are committed to delivering exceptional healthcare with
                    compassion, expertise, and innovation. Our dedicated.
                  </p>
                  <ul className="flex gap-x-10">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                        target="_blank"
                      >
                        <Facebook/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/"
                        className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                        target="_blank"
                      >
                        <Twitter/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                        target="_blank"
                      >
                        <Instagram/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/"
                        className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                        target="_blank"
                      >
                        <Youtube/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <div className="lg:border-l lg:border-[#D8D8D8] xxl:pl-80 xl:pl-50 sm:pl-40 xxl:ml-40 sm:ml-20">
                  <h5 className="font-bold xxl:text-2xxl text-xxl capitalize pb-18 font-sora text-secondary">
                    Link
                  </h5>
                  <ul>
                    <li className="pb-16">
                      <a
                        href="about.html"
                        className="text-secondary font-sora hover:text-primary duration-500 capitalize"
                      >
                        {" "}
                        About Us
                      </a>
                    </li>
                    <li className="pb-16">
                      <a
                        href="services.html"
                        className="text-secondary font-sora hover:text-primary duration-500 capitalize"
                      >
                        Services
                      </a>
                    </li>
                    <li className="pb-16">
                      <a
                        href="services-details.html"
                        className="text-secondary font-sora hover:text-primary duration-500 capitalize"
                      >
                        Services Details
                      </a>
                    </li>
                    <li className="pb-16">
                      <a
                        href="javascript:void(0);"
                        className="text-secondary font-sora hover:text-primary duration-500 capitalize"
                      >
                        Doctors
                      </a>
                    </li>
                    <li>
                      <a
                        href="contact.html"
                        className="text-secondary font-sora hover:text-primary duration-500 capitalize"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <div className="lg:border-l lg:border-[#D8D8D8] xxl:pl-80 xl:pl-50 lg:pl-40 xxl:ml-40 lg:ml-20">
                  <h5 className="font-bold xxl:text-2xxl text-xxl capitalize pb-18 font-sora text-secondary">
                    services
                  </h5>
                  <ul>
                    <li className="pb-16">
                      <a
                        href="services-details.html"
                        className="text-secondary font-sora hover:text-primary duration-500 capitalize"
                      >
                        {" "}
                        Patient Resources
                      </a>
                    </li>
                    <li className="pb-16">
                      <a
                        href="services-details.html"
                        className="text-secondary font-sora hover:text-primary duration-500 capitalize"
                      >
                        Payment Options
                      </a>
                    </li>
                    <li className="pb-16">
                      <a
                        href="services-details.html"
                        className="text-secondary font-sora hover:text-primary duration-500 capitalize"
                      >
                        Telemedicine Portal
                      </a>
                    </li>
                    <li className="pb-16">
                      <a
                        href="services-details.html"
                        className="text-secondary font-sora hover:text-primary duration-500 capitalize"
                      >
                        Insurance Information
                      </a>
                    </li>
                    <li>
                      <a
                        href="appointment.html"
                        className="text-secondary font-sora hover:text-primary duration-500 capitalize"
                      >
                        Appointment Booking
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <div className="lg:border-l lg:border-[#D8D8D8] xxl:pl-70 xl:pl-40 sm:pl-30 xxl:ml-40 sm:ml-20">
                  <h5 className="font-bold xxl:text-2xxl text-xxl capitalize pb-18 font-sora text-secondary">
                    contact uS
                  </h5>
                  <ul>
                    <li className="pb-16">
                      <h6 className="pb-6 capitalize font-urbanist text-secondary text-base font-medium leading-[1.2] flex items-center">
                        <i className="mr-5">
                          <svg
                            width="10"
                            height="12"
                            viewBox="0 0 10 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 3.00075C4.6066 3.00075 4.22204 3.11804 3.89494 3.33778C3.56784 3.55752 3.3129 3.86985 3.16235 4.23527C3.0118 4.6007 2.97241 5.00279 3.04916 5.39072C3.12591 5.77865 3.31535 6.13499 3.59352 6.41467C3.8717 6.69435 4.22611 6.88481 4.61195 6.96198C4.99779 7.03914 5.39773 6.99954 5.76118 6.84818C6.12463 6.69681 6.43528 6.44049 6.65384 6.11162C6.87241 5.78275 6.98906 5.3961 6.98906 5.00058C6.98906 4.47019 6.7795 3.96152 6.40648 3.58648C6.03346 3.21144 5.52753 3.00075 5 3.00075ZM5 6.00049C4.8033 6.00049 4.61102 5.94185 4.44747 5.83197C4.28392 5.7221 4.15645 5.56594 4.08117 5.38323C4.0059 5.20052 3.98621 4.99947 4.02458 4.8055C4.06295 4.61154 4.15767 4.43337 4.29676 4.29353C4.43585 4.15369 4.61306 4.05846 4.80598 4.01988C4.9989 3.98129 5.19886 4.00109 5.38059 4.07678C5.56232 4.15246 5.71764 4.28062 5.82692 4.44505C5.9362 4.60949 5.99453 4.80281 5.99453 5.00058C5.99453 5.26577 5.88975 5.5201 5.70324 5.70762C5.51673 5.89514 5.26377 6.00049 5 6.00049Z"
                              fill="#021935"
                            />
                            <path
                              d="M5 12C4.58128 12.0021 4.16813 11.9034 3.79516 11.712C3.42219 11.5206 3.10025 11.2422 2.85629 10.9001C0.961213 8.27179 0 6.29596 0 5.02707C0 3.69381 0.526784 2.41515 1.46447 1.47239C2.40215 0.529636 3.67392 0 5 0C6.32608 0 7.59785 0.529636 8.53553 1.47239C9.47322 2.41515 10 3.69381 10 5.02707C10 6.29596 9.03879 8.27179 7.14371 10.9001C6.89975 11.2422 6.57781 11.5206 6.20484 11.712C5.83187 11.9034 5.41873 12.0021 5 12ZM5 1.09141C3.96192 1.0926 2.96669 1.50773 2.23266 2.24574C1.49862 2.98375 1.08572 3.98436 1.08453 5.02807C1.08453 6.03298 2.02586 7.89132 3.73446 10.2606C3.87951 10.4615 4.0698 10.625 4.28976 10.7377C4.50973 10.8504 4.75311 10.9092 5 10.9092C5.24689 10.9092 5.49027 10.8504 5.71024 10.7377C5.9302 10.625 6.12049 10.4615 6.26554 10.2606C7.97414 7.89132 8.91547 6.03298 8.91547 5.02807C8.91428 3.98436 8.50138 2.98375 7.76734 2.24574C7.03331 1.50773 6.03808 1.0926 5 1.09141Z"
                              fill="#021935"
                            />
                          </svg>
                        </i>
                        Address
                      </h6>
                      <span className="font-bold font-urbanist text-secondary hover:text-primary duration-500">
                        1901 Thornridge Cir. Shiloh
                      </span>
                    </li>
                    <li className="pb-16">
                      <h6 className="pb-6 capitalize font-urbanist text-secondary text-base font-medium leading-[1.2] flex items-center">
                        <i className="mr-5">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.49103 0.501622C6.49103 0.368796 6.5438 0.24141 6.63772 0.147487C6.73164 0.0535649 6.85902 0.000799798 6.99185 0.000799798C8.31964 0.00225799 9.59264 0.530377 10.5315 1.46929C11.4704 2.40819 11.9985 3.68121 12 5.00903C12 5.14185 11.9472 5.26924 11.8533 5.36316C11.7594 5.45708 11.632 5.50985 11.4992 5.50985C11.3664 5.50985 11.239 5.45708 11.1451 5.36316C11.0511 5.26924 10.9984 5.14185 10.9984 5.00903C10.9972 3.94678 10.5747 2.92838 9.82357 2.17726C9.07246 1.42614 8.05408 1.00364 6.99185 1.00245C6.85902 1.00245 6.73164 0.94968 6.63772 0.855758C6.5438 0.761835 6.49103 0.634449 6.49103 0.501622ZM6.99185 3.00574C7.52314 3.00574 8.03268 3.2168 8.40837 3.59249C8.78405 3.96818 8.99511 4.47772 8.99511 5.00903C8.99511 5.14185 9.04787 5.26924 9.14179 5.36316C9.23571 5.45708 9.3631 5.50985 9.49592 5.50985C9.62875 5.50985 9.75613 5.45708 9.85005 5.36316C9.94397 5.26924 9.99674 5.14185 9.99674 5.00903C9.99594 4.21231 9.6791 3.44846 9.11575 2.88509C8.55239 2.32173 7.78855 2.00489 6.99185 2.00409C6.85902 2.00409 6.73164 2.05686 6.63772 2.15078C6.5438 2.2447 6.49103 2.37209 6.49103 2.50491C6.49103 2.63774 6.5438 2.76513 6.63772 2.85905C6.73164 2.95297 6.85902 3.00574 6.99185 3.00574ZM11.5458 8.38407C11.836 8.67511 11.999 9.06935 11.999 9.48037C11.999 9.89139 11.836 10.2856 11.5458 10.5767L11.09 11.102C6.98834 15.029 -2.99291 5.05009 0.873384 0.935335L1.44932 0.434512C1.74068 0.152387 2.1314 -0.00368303 2.53694 6.60132e-05C2.94249 0.00381505 3.33026 0.167082 3.61635 0.454545C3.63188 0.470071 4.55989 1.67555 4.55989 1.67555C4.83525 1.96484 4.98854 2.34912 4.98788 2.74851C4.98723 3.14791 4.83269 3.53169 4.55638 3.82007L3.97644 4.54927C4.29738 5.32911 4.76926 6.03784 5.36495 6.63474C5.96064 7.23165 6.66841 7.70496 7.44759 8.02748L8.18128 7.44403C8.4697 7.16793 8.85341 7.01357 9.25268 7.01301C9.65194 7.01245 10.0361 7.16573 10.3253 7.44102C10.3253 7.44102 11.5302 8.36854 11.5458 8.38407ZM10.8566 9.11227C10.8566 9.11227 9.65819 8.19025 9.64266 8.17473C9.53949 8.07242 9.40007 8.01502 9.25478 8.01502C9.10949 8.01502 8.97007 8.07242 8.8669 8.17473C8.85338 8.18875 7.84323 8.99357 7.84323 8.99357C7.77516 9.04776 7.69415 9.08327 7.60817 9.09662C7.5222 9.10997 7.43423 9.10069 7.35293 9.0697C6.34352 8.69386 5.42667 8.10548 4.66447 7.3444C3.90228 6.58332 3.31256 5.66732 2.93524 4.65845C2.90179 4.57604 2.89088 4.48621 2.90364 4.39819C2.9164 4.31017 2.95238 4.22714 3.00786 4.15763C3.00786 4.15763 3.81267 3.14697 3.82619 3.13395C3.92849 3.03077 3.98589 2.89136 3.98589 2.74606C3.98589 2.60076 3.92849 2.46135 3.82619 2.35817C3.81067 2.34315 2.88867 1.14368 2.88867 1.14368C2.78394 1.04978 2.64727 0.999488 2.50667 1.00312C2.36606 1.00675 2.23217 1.06403 2.13243 1.16321L1.5565 1.66403C-1.2691 5.06161 7.38048 13.2315 10.3578 10.4179L10.8141 9.89205C10.921 9.79301 10.9852 9.65629 10.9931 9.51077C11.0011 9.36525 10.9521 9.22235 10.8566 9.11227Z"
                              fill="#021935"
                            />
                          </svg>
                        </i>
                        Phone Number
                      </h6>
                      <a
                        className="font-bold font-urbanist text-secondary hover:text-primary duration-500"
                        href="callto:013221392132"
                      >
                        013 354 213 - 92132
                      </a>
                    </li>
                    <li>
                      <h6 className="pb-6 capitalize font-urbanist text-secondary text-base font-medium leading-[1.2] flex items-center">
                        <i className="mr-5">
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.0833 0H2.91667C2.1434 0.000866104 1.40208 0.288481 0.855295 0.799756C0.308514 1.31103 0.00092625 2.00422 0 2.72727L0 9.27273C0.00092625 9.99578 0.308514 10.689 0.855295 11.2002C1.40208 11.7115 2.1434 11.9991 2.91667 12H11.0833C11.8566 11.9991 12.5979 11.7115 13.1447 11.2002C13.6915 10.689 13.9991 9.99578 14 9.27273V2.72727C13.9991 2.00422 13.6915 1.31103 13.1447 0.799756C12.5979 0.288481 11.8566 0.000866104 11.0833 0ZM2.91667 1.09091H11.0833C11.4326 1.09155 11.7737 1.18992 12.0627 1.37335C12.3517 1.55678 12.5754 1.81688 12.705 2.12018L8.23783 6.29782C7.90908 6.60399 7.46399 6.77589 7 6.77589C6.53601 6.77589 6.09092 6.60399 5.76217 6.29782L1.295 2.12018C1.42459 1.81688 1.64827 1.55678 1.93728 1.37335C2.22628 1.18992 2.56738 1.09155 2.91667 1.09091ZM11.0833 10.9091H2.91667C2.45254 10.9091 2.00742 10.7367 1.67923 10.4298C1.35104 10.1229 1.16667 9.70672 1.16667 9.27273V3.54545L4.93733 7.06909C5.48487 7.57978 6.22665 7.86657 7 7.86657C7.77335 7.86657 8.51513 7.57978 9.06267 7.06909L12.8333 3.54545V9.27273C12.8333 9.70672 12.649 10.1229 12.3208 10.4298C11.9926 10.7367 11.5475 10.9091 11.0833 10.9091Z"
                              fill="#021935"
                            />
                          </svg>
                        </i>
                        email Address
                      </h6>
                      <a
                        className="font-bold font-urbanist text-secondary hover:text-primary duration-500"
                        href="mailto:info123@gmail.com"
                      >
                        info123@gmail.com
                      </a>
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
