import React from 'react';
import SelectLocations from './locationsOptions.jsx';
import { hashHistory } from 'react-router';
const UpdateTrip = (
  {
    userTrip,
    Update,
    changeTripDate,
    changeTime,
    changeLocationFrom,
    changeLocationTo,
    changeDetails,
    changeSeatsAvailable,
    locations,
    id,
    getData,
    seatsMsg,
    GetTripByID
  }
) => {
  function getTheFuckingData() {
    getData();
  }
  if(!userTrip || !GetTripByID){

    return <div>Loading...</div>;
  }else{
    console.log('userTrip: ',userTrip.tripdate);
    getTheFuckingData();
  }

  return(
    <div key={id} className='col-md-offset-2 col-md-8'>
      <ul>
        <li>
          <label>Trip date</label>
          <span>
            <input
            type="date"
            className="form-control"
            value={userTrip.tripdate}
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
              value={userTrip.time}
              onChange={changeTime}
            />
          </span>
        </li>
        <li>
          <label>From</label>
          <SelectLocations
            label='From'
            options={locations}
            value={userTrip.location_from}
            change={changeLocationFrom}
            />
        </li>
        <li>
          <label>To</label>
          <SelectLocations
            label='To'
            options={locations}
            value={userTrip.location_to}
            change={changeLocationTo}
            />
        </li>
        <li>
          <label>Other details</label>
          <span>
            <input
              type="text"
              className="form-control"
              value={userTrip.details}
              onChange={changeDetails}
            />
          </span>
        </li>
        <li>
          <label>Available seats</label>
          <span>
            <input
              type="number"
              className="form-control"
              value={userTrip.available_seats}
              onChange={changeSeatsAvailable}
            />
          </span>
          <p className='error'>{seatsMsg}</p>
        </li>
      </ul>
      <div className='btn-wrp-right'>
        <button
          className='btn btn-default'
          onClick={() => hashHistory.push('trips')}
          >
            Cancel
        </button>
        <button
          type='button'
          className='btn btn-default'
          onClick={
            () => {
              return(
                Update(Object.assign(userTrip, {trip_id: id})),
                hashHistory.push('trips')
              );
            }
          }
          >
          Save Trip
        </button>

      </div>
    </div>
  );

}

export default UpdateTrip;
