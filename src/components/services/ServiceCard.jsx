"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12 group">
      <div className="services-section shadow-[0px_0px_15px_0px_rgba(0,0,0,0.07)] relative xxl:p-40 p-30 before:w-full before:h-0 before:bg-primary before:absolute before:bottom-0 before:left-0 group-hover:before:h-full before:duration-500 rounded-lg h-full flex flex-col">
        <div
          className={`${service.bgColor} size-90 flex items-center justify-center mb-25 relative shadow-[0px_0px_24px_0px_rgba(240,93,168,0.4)] rounded-full text-secondary group-hover:text-primary transition-colors duration-500`}
          style={{
            boxShadow: `0px 0px 30px 0px ${service.shadowColorHex}c2`,
          }}
        >
          {IconComponent && <IconComponent size={40} strokeWidth={1} />}
        </div>

        <h4 className="xl:text-xl font-sora text-secondary font-medium leading-[1.2] mb-3">
          <Link
            href={`/services/${service.slug}`}
            className="xxl:text-2xl text-xl font-bold font-sora relative text-secondary group-hover:text-white duration-500 hover:text-primary"
          >
            {service.title}
          </Link>
        </h4>
        <p className="pt-10 pb-20 relative text-base leading-32 text-[#6f6f6f] font-normal group-hover:text-white duration-500 flex-grow">
          {service.description}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="relative font-bold text-secondary font-sora group-hover:text-white duration-500 hover:text-primary inline-flex items-center gap-3 mt-auto"
        >
          Tovább olvasok <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
