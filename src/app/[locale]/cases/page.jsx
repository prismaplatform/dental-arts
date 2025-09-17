
import PortfolioComponent from '@/components/cases/PortfolioComponent';
import Breadcrumb from '@/components/utils/Breadcrumb';
import { useLocale, useTranslations } from "next-intl";
import { use } from 'react';
const Cases = () => {
    const t = useTranslations("fall");
    const locale = useLocale();
  return (
    <>
    <Breadcrumb title={t("hero.title")} subtitle={t("hero.home")}/>
    <PortfolioComponent title={t("home.title")} subtitle={t("home.subtitle")} home={t("hero.home")} locale={locale}/>
   
    </>
  )
}

export default Cases