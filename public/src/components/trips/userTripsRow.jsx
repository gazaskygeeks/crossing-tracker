import React from 'react';
import { hashHistory } from 'react-router';
import moment from 'moment';

const UserTripsRow = (
  {userTrips, messageChange, delMessage, getUserTrips, CancelTripp, msg}
) => {
  let disabled;
  if(!userTrips){
    return <div>Loading...</div>;
  }
  const arr = userTrips.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });
  if(delMessage.length === 0){
    disabled = 'disabled';
  }else if(delMessage.length > 0){
    disabled = '';
  }
  const trips = arr.map((trip)=>{
    const toggleID = `#myModal${trip.trip_id}`
    const modalID = `myModal${trip.trip_id}`

    return(
      <div key={trip.trip_id}>
        <ul>
          <li><label>Trip date</label> <span>{trip.date}</span></li>
          <li><label>Time</label> <span>{trip.time}</span></li>
          <li><label>From</label> <span>{trip.location_from}</span></li>
          <li><label>To</label> <span>{trip.location_to}</span></li>
          <li><label>Other details</label> <span>{trip.details}</span></li>
          <li>
            <label>Available seats </label>
            <span>{trip.available_seats}</span>
          </li>
        </ul>
        <div className='btn-wrp-right'>
          <button
            type='button'
            className='btn btn-default'
            onClick={
              ()=> hashHistory.push(`updatetrip/${trip.trip_id}`)
            }
            >
            Edit this trip
          </button>
          <button
            type='button'
            className='btn btn-default'
            data-toggle='modal'
            data-target={toggleID}
            >
            Cancel This Trip
          </button>
        </div>
        <div
          className='modal fade'
          id={modalID}
          tabIndex='-1'
          role='dialog'
          aria-labelledby='myModalLabel'
          >
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                </button>
                <h4
                  className='modal-title'
                  id='myModalLabel'
                  >
                  Type a message
                </h4>
              </div>
              <div className='modal-body'>
                <div className='form-group'>
                  <textarea
                    type='text'
                    placeholder='Why do you want to cancel this trip?'
                    className='form-control'
                    rows='5'
                    value={delMessage}
                    onChange={messageChange}
                    >
                  </textarea>
                  <p className='error'>{msg}</p>
                </div>

                <button
                  className='btn btn-danger'
                  data-dismiss='modal'
                  aria-label='Close'
                  disabled={disabled}
                  onClick={
                    () => {
                      CancelTripp({msg: delMessage, trip_id: trip.trip_id}),
                      getUserTrips()
                    }
                  }
                  >
                  Cancel Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      {trips}
    </div>
  )

}




export default UserTripsRow;
