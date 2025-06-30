'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ServiceCard = ({ service }) => {
  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12 group">
      <div className="services-section shadow-[0px_0px_15px_0px_rgba(0,0,0,0.07)] relative xxl:p-40 p-30 xxl:m-15 m-10 before:w-full before:h-0 before:bg-primary before:absolute before:bottom-0 before:left-0 group-hover:before:h-full before:duration-500 rounded-lg">
        <div className="group-hover:bg-white size-90 flex items-center justify-center mb-25 relative shadow-[0px_0px_24px_0px_rgba(240,93,168,0.4)] rounded-full bg-white text-secondary group-hover:text-primary transition-colors duration-500">
          <div 
            className="w-120 h-120 flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: service.icon }}
          />
        </div>
        
        <h4 className="xl:text-xl font-sora text-secondary font-medium leading-[1.2] mb-3">
          <Link 
            href={`/services/${service.slug}`} 
            className="xxl:text-2xl text-xl font-bold font-sora relative text-secondary group-hover:text-white duration-500 hover:text-primary"
          >
            {service.title}
          </Link>
        </h4>
        
        <p className="pt-10 pb-20 relative text-base leading-32 text-[#6f6f6f] font-normal group-hover:text-white duration-500">
          {service.description}
        </p>
        
        <Link 
          href={`/services/${service.slug}`} 
          className="relative font-bold text-secondary font-sora group-hover:text-white duration-500 hover:text-primary inline-flex items-center gap-3"
        >
          Read More <ArrowRight size={20} />
          <i className="fa-solid fa-arrow-right text-sm"></i>
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard