import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import HomeTrips from '../../actions/tripsActions.js';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux'
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
    var formatted = moment(this.state.startDate._d).format('YYYY-MM-DD');
    this.props.getTrips(formatted);
  }
  handleChange(date) {
    var formatted = moment(date._d).format('YYYY-MM-DD');
    this.props.getTrips(formatted);
    this.setState({
      startDate: date
    });
  }
  render() {
    return <DatePicker
      inline
      selected={this.state.startDate}
      onChange={this.handleChange}
      />;
  }
}
const mapDispatchToProps = () => {
  return {
    getTrips  : (date) => {
      HomeTrips(date);
    }
  }
}
const calendar = connect(
  mapDispatchToProps
)(Example)

export default calendar;
