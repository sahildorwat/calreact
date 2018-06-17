class Appointment extends React.Component {
  render() {
    return (
      <div>
        <h3> {this.props.title} </h3>
        <p> {moment(this.props.apt_time).format('MMMM DD YYYY, h:mm:ss a')} </p>
      </div>      	
    )
  }
}