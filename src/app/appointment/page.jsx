import Appointment from '@/components/appointment/Appointment'
import Breadcrumb from '@/components/utils/Breadcrumb'

const AppointmentPage = () => {
  return (
  <>
    <Breadcrumb title="Időpontfoglalás" subtitle="Időpontfoglalás"/>
    <Appointment/> 
  </>
  )
}

export default AppointmentPage