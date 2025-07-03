'use client'
import React, { useState, useMemo, useEffect } from 'react'
import ServiceCard from './ServiceCard'
import ServicesPagination from './ServicesPagination'
import { servicesData, SERVICES_PER_PAGE } from '../../data/services'

const ServicesGrid = ({
  title = "Szolgáltatásaink",
  subtitle = "# Amit Kínálunk",
  showPagination = true,
  itemsPerPage = SERVICES_PER_PAGE,
  category = null
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  
  // Filter services by category if provided
  const filteredServices = useMemo(() => {
    if (category) {
      return servicesData.filter(service => service.category === category)
    }
    return servicesData
  }, [category])
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedServices = filteredServices.slice(startIndex, startIndex + itemsPerPage)
  
  const handlePageChange = (page) => {
    setCurrentPage(page)
    const sectionElement = document.querySelector('.services-grid-section');
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  return (
    <section className="lg:py-120 md:py-100 sm:py-80 py-60 services-grid-section">
      <div className="container ">
        <div className="text-center mb-60">
          <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-6 block">
            {subtitle}
          </span>
          <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-12 xxl:gap-20 lg:gap-12 gap-8">
          {paginatedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gary text-lg">Nincs találat.</p>
          </div>
        )}
        
        {showPagination && totalPages > 1 && (
          <ServicesPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
        
        {filteredServices.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-gary text-sm">
              Megjelenítve: {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredServices.length)} / {filteredServices.length} szolgáltatás
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesGrid