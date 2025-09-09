import FeaturedService from "@/components/services/FeaturedService";
import ServicesGrid from "@/components/services/ServicesGrid";
import Breadcrumb from "@/components/utils/Breadcrumb";
import React from "react";
import { useTranslations } from "next-intl";
const ServicesPage = () => {
  const featuredServiceList = {
    id: 1,
    title: "Digitális fogászat",
   
    description:
      " A legmodernebb digitális technológiákkal biztosítjuk a pontos diagnózist és a gyors, kényelmes kezeléseket. Digitális lenyomatvétel, 3D tervezés és esztétikus megoldások – mindent azért, hogy mosolyod a legszebb formáját mutassa.",
    image: "/assets/img/digital-service.png",
   
  };
  const t = useTranslations("servicePage");
  return (
    <>
      <Breadcrumb title={t("hero.title")} subtitle={t("hero.home")} />
      <FeaturedService
        title={t("highlight.title")}
        text1={t("highlight.text1")}
        text2={t("highlight.text2")}
        featuredService={featuredServiceList}
      />
      <ServicesGrid
        title={t("service.title")}
        subtitle={t("service.subtitle")}
        showPagination={true}
      />
    </>
  );
};

export default ServicesPage;
