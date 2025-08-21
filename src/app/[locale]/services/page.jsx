import FeaturedService from "@/components/services/FeaturedService";
import ServicesGrid from "@/components/services/ServicesGrid";
import Breadcrumb from "@/components/utils/Breadcrumb";
import React from "react";

const ServicesPage = () => {
   const featuredService = {
    id: 1,
    title: "Invisalign Fogszabályozás",
    subtitle: "Láthatatlan fogszabályozás",
    description: "A legmodernebb fogszabályozási technológia, amely láthatatlan sínek segítségével egyenesíti ki a fogakat. Kényelmes, esztétikus és hatékony megoldás minden korosztály számára. Egyéni kezelési terv alapján, digitális tervezéssel.",
    image: "/assets/img/services/invisalign-hero.jpg",
    price: "1200",
    duration: "8-18 hónap",
    bgGradient: "from-blue-500 to-purple-600"
  };
  return (
    <>
      <Breadcrumb
        title="Szolgáltatások"
        subtitle="Szolgáltatások"
      />
       <FeaturedService featuredService={featuredService} />
      <ServicesGrid
        title="Professzionális fogászati Szolgáltatások"
        subtitle="# Szolgáltatások"
        showPagination={true}
      />
    </>
  );
};

export default ServicesPage;
