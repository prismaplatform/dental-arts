import { getGallery } from "@/app/api/gallery/gallery";
import React from "react";
import GalleryPage from "./GalleryArea";

const ImagesGet = async ({ title, subtitle }) => {
  const gallery = await getGallery();

 
  return <GalleryPage title={title} subtitle={subtitle} images={gallery} />;
};

export default ImagesGet;
