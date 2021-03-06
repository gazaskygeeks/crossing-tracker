import React from 'react';
import createTrip from '../../actions/createTripsActions.js';
import {connect} from 'react-redux';
import getLocations from '../../actions/getLocationActions';
import SelectLocations from './SelectLocations.jsx';
import Status from '../loading/loading.jsx';
import {  hashHistory } from 'react-router';
import Store from '../../store/store.js';
import * as types from '../../actions/actionTypes.js';

let type = '',
  message = '',
  green = '#4ad86a',
  seatsMsg = '',
  show = {
    display: 'none'
  },
  durationMsg = ''
class CreateTrip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tripdate: '',
      time: '',
      location_from: '',
      location_to: '',
      details: '',
      available_seats: '',
      duration: ''
    };
  }

  componentWillMount() {
    this.props.Locations();
  }

  changeTripDate(ev) {
    this.setState({tripdate: ev.target.value});
    const status = ev.target.value.trim();
    const date =  new Date(status);
    const Newdate = new Date(date.setTime( date.getTime() + 1 * 86400000 ));
    if(moment()._d > Newdate){
      dateMsg = 'You can\'t create a trip on a previous date/time';
    }else{
      dateMsg = '';
    }
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

  changeSeatsAvailable(ev) {
    this.setState({available_seats: ev.target.value});
    const status = ev.target.value.trim();
    if (status < 1) {
      seatsMsg = 'Available seats should be at least 1';
    } else {
      seatsMsg = '';
    }
  }
  changeDuration(ev) {
    const value = Number(ev.target.value)
    this.setState({duration: ev.target.value})
    if (Number.isInteger(value) === true && value > 0) {
      durationMsg=''
      this.setState({duration: value})
    } else {
      durationMsg = 'Duration should be a positive number'

    }
  }
  clickCreateTrip() {
    message = '';
    type = 'spinningBubbles';
    show = {
      display: 'block'
    };
    this.props.TripsCreation(this.state)
  }
  render() {
    if (this.props.createTrip.statusCode === 200) {
      message = 'Your trip created successfully!';
      type = '';
      show = {
        display: 'none'
      };
      setTimeout(()=>{
        hashHistory.push('/home');
        Store.dispatch({type: types.CREATE_TRIP, payload: {}});
        message = ''
      },1000)

    } else if (this.props.createTrip.statusCode === 409) {
      message = 'You have already created a trip in this time';
      type = '';
      show = {
        display: 'none'
      };
    } else if (this.props.createTrip.statusCode === 400) {
      message = 'You should fill in all the inputs'
      type = '';
      show = {
        display: 'none'
      };

    }
    return (
      <section className='trip-create'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-offset-1 col-md-10'>
              <h3 className='heading'>New trip</h3>
              <span className='caption'>Insert info about your new trip</span>
              <div className='form'>
                <div className='form-group'>
                  <label>Trip date</label>
                  <input type='date' value={this.state.tripdate}
                    className='form-control'
                    onChange={this.changeTripDate.bind(this)}/>
                </div>
                <div className='form-group'>
                  <label>Departure Time</label>
                  <input type='time' name='time' value={this.state.time}
                    className='form-control'
                    onChange={this.changeTime.bind(this)}/>
                </div>
                <div className='form-group'>
                  <label>Estimated duration (in minutes)</label>
                  <input placeholder='e.g. 30' type='text'
                    className='form-control' value={this.state.duration}
                    className='form-control'
                    onChange={this.changeDuration.bind(this)}/>
                  <p className='error'>{durationMsg}</p>
                </div>
                <div className='form-group'>
                  <label>From</label>
                  <SelectLocations label='From' options={this.props.locations}
                    value={this.state.location_from}
                    change={this.changeLocationFrom.bind(this)}/>
                </div>
                <div className='form-group'>
                  <label>To</label>
                  <SelectLocations label='To' options={this.props.locations}
                    value={this.state.location_to}
                    change={this.changeLocationTo.bind(this)}/>
                </div>
                <div className='form-group'>
                  <label>Other details</label>
                  <textarea placeholder="e.g. 'Meet outside the National Hotel"
                    type='text' value={this.state.details}
                    className='form-control'
                    onChange={this.changeDetails.bind(this)}/>
                </div>
                <div className='form-group'>
                  <label>Available seats</label>
                  <input type='number' className='form-control'
                    value={this.state.available_seats}
                    className='form-control'
                    onChange={this.changeSeatsAvailable.bind(this)}/>
                  <p className='error'>{seatsMsg}</p>
                </div>
                <div className='btn-wrp-right'>
                  <p className='error'>{message}</p>
                  <Status type={type} color={green} show={show}/>
                  <button type='submit' className='btn btn-success'
                    onClick={this.clickCreateTrip.bind(this)}>
                    Add this trip
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (store) => {
  return {locations: store.locations, createTrip: store.createTrip}
}
const mapDispatchToProps = () => {
  return {
    TripsCreation: (data) => {
      createTrip(data)
    },
    Locations: () => {
      getLocations();
    }
  }
}

const TripsCreation = connect(mapStateToProps, mapDispatchToProps)(CreateTrip)
export default TripsCreation;
