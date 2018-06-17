class AppointmentsList extends React.Component {
  render() {
     var appointments=this.props.appointments.map(appointment => {
    			return ( <Appointment key={appointment.id}
    									title= { appointment.title}
    								  apt_time = {appointment.apt_time} />	    		
    				  )
    		})
    return appointments
  }
}