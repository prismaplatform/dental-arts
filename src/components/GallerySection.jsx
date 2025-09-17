import { getGallery } from '@/app/api/gallery/gallery';
import React from 'react'
import Gallery from './homepage/Gallery';

const GallerySection = async () => {
    const gallery = await getGallery();
  return (
    <Gallery images={gallery.slice(0, 4)} />
  )
}

export default GallerySection