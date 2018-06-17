window.Appointments = createReactClass({
   getInitialState: function() {
   return {
		   appointments: this.props.appointments,
		   title: 'Team standup meeting',
		   appt_time: '25 January 2016 9am'
     	 }
    },
  
    handleUserInput: function(obj) {
    	  this.setState(obj);
    },

	handleFormSubmit: function() {
	  var appointment = {title: this.state.title, apt_time: this.state.appt_time}
	  // console.log(appointment)
	  $.ajax({
		  type: "POST", 
		  url: "/appointments",
		  data: {appointment: appointment},
		  success: function(data, textStatus, jqXHR){ this.addNewAppointment(data)}.bind(this),
		  error: function(jqXHR, textStatus, errorThrown){console.log(errorThrown)}
	  });
	},


 
	addNewAppointment: function(appointment) {
	  	var appointments = this.state.appointments.map(appointment => appointment)
	  	appointments.push(appointment);
	  	this.setState({appointments: appointments.sort(function(a,b){
  return new Date(a.appt_time) - new Date(b.appt_time);
})})
	},

	render: function() {
      return (
        <div>
	         <AppointmentForm input_title={this.state.title}
							   input_appt_time={this.state.appt_time}
							   onUserInput={this.handleUserInput}
							   onFormSubmit = { this.handleFormSubmit}
							    />
	          <AppointmentsList appointments={this.state.appointments} />
        </div>
      )
    }

  
})
