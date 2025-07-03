import ServicesGrid from "@/components/services/ServicesGrid";
import Breadcrumb from "@/components/utils/Breadcrumb";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        title="Szolgáltatások"
        subtitle="Szolgáltatások"
      />
      <ServicesGrid
        title="Professzionális fogászati Szolgáltatások"
        subtitle="# Szolgáltatások"
        showPagination={true}
      />
    </>
  );
};

export default ServicesPage;
