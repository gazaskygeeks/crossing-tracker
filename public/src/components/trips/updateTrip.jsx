import React from 'react'
import { connect } from 'react-redux';
import {UpdateUserTrips} from '../../actions/myTripsActions.js';
import getLocations from '../../actions/getLocationActions';
import viewTrip from '../../actions/tripDetailsActions.js';
import UpdateTripRow from './updateTripRow.jsx';
let seatsMsg = '';
class UserTripsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trip_id: 0,
      tripdate: '',
      time: '',
      location_from: '',
      location_to: '',
      details: '',
      available_seats: 0
    }
  }
  test(){
    this.state = {
      trip_id: this.props.GetTripByID.trip_id,
      tripdate: this.props.GetTripByID.date,
      time: this.props.GetTripByID.time,
      location_from: this.props.GetTripByID.location_from_id,
      location_to: this.props.GetTripByID.location_to_id,
      details:this.props.GetTripByID.details,
      available_seats: this.props.GetTripByID.available_seats,
      duration : this.props.GetTripByID.duration
    };
  }
  componentWillMount(){
    this.props.Locations();
    {this.props.viewThisTrip(this.props.params.id)}
  }

  changeTripDate(ev) {
    this.setState({tripdate: ev.target.value});
  }

  changeTime(ev) {
    this.setState({time: ev.target.value});
  }

  changeLocationFrom(ev) {
    this.setState({location_from: ev.target.value});
  }

  changeLocationTo(ev) {
    this.setState({location_to: ev.target.value});
  }

  changeDetails(ev) {
    this.setState({details: ev.target.value});
  }
  changeDuration(ev){
    this.setState({duration: ev.target.value});
  }


  changeSeatsAvailable(ev) {
    this.setState({available_seats: ev.target.value});
    const status = ev.target.value.trim();
    if(status < 1){
      seatsMsg = 'Available seats should be at least 1';
    }else{
      seatsMsg = '';
    }
  }
  render() {
    return (
      <section className='mytrip'>
        <div className='container'>
          <div className='col-md-offset-2 col-md-8'>
            <h3 className='heading'>Created trip</h3>
            <span className='caption'>Update this trip</span>
          </div>
          <UpdateTripRow
            userTrip = {this.state}
            Update = {data => this.props.UpdateTrip(data)}
            changeTripDate = {this.changeTripDate.bind(this)}
            changeTime = {this.changeTime.bind(this)}
            changeLocationFrom = {this.changeLocationFrom.bind(this)}
            changeLocationTo = {this.changeLocationTo.bind(this)}
            changeDetails = {this.changeDetails.bind(this)}
            changeSeatsAvailable = {this.changeSeatsAvailable.bind(this)}
            changeDuration = {this.changeDuration.bind(this)}
            locations = {this.props.locations}
            id={this.props.params.id}
            getData = {this.test.bind(this)}
            seatsMsg = {seatsMsg}
            GetTripByID = {this.props.GetTripByID}
          />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    GetTripByID: store.tripDetails[0],
    locations: store.locations
  }
}
const mapDispatchToProps = () => {
  return {
    UpdateTrip: (data) => {
      UpdateUserTrips(data)
    },
    Locations: ()=>{
      getLocations();
    },
    viewThisTrip  : (id) => {
      viewTrip(id);
    }
  }
}

const UserTripsRows = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTripsRow)

export default UserTripsRows;
