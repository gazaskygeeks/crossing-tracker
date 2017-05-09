import React from 'react'

const joinedTripsRow = ({joinedTrips}) => {
  if(!joinedTrips){
    return <div>Loading...</div>;
  }
  const trips = joinedTrips.map((trip)=>{
    return(
      <div key={trip.trip_id} className='col-md-offset-2 col-md-8'>
        <ul>
          <li><label>Trip date</label> <span>{trip.date}</span></li>
          <li><label>Time</label> <span>{trip.time}</span></li>
          <li><label>From</label> <span>{trip.location_from}</span></li>
          <li><label>To</label> <span>{trip.location_to}</span></li>
          <li><label>Passing by</label> <span>{trip.passing_by}</span></li>
          <li>
            <label>Passingpoint time</label>
            <span>{trip.pass_point_time}</span>

            </li>
          <li>
            <label>Seats available</label>
            <span>{trip.available_seats}</span>
          </li>
        </ul>
        <div className='btn-wrp-right'>
          <button
            type='button'
            className='btn btn-default'
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
