import PortfolioAll from '@/components/cases/PortfolioAll'

import Breadcrumb from '@/components/utils/Breadcrumb'
import React from 'react'
import { useTranslations } from "next-intl";
const Cases = () => {
    const t = useTranslations("fall");
  return (
    <>
    <Breadcrumb title={t("hero.title")} subtitle={t("hero.home")}/>
    <PortfolioAll title={t("home.title")} subtitle={t("home.subtitle")} home={t("hero.home")}/>
    </>
  )
}

export default Cases