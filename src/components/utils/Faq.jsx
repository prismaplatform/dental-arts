"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Milyen gyakran ajánlott fogorvoshoz járni?",
    answer:
      "Általában félévente javasolt fogorvosi kontrollra és fogtisztításra járni, de egyéni állapotodtól függően ez változhat.",
  },
  {
    question: "Vannak sürgősségi fogászati szolgáltatásaitok?",
    answer:
      "Igen, fogászati sürgősségek esetén, például erős fájdalom vagy fogsérülés esetén is gyors ellátást biztosítunk. Kérjük, haladéktalanul vedd fel velünk a kapcsolatot ilyen esetben.",
  },
  {
    question: "Hogyan javíthatom otthon a szájhigiéniámat?",
    answer:
      "Naponta kétszer moss fogat legalább két percig fluoridos fogkrémmel, használj fogselymet, és alkalmazz szájöblítőt. Kerüld a túlzott cukorfogyasztást is.",
  },
  {
    question: "Milyen biztosításokat fogadtok el?",
    answer:
      "Számos fogászati biztosítást elfogadunk. Kérjük, keresd meg irodánkat biztosítási adataiddal, és segítünk eligazodni a lehetőségeid között.",
  },
  {
    question: "Mit tehetek, ha félek a fogorvostól?",
    answer:
      "Teljesen megértjük a fogászati szorongást. Kérjük, jelezd nekünk, hogy segíthessünk megfelelő relaxációs vagy érzéstelenítési módszerekkel, hogy nyugodtabban érezd magad.",
  },
];

const FAQ = ({
  customFaqData = null,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
}) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  // Use custom FAQ data if provided, otherwise use default
  const faqItems = customFaqData || faqData;

  // Function to toggle accordion item
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="lg:pt-120 md:pt-80 pt-60 relative section-about-two">
      <div className="container">
        <div className="mb-10 w-[fit-content]">
          <span className="black font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg leading-50 text-primary">
            # Gyakran Ismételt Kérdések
          </span>
          <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
        Találd meg válaszainkat
          </h2>
        </div>
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
                  openAccordion === index ? "max-h-screen pb-24" : "max-h-0"
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
      </div>
    </section>
  );
};

export default FAQ;
