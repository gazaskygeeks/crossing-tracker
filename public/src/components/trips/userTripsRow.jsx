import React from 'react';
import { hashHistory } from 'react-router';
import moment from 'moment';

const UserTripsRow = ({userTrips}) => {
  if(!userTrips){
    return <div>Loading...</div>;
  }

  const arr = userTrips.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });

  const trips = arr.map((trip)=>{
    const date =  new Date(trip.date);
    const Newdate = new Date(date.setTime( date.getTime() + 1 * 86400000 ));

    let show;
    let message;
    if(moment()._d > Newdate){
      show = {visibility: 'hidden'};
      message = 'Expired Trip';
    }else{
      show = {visibility: 'visible'};
      message = '';
    }
    return(
      <div key={trip.trip_id}>
        <ul>
          <li><label>Trip date</label> <span>{trip.date}</span></li>
          <li><label>Time</label> <span>{trip.time}</span></li>
          <li><label>From</label> <span>{trip.location_from}</span></li>
          <li><label>To</label> <span>{trip.location_to}</span></li>
          <li><label>Pickup point</label> <span>{trip.passing_by}</span></li>
          <li>
            <label>Pickup time</label>
            <span>{trip.pass_point_time}</span>
          </li>
          <li>
            <label>Available seats </label>
            <span>{trip.available_seats}</span>
          </li>
        </ul>
        <div className='btn-wrp-right'>
          <p className='error'>{message}</p>
          <button
            style={show}
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
