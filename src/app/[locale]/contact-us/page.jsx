import Form from '@/components/contact/Form'
import Map from '@/components/contact/Map'
import Breadcrumb from '@/components/utils/Breadcrumb'
import React from 'react'
import { useTranslations } from "next-intl";
const page = () => {
    const t = useTranslations("contact");
  return (
    <>
    <Breadcrumb title={t("hero.title")} subtitle={t("hero.home")} />
    <Form/>
    </>
  )
}

export default page