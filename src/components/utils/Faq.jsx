"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

const FAQ = ({ faq }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  // Function to toggle accordion item
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const t = useTranslations("faq");
  return (
    <section className="lg:pt-120 md:pt-80 pt-60 relative section-about-two">
      <div className="container">
        <div className="mb-10 w-[fit-content]">
          <span className="black font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg leading-50 text-primary">
            {t("title")}
          </span>
          <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
            {t("subtitle")}
          </h2>
        </div>
        <div className="accordion xxl:pt-50 pt-40 xxl:pb-25 pb-15">
          {faq.faqs.map((item, index) => (
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
