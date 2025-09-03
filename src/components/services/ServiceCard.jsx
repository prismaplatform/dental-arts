"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12 group">
      <div className="services-section shadow-[0px_0px_15px_0px_rgba(0,0,0,0.07)] relative overflow-hidden before:w-full before:h-0 before:bg-gradient-to-t before:from-primary before:to-secondary before:absolute before:bottom-0 before:left-0 group-hover:before:h-full before:duration-500 rounded-xl h-full flex flex-col">
        
        {/* Kép szekció */}
        <div className="relative h-200 overflow-hidden rounded-t-xl">
          <Image
            src={`/assets/img/services/${service.image}`}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 h-200"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div> */}
          
         

          
        </div>

        {/* Tartalom szekció */}
        <div className="xxl:p-40 p-30 flex flex-col flex-grow">
          <div className="flex-grow">
            <h5 className="xxl:text-2xl text-xl font-bold font-sora relative text-secondary group-hover:text-white duration-500 mb-3 leading-tight">
              {service.title}
            </h5>
            
            <p className="relative text-base leading-relaxed text-[#6f6f6f] font-normal group-hover:text-white/90 duration-500 mb-6">
              {service.description}
            </p>
          </div>

          {/* Alsó szekció - ár és gomb */}
          <div className="relative mt-auto pt-6 border-t border-gray-200/70 group-hover:border-white/20 duration-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-sora text-lg font-bold text-secondary group-hover:text-white duration-500">
                  {service.price || '250'} €-tól
                </p>
                {service.duration && (
                  <p className="text-sm text-gray-500 group-hover:text-white/70 duration-500 mt-1">
                    Kezelési idő: {service.duration}
                  </p>
                )}
              </div>
              
              <Link
                href={`/szolgaltatasok/${service.id}`}
                className="inline-flex items-center justify-center w-12 h-12 bg-white/10 group-hover:bg-white/20 backdrop-blur-sm rounded-full text-secondary group-hover:text-white transition-all duration-300 hover:scale-110"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;