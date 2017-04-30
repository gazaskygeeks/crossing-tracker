import React from 'react';
import  createTrip  from '../../actions/createTripsActions.js';
import { connect } from 'react-redux';
class CreateTrip extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tripdate: '',
      time: '',
      location_from_id: '',
      location_to_id: '',
      passingby:'',
      passpointtime:'',
      seatavailable: ''
    };
  }

  changeTripDate(ev) {
    this.setState({tripdate: ev.target.value});
  }

  changeTime(ev) {
    this.setState({time: ev.target.value});
  }

  changeLocationFrom(ev) {
    this.setState({location_from_id: ev.target.value});
  }

  changeLocationTo(ev) {
    this.setState({location_to_id: ev.target.value});
  }

  changePassingBy(ev) {
    this.setState({passingby: ev.target.value});
  }

  changePassingPointTime(ev) {
    this.setState({passpointtime: ev.target.value});
  }

  changeSeatsAvailable(ev) {
    this.setState({seatavailable: ev.target.value});
  }
  clickCreateTrip(){
    this.props.TripsCreation(this.state)
    this.setState(
      {
        tripdate: '',
        time: '',
        location_from_id: '',
        location_to_id: '',
        passingby:'',
        passpointtime:'',
        seatavailable: ''
      }
    )
  }
  render() {
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
                  <div className='form-group'>
                    <label>From</label>
                    <select
                      value={this.state.location_from_id}
                      className='form-control'
                      onChange={this.changeLocationFrom.bind(this)}
                      >
                      <option
                        disabled='disabled'
                        selected='selected'
                        >
                        From
                      </option>
                      <option value="1">test</option>
                      <option value="2">test</option>
                      <option value="3">test</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>To</label>
                    <select
                      value={this.state.location_to_id}
                      className='form-control'
                      onChange={this.changeLocationTo.bind(this)}
                      >
                      <option
                        disabled='disabled'
                        selected='selected'
                        >
                        To
                      </option>
                      <option value="1">test</option>
                      <option value="2">test</option>
                      <option value="3">test</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Passing by</label>
                    <input
                      type='text'
                      value={this.state.passingby}
                      className='form-control'
                      onChange={this.changePassingBy.bind(this)}
                      />
                  </div>
                  <div className='form-group'>
                    <label>Passingpoint Time</label>changePassingPointTime
                    <input
                      type='time'
                      value={this.state.passpointtime}
                      className='form-control'
                      onChange={this.changePassingPointTime.bind(this)}
                      />
                  </div>
                  <div className='form-group'>
                    <label>Seats available</label>
                    <input
                      type='number'
                      className='form-control'
                      value={this.state.seatavailable}
                      className='form-control'
                      onChange={this.changeSeatsAvailable.bind(this)}
                      />
                  </div>
                  <div className='btn-wrp-right'>
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

const mapDispatchToProps = () => {
  return {
    TripsCreation  : (data) => {
      createTrip(data)
    }
  }
}

const TripsCreation = connect(
  mapDispatchToProps
)(CreateTrip)
export default TripsCreation;
