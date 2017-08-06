import React from 'react'
import { hashHistory } from 'react-router';

const joinedTripsRow = ({joinedTrips, unjoinTrip, userData, msg, getUserTrips}) => {
  if(!joinedTrips){
    return <div>Loading...</div>;
  }
  const trips = joinedTrips.map((trip)=>{
    const msgFun = ()=>{
      if(trip.trip_id === userData.trip_id ){
        return {msg}
      }
    }
    return(
      <div key={trip.trip_id}>
        <ul>
          <li><label>Trip date</label> <span>{trip.date}</span></li>
          <li><label>Departure Time</label> <span>{trip.time}</span></li>
          <li><label>Estimated duration (in minutes)</label> <span>{trip.duration}</span></li>
          <li><label>From</label> <span>{trip.location_from}</span></li>
          <li><label>To</label> <span>{trip.location_to}</span></li>
          <li><label>Other Details</label> <span>{trip.details}</span></li>
          <li>
            <label>Available seats</label>
            <span>{trip.available_seats}</span>
          </li>
        </ul>
        <div className='btn-wrp-right'>
          <p className='error'>{msgFun()}</p>
          <button
            type='button'
            className='btn btn-default'
            onClick={
              () => {
                return(
                  unjoinTrip({trip_id: trip.trip_id}),
                  getUserTrips()
                );
              }
            }
            >
            Cancel this ride
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




export default joinedTripsRow;
