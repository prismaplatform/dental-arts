"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "It is generally recommended to visit the dentist every six months for a routine check-up and cleaning. However, your dentist might recommend more frequent visits based on your oral health needs.",
  },
  {
    question: "Do you offer emergency dental services?",
    answer:
      "Yes, we provide prompt care for dental emergencies, including severe toothaches, broken teeth, and dental injuries. Contact us immediately if you need urgent care.",
  },
  {
    question: "How can I improve my oral hygiene at home?",
    answer:
      "To maintain excellent oral hygiene at home, brush your teeth twice a day for two minutes with fluoride toothpaste, floss daily, and use an antiseptic mouthwash. Limiting sugary foods and drinks also helps.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept a wide range of dental insurance plans. Please contact our office with your insurance details, and our team will be happy to verify your coverage and explain your benefits.",
  },
  {
    question: "What should I do if I experience dental anxiety?",
    answer:
      "We understand that dental anxiety is common. Please let our team know about your concerns, and we can discuss various options to help you feel more comfortable, such as sedation dentistry or relaxation techniques.",
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
        <div className="mb-50 w-[fit-content]">
          <span className="black font-sora font-semibold capitalize xxl:text-xxl xl:text-xl sm:text-lg leading-50 text-primary">
            # Testimonials
          </span>
          <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
            Feedback That Inspires?
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
