import React from 'react';
import { connect } from 'react-redux';
import {getUserTrips} from '../../actions/myTripsActions.js';
import {UpdateUserTrips} from '../../actions/myTripsActions.js';
import UserTripsSection from './userTripsSection.jsx';
import UserJoinedTrips from './userJoinedTrips.jsx';
import viewTrip from '../../actions/tripDetailsActions.js';

class TripsPage extends React.Component {
  constructor(props) {
    super(props);
    if(!this.props.GetTripByID){
      this.state = {
        trip_id: 0,
        tripdate: '',
        time: '',
        location_from: '',
        location_to: '',
        passing_by:'',
        pass_point_time:'',
        available_seats: 0
      }
    }else{
      this.state = {
        trip_id: this.props.GetTripByID.trip_id,
        tripdate: this.props.GetTripByID.tripdate,
        time: this.props.GetTripByID.time,
        location_from: this.props.GetTripByID.location_from,
        location_to: this.props.GetTripByID.location_to,
        passing_by:this.props.GetTripByID.passing_by,
        pass_point_time:this.props.GetTripByID.pass_point_time,
        available_seats: this.props.GetTripByID.available_seats
      }
    }
  }
  componentWillMount(){
    this.props.UserTrips();
  }
  changeTime(ev) {
    this.setState({time: ev.target.value});
  }

  changeTripDate(ev) {
    this.setState({tripdate: ev.target.value});
  }

  changeLocationFrom(ev) {
    this.setState({location_from: ev.target.value});
  }

  changeLocationTo(ev) {
    this.setState({location_to: ev.target.value});
  }

  changePassingBy(ev) {
    this.setState({passing_by: ev.target.value});
  }

  changePassingPointTime(ev) {
    this.setState({pass_point_time: ev.target.value});
  }

  changeSeatsAvailable(ev) {
    this.setState({available_seats: ev.target.value});
  }

  render() {
    return (
      <div>
        <UserTripsSection
          userTrips={this.props.GetUserTrips}
          getUserTrips={() => this.props.UserTrips()}
          getTrip = {id =>this.props.GetTrip(id)}
          TripData = {this.props.GetTripByID}
          rowState = {this.state}
          changeTime = {this.changeTime.bind(this)}
          changeTripDate = {this.changeTripDate.bind(this)}
          changeLocationFrom = {this.changeLocationFrom.bind(this)}
          changeLocationTo = {this.changeLocationTo.bind(this)}
          changePassingBy = {this.changePassingBy.bind(this)}
          changePassingPointTime = {this.changePassingPointTime.bind(this)}
          changeSeatsAvailable = {this.changeSeatsAvailable.bind(this)}
          UpdateTrip = {data => this.props.UpdateTrip(data)}
          />
        <UserJoinedTrips joinedTrips={this.props.UserJoinedTrips}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => 
  return {
    GetUserTrips: store.userTrips.createdTrip,
    UserJoinedTrips: store.userTrips.joinedTrip,
    GetTripByID: store.tripDetails[0]
  }
}
const mapDispatchToProps = () => {
  return {
    UserTrips: () => {
      getUserTrips()
    },
    GetTrip: (id) => {
      viewTrip(id)
    },
    UpdateTrip: (data) => {
      UpdateUserTrips(data)
    }
  }
}

const userTrips = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsPage)
export default userTrips;
