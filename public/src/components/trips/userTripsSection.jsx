import React from 'react'
import UserTripsRow from './userTripsRow.jsx';
const userTripsSection = (
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

  return (
    <section className='mytrip'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-offset-2 col-md-8'>
            <h3 className='heading'>Created Trips</h3>
            <span className='caption'>Own trips apear here</span>
          </div>
          <UserTripsRow
            userTrips = {userTrips}
            getUserTrips = {getUserTrips}
            getTrip = {getTrip}
            TripData = {TripData}
            rowState = {rowState}
            changeTime = {changeTime}
            changeTripDate = {changeTripDate}
            changeLocationFrom = {changeLocationFrom}
            changeLocationTo = {changeLocationTo}
            changePassingBy = {changePassingBy}
            changePassingPointTime = {changePassingPointTime}
            changeSeatsAvailable = {changeSeatsAvailable}
            UpdateTrip = {UpdateTrip}
            />
        </div>
      </div>
    </section>
  )

}




export default userTripsSection;
