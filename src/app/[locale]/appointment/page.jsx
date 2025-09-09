import Appointment from '@/components/appointment/Appointment'
import Breadcrumb from '@/components/utils/Breadcrumb'
import { useTranslations } from "next-intl";

const AppointmentPage = () => {
    const t = useTranslations("contact");
  return (
  <>
    <Breadcrumb title={t("hero.title")} subtitle={t("hero.title")} />
    <Appointment/> 
  </>
  )
}

export default AppointmentPage