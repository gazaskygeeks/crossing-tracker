import React from 'react';
import UserTripsRow from './userTripsRow.jsx';
const userTripsSection = (
  {
    userTrips,
    messageChange,
    delMessage,
    CancelTripp,
    msg,
    joinedUsers,
    approveJoin,
    getUserTrips
  }
) => {

  if(!userTrips){
    return <div>Loading...</div>;
  }

  return (
    <section className='mytrip'>
        <UserTripsRow
          userTrips = {userTrips}
          messageChange = {messageChange}
          delMessage = {delMessage}
          CancelTripp = {data => CancelTripp(data)}
          msg ={msg}
          joinedUsers = {joinedUsers}
          approveJoin = { data => approveJoin(data) }
          getUserTrips = {() => getUserTrips()}
          />
    </section>
  )

}




export default userTripsSection;
