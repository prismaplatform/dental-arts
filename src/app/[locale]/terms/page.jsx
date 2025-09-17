import Breadcrumb from '@/components/utils/Breadcrumb'
import TermsText from '@/components/utils/TermsText'
import { useLocale, useTranslations } from "next-intl";

import React from 'react'

const Terms = () => {
   const t = useTranslations("termsPage");
  return (
    <>
     <Breadcrumb title={t("hero.title")} subtitle={t("hero.home")} />
<TermsText/>
    </>
  )
}

export default Terms