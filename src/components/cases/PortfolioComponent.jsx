import React from 'react'
import PortfolioAll from './PortfolioAll'
import { getCases } from '@/app/api/cases/route';

const PortfolioComponent = async({title, subtitle, home, locale}) => {
      const casesData = await getCases(locale);
  
  // Extract services array from the API response

  return (
   <>
    <PortfolioAll title={title} subtitle={subtitle} home={home} casesData={casesData}/>
   </>
  )
}

export default PortfolioComponent