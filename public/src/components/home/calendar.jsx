import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    BigCalendar.momentLocalizer(moment);
    this.props.getTrips(moment().format('YYYY-MM-DD'));
    this.props.getAllTrips()
  }
  handleChange(date) {
    var formatted = moment(date).format('YYYY-MM-DD');
    this.props.getTrips(formatted);
  }
  render() {
    var events = this.props.allTrips.map(item => (Object.assign({}, {
      title: item.time,
      start: item.date,
      end: item.date
    })))
    return (<BigCalendar
      style={{height: '420px'}}
      culture='en-GB'
      views={['month']}
      onNavigate={this.handleChange}
      popup='true'
      events={events}/>);
  }
}
export default Calendar;
