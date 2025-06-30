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

const SingleService = ({ slug }) => {
  const service = getServiceBySlug(slug);
  const [openAccordion, setOpenAccordion] = useState(null); // State to manage which accordion item is open

  // If service not found, show not found message
  if (!service) {
    return (
      <section className="xxl:py-120 lg:py-100 md:py-80 py-60">
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            {/* Content */}
            <div className="lg:col-span-8 col-span-12">
              <div className="prose max-w-none">
                <h2 className="pt-20 pb-10 xxl:text-5.2xl xl:text-4.65xl lg:text-3.8xl md:text-3.8xl sm:text-3xl text-2.5xl font-bold font-sora text-secondary">
                  About {service.title}
                </h2>
                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal">
                  {service.fullDescription || service.description}
                </p>
                <h3 className="xxl:text-2.3xl xl:text-2.5xl sm:text-2xl text-xxl max-sm:leading-32 font-bold font-sora text-secondary pt-40 max-xl:pt-30 pb-10">
                  Fluoride Treatments
                </h3>
                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal">
                  Strengthen your enamel and protect your teeth from decay with
                  safe and effective fluoride applications. Dental Sealants A
                  protective coating applied to the chewing surfaces of molars
                  to prevent cavities, especially in children and teenagers Oral
                  Cancer Screenings Early detection of oral cancer can save
                  lives. We conduct thorough screenings during routine exams to
                  ensure your health and safety.
                </p>
                <div className="w-full group xxl:py-50 py-40">
                  <figure className="overflow-hidden">
                    <img
                      src="/assets/img/services-details.jpg"
                      alt="services-details"
                      className="w-full group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500"
                    />
                  </figure>
                </div>
                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal">
                  We provide tailored advice on brushing, flossing, and dietary
                  habits to help you maintain excellent oral hygiene at home.
                  X-Rays and Imaging Advanced digital X-rays help us detect
                  hidden dental issues, such as cavities, bone loss, or impacted
                  teeth, before they cause problems.
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
                  Our experienced team is dedicated to providing you with the
                  highest quality {service.title.toLowerCase()} services. We use
                  the latest technology and techniques to ensure optimal results
                  and patient comfort.
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

                {/* Navigation */}
                <div className="justify-between flex mt-60 bg-[#DCE9F4] p-20 rounded-lg">
                  <Link
                    href="/services"
                    className="font-bold flex items-center gap-20 text-secondary hover:text-primary transition-colors"
                  >
                    <i className="bg-primary xxl:size-60 xl:size-50 size-40 flex items-center justify-center hover:bg-secondary duration-500 rounded-full">
                      <ChevronLeft size={20} className="text-white" />
                    </i>
                    All Services
                  </Link>
                  <Link
                    href="/appointment"
                    className="font-bold flex items-center gap-20 text-secondary hover:text-primary transition-colors"
                  >
                    Book Appointment
                    <i className="bg-primary xxl:size-60 xl:size-50 size-40 flex items-center justify-center hover:bg-secondary duration-500 rounded-full">
                      <ChevronRight size={20} className="text-white" />
                    </i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 col-span-12 max-lg:mt-40">
              <div className="w-full ml-auto xxl:p-50 xl:p-42 sm:p-40 p-30 bg-primary">
                <h3 className="text-white xxl:text-2.3xl sm:text-2xxl text-xl font-semibold sm:pb-30 pb-25 font-sora">
                  Contact Information :
                </h3>
                <ul>
                  <li className="border-b border-[#304F74] pb-20 mb-20">
                    <span className="text-white pb-5 block flex items-center gap-2">
                      <Mail size={16} />
                      Email Address
                    </span>
                    <a
                      className="text-white block font-bold font-sora hover:text-primary duration-500"
                      href="mailto:info123@gmail.com"
                    >
                      info123@gmail.com
                    </a>
                  </li>
                  <li className="border-b border-[#304F74] pb-20 mb-20">
                    <span className="text-white pb-5 block flex items-center gap-2">
                      <Phone size={16} />
                      Contact Us
                    </span>
                    <a
                      className="text-white block font-bold font-sora hover:text-primary duration-500"
                      href="tel:0133542392132"
                    >
                      013 354 213 - 92132
                    </a>
                  </li>
                  <li className="border-b border-[#304F74] pb-20 mb-20">
                    <span className="text-white pb-5 block flex items-center gap-2">
                      <MapPin size={16} />
                      Address
                    </span>
                    <h6 className="text-white block font-bold font-sora">
                      1901 Thornridge Cir. Shiloh
                    </h6>
                  </li>
                  <li>
                    <span className="text-white pb-5 block flex items-center gap-2">
                      <Stethoscope size={16} />
                      Subject
                    </span>
                    <h6 className="text-white block font-bold font-sora">
                      Medical and Dentist
                    </h6>
                  </li>
                </ul>
                <ul className="flex items-center gap-10 xxl:pt-48 pt-42">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook size={18} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/"
                      className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={18} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram size={18} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube size={18} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-sora text-secondary mb-4">
                Related Services
              </h2>
              <p className="text-gary">
                Explore other services that might interest you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <div
                  key={relatedService.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-4">
                    {/* You'll need to update how relatedService.icon is rendered if it's currently an SVG string from Font Awesome. If it's a Lucide icon component, this will work. */}
                    {/* For now, assuming relatedService.icon is a component or a string that can be rendered directly if it's already a Lucide icon */}
                    {relatedService.icon && (
                      <div className="w-12 h-12 text-primary mb-4 flex items-center justify-center">
                        {/* Assuming relatedService.icon is a Lucide React component directly */}
                        {React.createElement(relatedService.icon, { size: 48 })}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-secondary mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-gary text-sm">
                      {relatedService.description}
                    </p>
                  </div>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="text-primary font-bold hover:text-secondary transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleService;