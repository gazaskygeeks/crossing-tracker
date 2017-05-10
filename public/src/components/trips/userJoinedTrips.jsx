import React from 'react';
import UserTripsRow from './JoinedTripsRow.jsx';
const userJoinedTrips = ({joinedTrips, unjoinTrip, userData, msg}) => {

  if(!joinedTrips){
    return <div>Loading...</div>;
  }

  return (
    <section className='mytrip'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-offset-2 col-md-8'>
            <h3 className='heading'>Joined Trips</h3>
            <span className='caption'>Joined trips apear here</span>
          </div>
          <UserTripsRow
            joinedTrips={joinedTrips}
            unjoinTrip={unjoinTrip}
            userData={userData}
            msg={msg}
            />
        </div>
      </div>
    </section>
  )

}




export default userJoinedTrips;
