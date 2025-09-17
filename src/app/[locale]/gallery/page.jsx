import GalleryPage from "@/components/gallery/GalleryArea";
import Breadcrumb from "@/components/utils/Breadcrumb";
import React from "react";
import { useTranslations } from "next-intl";
import ImagesGet from "@/components/gallery/ImagesGet";
const Gallery = () => {
  const t = useTranslations("galleryPage");
  return (
    <>
      <Breadcrumb title={t("hero.title")} subtitle={t("hero.home")} />
      <ImagesGet title={t("home.title")} subtitle={t("home.subtitle")} />
    </>
  );
};

export default Gallery;
