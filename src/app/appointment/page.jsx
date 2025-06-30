import Appointment from '@/components/appointment/Appointment'
import Breadcrumb from '@/components/utils/Breadcrumb'

const AppointmentPage = () => {
  return (
  <>
    <Breadcrumb title="Appointment" subtitle="Appointment"/>
    <Appointment/> 
  </>
  )
}

export default AppointmentPage