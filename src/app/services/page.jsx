import ServicesGrid from '@/components/services/ServicesGrid'
import Breadcrumb from '@/components/utils/Breadcrumb'
import React from 'react'

const ServicesPage = () => {
  return (
    <>
    <Breadcrumb title="Services" subtitle="Services"/>
     <ServicesGrid 
        title="Complete Healthcare Solutions"
        subtitle="# Our Expertise"
        showPagination={true}
      />
    </>
  )
}

export default ServicesPage