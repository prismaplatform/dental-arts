import GalleryPage from '@/components/gallery/GalleryArea'
import Breadcrumb from '@/components/utils/Breadcrumb'
import React from 'react'

const Gallery = () => {
  return (
     <>
    <Breadcrumb title="Galéria" subtitle="Galéria"/>
    <GalleryPage/>
    </>
  )
}

export default Gallery