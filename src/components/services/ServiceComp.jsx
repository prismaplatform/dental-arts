import React from 'react'
import FeaturedService from './FeaturedService'
import ServicesGrid from './ServicesGrid'
import { getServices } from '@/app/api/services/route';

const ServiceComp = async ({title1, text1, text2, title, subtitle, locale}) => {
  const servicesData = await getServices(locale);
  
  // Extract services array from the API response
  const allServices = servicesData?.services || [];
  
  // Separate featured and regular services
  const featuredService = allServices.find(service => service.is_featured === 1 || service.is_featured === true);
  const regularServices = allServices.filter(service => service.is_featured !== 1 && service.is_featured !== true);
  
  return (
    <>
      <FeaturedService
        title={title1}
        text1={text1}
        text2={text2}
        featuredService={featuredService} // Pass the featured service
      />
      <ServicesGrid
        title={title}
        subtitle={subtitle}
        showPagination={true}
        services={regularServices} // Pass only regular services (non-featured)
      />
    </>
  )
}

export default ServiceComp