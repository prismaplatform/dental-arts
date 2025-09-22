import ServiceComp from "@/components/services/ServiceComp";
import Breadcrumb from "@/components/utils/Breadcrumb";
import { useLocale, useTranslations } from "next-intl";
const ServicesPage = () => {

  const t = useTranslations("servicePage");
  const locale = useLocale();
  const servicePageMessages = {
    services: {
      noResults: t("hero.noResults"),
      showing: t("hero.showing"), 
      of: t("hero.of"),
      service: t("hero.service"),
      services: t("hero.services"),
      from: t("hero.from")
    }
  };
  return (
    <>
      <Breadcrumb title={t("hero.title")} subtitle={t("hero.home")} />
     <ServiceComp title1={t("highlight.title")} text1={t("highlight.text1")} text2={t("highlight.text2")} title={t("service.title")} subtitle={t("service.subtitle")} locale={locale}  messages={servicePageMessages}/>
    </>
  );
};

export default ServicesPage;
