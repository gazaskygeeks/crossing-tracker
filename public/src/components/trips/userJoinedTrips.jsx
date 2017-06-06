import React from 'react';
import UserTripsRow from './JoinedTripsRow.jsx';
const userJoinedTrips = ({joinedTrips, unjoinTrip, userData, msg, getUserTrips}) => {

  if(!joinedTrips){
    return <div>Loading...</div>;
  }

  return (
    <section className='mytrip'>
      <h3 className='heading'>Joined trips</h3>
      <span className='caption'>Joined trips apear here</span>
      <UserTripsRow
        joinedTrips={joinedTrips}
        unjoinTrip={unjoinTrip}
        userData={userData}
        msg={msg}
        getUserTrips = {() => getUserTrips()}
        />
    </section>
  )

}




export default userJoinedTrips;
