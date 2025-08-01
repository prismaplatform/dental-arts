"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  servicesData,
  getServiceBySlug,
  getServicesByCategory,
} from "../../data/services";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
  Twitter,
  Youtube,
  Plus, // Import Plus icon for accordion closed state
  Minus, // Import Minus icon for accordion open state
  ChevronLeft, // For "All Services" navigation
  ChevronRight, // For "Book Appointment" navigation
  CheckCircle, // For features list
} from "lucide-react";

// Dummy FAQ data for demonstration
const faqData = [
  {
    question: "Milyen gyakran érdemes foghigiéniai kezelést végeztetni?",
    answer:
      "Általában félévente javasolt részt venni professzionális fogtisztításon, de ha Ön hajlamos a fogkőképződésre vagy ínygyulladásra, akkor gyakoribb kezelés is indokolt lehet.",
  },
  {
    question: "Fájdalmas a fogkőeltávolítás?",
    answer:
      "A fogkőeltávolítás legtöbbször fájdalommentes, de enyhe érzékenység előfordulhat. Szükség esetén érzéstelenítést alkalmazunk, hogy a beavatkozás minél kényelmesebb legyen.",
  },
  {
    question: "Mennyi ideig tart egy fogtisztítás?",
    answer:
      "A kezelés általában 30–60 percig tart, a fogkő mennyiségétől és a páciens egyéni állapotától függően.",
  },
  {
    question: "Kell-e külön készülnöm a kezelésre?",
    answer:
      "Nem szükséges külön előkészület. Javasoljuk, hogy érkezés előtt mosson fogat, és jelezze, ha bármilyen panaszt vagy érzékenységet tapasztal.",
  },
  {
    question: "Gyerekeknek is ajánlott a foghigiéniai kezelés?",
    answer:
      "Igen, a gyermekek számára is fontos a rendszeres professzionális tisztítás, főként a maradó fogak megjelenése után. A kezelés segít megelőzni a szuvasodást és kialakítani a helyes szájápolási szokásokat.",
  },
];

const SingleService = ({ slug }) => {
  const service = getServiceBySlug(slug);
  const [openAccordion, setOpenAccordion] = useState(null); // State to manage which accordion item is open

  // If service not found, show not found message
  if (!service) {
    return (
      <section className="xxl:py-120 lg:py-100 md:py-80 py-60">
        <div className="container ">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Service Not Found
            </h2>
            <p className="text-gary mb-8">
              The service you're looking for doesn't exist.
            </p>
            <Link
              href="/services"
              className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-secondary transition-colors duration-300"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Get related services (same category, excluding current service)
  const relatedServices = getServicesByCategory(service.category)
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  // Function to toggle accordion item
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      {/* Main Content */}
      <section className="xxl:py-120 lg:py-100 md:py-80 py-60">
        <div className="container ">
          <div className="grid grid-cols-12 gap-8">
            {/* Content */}
            <div className="lg:col-span-8 col-span-12">
              <div className="prose max-w-none">
                <h2 className="pt-20 pb-10 xxl:text-5.2xl xl:text-4.65xl lg:text-3.8xl md:text-3.8xl sm:text-3xl text-2.5xl font-bold font-sora text-secondary">
                  {service.title}
                </h2>
                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal">
                  {service.fullDescription || service.description}
                </p>
                <h3 className="xxl:text-2.3xl xl:text-2.5xl sm:text-2xl text-xxl max-sm:leading-32 font-bold font-sora text-secondary pt-40 max-xl:pt-30 pb-10">
                  Foghigiéniai kezelés
                </h3>
                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal">
                  A rendszeres foghigiéniai kezelések elengedhetetlenek az
                  egészséges és esztétikus mosoly megőrzéséhez. Klinikánkon
                  professzionális fogtisztítást végzünk, amely során ultrahangos
                  eszközzel eltávolítjuk a fogkövet és lepedéket, csökkentve
                  ezzel a fogínygyulladás és a fogszuvasodás kockázatát.
                </p>
                <div className="w-full group xxl:py-50 py-40">
                  <figure className="overflow-hidden">
                    <img
                      src="/assets/img/services-details.jpg"
                      alt="foghigiéniai kezelés"
                      className="w-full group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500"
                    />
                  </figure>
                </div>
                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal">
                  A kezelés során személyre szabott tanácsokat adunk az otthoni
                  szájápolási szokásairól is, beleértve a helyes fogmosási
                  technikákat, a fogselyem és szájvíz használatát, valamint a
                  táplálkozási ajánlásokat.
                </p>

                {/* Service Image */}
                {service.image && (
                  <div className="w-full group xxl:py-50 py-40">
                    <figure className="overflow-hidden rounded-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={400}
                        className="w-full group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500"
                      />
                    </figure>
                  </div>
                )}

                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal mb-8">
                  Tapasztalt csapatunk elkötelezett amellett, hogy a legmagasabb
                  szintű foghigiéniai kezelést nyújtsa Önnek. A legmodernebb
                  technológiákat és eljárásokat alkalmazzuk a hatékony
                  eredmények és a páciensek kényelme érdekében.
                </p>

                {/* FAQ Section */}
                <div className="accordion xxl:pt-50 pt-40 xxl:pb-25 pb-15">
                  {faqData.map((item, index) => (
                    <div
                      key={index}
                      className={`accordion-item ${
                        openAccordion === index ? "active" : ""
                      }`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(index);
                        }}
                        className="heading block capitalize text-secondary font-bold text-2xl relative duration-500 w-full py-4"
                      >
                        <div className="icon block absolute top-1/2 -translate-y-1/2 right-0 duration-500">
                          {openAccordion === index ? (
                            <Minus size={24} className="text-primary" />
                          ) : (
                            <Plus size={24} className="text-primary" />
                          )}
                        </div>
                        <div className="title pr-10">{item.question}</div>
                      </a>

                      <div
                        className={`content overflow-hidden transition-all duration-300 ease-in-out ${
                          openAccordion === index
                            ? "max-h-screen pb-24"
                            : "max-h-0"
                        }`}
                        style={{
                          display: openAccordion === index ? "block" : "none", // This line can be removed if using max-h for transition
                        }}
                      >
                        <p className="xxl:text-lg text-sm font-medium text-gary xxl:leading-30 xl:leading-28 leading-26">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="justify-between flex mt-60 bg-[#DCE9F4] p-20 rounded-lg">
                  <Link
                    href="/services"
                    className="font-bold flex items-center gap-20 text-secondary hover:text-primary transition-colors"
                  >
                    <i className="bg-primary xxl:size-60 xl:size-50 size-40 flex items-center justify-center hover:bg-secondary duration-500 rounded-full">
                      <ChevronLeft size={20} className="text-white" />
                    </i>
                    Összes szolgáltatás
                  </Link>
                  <Link
                    href="/appointment"
                    className="font-bold flex items-center gap-20 text-secondary hover:text-primary transition-colors"
                  >
                    Időpontfoglalás
                    <i className="bg-primary xxl:size-60 xl:size-50 size-40 flex items-center justify-center hover:bg-secondary duration-500 rounded-full">
                      <ChevronRight size={20} className="text-white" />
                    </i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 col-span-12 max-lg:mt-40">
              <div className="w-full ml-auto xxl:p-50 xl:p-42 sm:p-40 p-30 bg-primary">
                <h3 className="text-white xxl:text-2.3xl sm:text-2xxl text-xl font-semibold sm:pb-30 pb-25 font-sora">
                  Kapcsolati adatok:
                </h3>
                <ul>
                  <li className="border-b border-[#304F74] pb-20 mb-20">
                    <span className="text-white pb-5 block flex items-center gap-2">
                      <Mail size={16} />
                      E-mail cím
                    </span>
                    <Link
                      className="text-white block font-bold font-sora hover:text-primary duration-500"
                      href="mailto:info@dentalarts.hu"
                    >
                      info@dentalarts.hu
                    </Link>
                  </li>
                  <li className="border-b border-[#304F74] pb-20 mb-20">
                    <span className="text-white pb-5 block flex items-center gap-2">
                      <Phone size={16} />
                      Telefonszám
                    </span>
                    <Link
                      className="text-white block font-bold font-sora hover:text-primary duration-500"
                      href="tel:0133542392132"
                    >
                      (+36) 99 531 015
                    </Link>
                  </li>
                  <li className="border-b border-[#304F74] pb-20 mb-20">
                    <span className="text-white pb-5 block flex items-center gap-2">
                      <MapPin size={16} />
                      Cím
                    </span>
                    <h6 className="text-white block font-bold font-sora">
                      Balf, Sopron, Fürdő sor 12, 9494 Magyarország
                    </h6>
                  </li>
                  <li>
                    <span className="text-white pb-5 block flex items-center gap-2">
                      <Stethoscope size={16} />
                      Szakterület
                    </span>
                    <h6 className="text-white block font-bold font-sora">
                      Orvosi és fogászati ellátás
                    </h6>
                  </li>
                </ul>
                <ul className="flex items-center gap-10 xxl:pt-48 pt-42">
                  <li>
                    <Link
                      href="https://www.facebook.com/"
                      className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook size={18} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com/"
                      className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={18} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/"
                      className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram size={18} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/"
                      className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube size={18} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleService;
