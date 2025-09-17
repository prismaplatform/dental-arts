import { getServices } from '@/app/api/services/route';
import React from 'react';

const ServiceItem = async ({ locale }) => {
  const servicesData = await getServices(locale);
  
  // Extract services array from the API response and limit to 5
  const services = servicesData?.services?.slice(0, 5) || [];
  
  return (
    <>
      {services.map((service) => (
        <li key={service.id} className="pb-16">
          <h5 className="text-white font-sora hover:text-primary duration-500 capitalize">
            {service.title || 'Untitled Service'}
          </h5>
        </li>
      ))}
    </>
  );
};

export default ServiceItem;