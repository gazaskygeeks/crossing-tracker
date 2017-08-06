import React from 'react';
import moment from 'moment';

const expiredTrips = ({userTrips}) => {
  if(!userTrips){
    return <div>Loading...</div>;
  }

  const trips = userTrips.map((trip)=>{
    const date =  new Date(trip.date);
    const Newdate = new Date(date.setTime( date.getTime() + 1 * 86400000 ));
    if(moment()._d > Newdate){
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
            <p className='error'>Expired Trip</p>
          </div>
        </div>
      );
    }else{
      return <div></div>;
    }
  });
  return (
    <section className='mytrip'>
        <h3 className='heading'>Expired trips</h3>
        <span className='caption'>Expired trips apear here</span>
          {trips}
    </section>
  )

}




export default expiredTrips;
