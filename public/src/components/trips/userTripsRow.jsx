import React from 'react'
import { hashHistory } from 'react-router';
const UserTripsRow = ({userTrips}) => {
  if(!userTrips){
    return <div>Loading...</div>;
  }
  const trips = userTrips.map((trip)=>{
    return(
      <div key={trip.trip_id} className='col-md-offset-2 col-md-8'>
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
