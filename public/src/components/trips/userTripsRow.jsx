import React from 'react'
import { hashHistory } from 'react-router';
const UserTripsRow = (
  {
    userTrips,
    getUserTrips,
    getTrip,
    TripData,
    rowState,
    changeTime,
    changeTripDate,
    changeLocationFrom,
    changeLocationTo,
    changePassingBy,
    changePassingPointTime,
    changeSeatsAvailable,
    UpdateTrip
  }
) => {
  if(!userTrips){
    return <div>Loading...</div>;
  }

  const trips = userTrips.map((trip)=>{
    if(!TripData){
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
              onClick={() => getTrip(trip.trip_id)}
              >
              Edit this trip
            </button>
          </div>
        </div>
      );
    }else if(trip.trip_id === TripData.trip_id ){
      return(
        <div key={trip.trip_id} className='col-md-offset-2 col-md-8'>
          <ul>
            <li>
              <label>Trip date</label>
              <span>
                <input
                type="date"
                className="form-control"
                value={rowState.date}
                onChange={changeTripDate}
                />
              </span>
            </li>
            <li>
              <label>Time</label>
              <span>
                <input
                  type="time"
                  className="form-control"
                  value={rowState.time}
                  onChange={changeTime}
                />
              </span>
            </li>
            <li>
              <label>From</label>
              <span>
                <select
                  className="form-control"
                  value={rowState.location_from}
                  onChange={changeLocationFrom}
                >
                  <option disabled="disabled">From</option>
                  <option value='1'>test</option>
                  <option value='2'>test</option>
                </select>
              </span>
            </li>
            <li>
              <label>To</label>
              <span>
                <select
                  className="form-control"
                  value={rowState.location_to}
                  onChange={changeLocationTo}
                  >
                  <option disabled="disabled">To</option>
                  <option value='1'>test</option>
                  <option value='2'>test</option>
                </select>
              </span>
            </li>
            <li>
              <label>Passing by</label>
              <span>
                <input
                  type="text"
                  className="form-control"
                  value={rowState.passing_by}
                  onChange={changePassingBy}
                />
              </span>
            </li>
            <li>
              <label>Passingpoint time</label>
              <span>
                <input
                  type="time"
                  className="form-control"
                  value={rowState.pass_point_time}
                  onChange={changePassingPointTime}
                />
              </span>
            </li>
            <li>
              <label>Seats available</label>
              <span>
                <input
                  type="number"
                  className="form-control"
                  value={rowState.available_seats}
                  onChange={changeSeatsAvailable}
                />
              </span>
            </li>
          </ul>
          <div className='btn-wrp-right'>
            <button
              type='button'
              className='btn btn-default'
              onClick={
                () => {
                  return(
                    getTrip(0),
                    getUserTrips(),
                    UpdateTrip(Object.assign(rowState, {trip_id: trip.trip_id}))
                  );
                }
              }

              >
              Save Trip
            </button>
          </div>
        </div>
      );
    }else{
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
              onClick={() => getTrip(trip.trip_id)}
              >
              Edit this trip
            </button>
          </div>
        </div>
      );
    }
  });
  return (
    <div>
      {trips}
    </div>
  )

}




export default UserTripsRow;
