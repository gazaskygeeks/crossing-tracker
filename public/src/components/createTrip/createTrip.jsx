import React from 'react';
import  createTrip  from '../../actions/createTripsActions.js';
import { connect } from 'react-redux';
import getLocations from '../../actions/getLocationActions';
import SelectLocations from './SelectLocations.jsx';
import Status from '../loading/loading.jsx'
let type='';
let message ='';
let green = '#4ad86a';
let pickupMsg = '';
let seatsMsg = '';
class CreateTrip extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      tripdate: '',
      time: '',
      location_from: '',
      location_to: '',
      passing_by:'',
      pass_point_time:'',
      available_seats: 0
    };
  }

  componentWillMount(){
    this.props.Locations();
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

  changePassingBy(ev) {
    this.setState({passing_by: ev.target.value});
    const status = ev.target.value.trim();
    if(status.length < 3){
      pickupMsg = 'Input should be more than six characters';
      type ='';
    }else if (status.length > 25) {
      pickupMsg = 'Input should be less than twenty characters';
      type ='';
    }else{
      pickupMsg = '';
      type ='';
    }
  }

  changePassingPointTime(ev) {
    this.setState({pass_point_time: ev.target.value});
  }

  changeSeatsAvailable(ev) {
    this.setState({available_seats: ev.target.value});
    const status = ev.target.value.trim();
    if(status < 1){
      seatsMsg = 'Available seats should be at least 1';
      type ='';
    }else{
      seatsMsg = '';
      type ='';
    }
  }
  clickCreateTrip(){
    message ='';
    type = 'spinningBubbles';
    this.props.TripsCreation(this.state)
    this.setState(
      {
        tripdate: '',
        time: '',
        location_from: '',
        location_to: '',
        passing_by:'',
        pass_point_time:'',
        available_seats: 0
      }
    )
  }
  render() {
    if(this.props.createTrip.statusCode === 200){
      message=  'Your Trip Created Successfully';
      type='';
    }
    else if (this.props.createTrip.statusCode === 409){
      message = 'You already Created trip before in this time ';
      type='';

    }else if (this.props.createTrip.statusCode === 400){
      message = 'You should fill in the inputs'
      type='';

    }
    return (
        <section className='trip-create'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-offset-1 col-md-10'>
                <h3 className='heading'>New Trip</h3>
                <span className='caption'>Insert Info about your new trip</span>
                <div className='form'>
                  <div className='form-group'>
                    <label>Trip date</label>
                    <input
                      type='date'
                      value={this.state.tripdate}
                      className='form-control'
                      onChange={this.changeTripDate.bind(this)}
                      />
                  </div>
                  <div className='form-group'>
                    <label>Time</label>
                    <input
                      type='time'
                      value={this.state.time}
                      className='form-control'
                      onChange={this.changeTime.bind(this)}
                      />
                  </div>

                  <SelectLocations
                    label='From'
                    options={this.props.locations}
                    value={this.state.location_from}
                    change={this.changeLocationFrom.bind(this)}
                    />

                  <SelectLocations
                    label='To'
                    options={this.props.locations}
                    value={this.state.location_to}
                    change={this.changeLocationTo.bind(this)}
                    />

                  <div className='form-group'>
                    <label>Pickup point</label>
                    <input
                      type='text'
                      value={this.state.passing_by}
                      className='form-control'
                      onChange={this.changePassingBy.bind(this)}
                      />
                    <p className='error'>{pickupMsg}</p>
                  </div>
                  <div className='form-group'>
                    <label>Pickup Time</label>
                    <input
                      type='time'
                      value={this.state.pass_point_time}
                      className='form-control'
                      onChange={this.changePassingPointTime.bind(this)}
                      />
                  </div>
                  <div className='form-group'>
                    <label>Seats available</label>
                    <input
                      type='number'
                      className='form-control'
                      value={this.state.available_seats}
                      className='form-control'
                      onChange={this.changeSeatsAvailable.bind(this)}
                      />
                    <p className='error'>{seatsMsg}</p>
                  </div>
                  <div className='btn-wrp-right'>
                    <p className='error'>{message}</p>
                    <Status type={type} color={green}/>
                    <button
                      type='submit'
                      className='btn btn-success'
                      onClick={this.clickCreateTrip.bind(this)}
                      >
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
  return {locations: store.locations,
    createTrip: store.createTrip}
}
const mapDispatchToProps = () => {
  return {
    TripsCreation  : (data) => {
      createTrip(data)
    },
    Locations: ()=>{
      getLocations();
    }
  }
}

const TripsCreation = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTrip)
export default TripsCreation;
