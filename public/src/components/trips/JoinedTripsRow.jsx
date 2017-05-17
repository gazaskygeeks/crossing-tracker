import React from 'react'

const joinedTripsRow = ({joinedTrips, unjoinTrip, userData, msg}) => {
  if(!joinedTrips){
    return <div>Loading...</div>;
  }
console.log('userData: ',userData);
  const trips = joinedTrips.map((trip)=>{
    const msgFun = ()=>{
      if(trip.trip_id === userData.trip_id ){
        return {msg}
      }
    }
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
          <p className='error'>{msgFun()}</p>
          <button
            type='button'
            className='btn btn-default'
            onClick={
              () => {
                return(
                  unjoinTrip({trip_id: trip.trip_id})
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
