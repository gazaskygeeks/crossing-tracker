import React from 'react';
import UserTripsRow from './userTripsRow.jsx';
const userTripsSection = (
  {userTrips, messageChange, delMessage, getUserTrips, CancelTripp, msg}
) => {

  if(!userTrips){
    return <div>Loading...</div>;
  }

  return (
    <section className='mytrip'>
        <h3 className='heading'>Created trips</h3>
        <span className='caption'>Own trips apear here</span>
        <UserTripsRow
          userTrips = {userTrips}
          messageChange = {messageChange}
          delMessage = {delMessage}
          getUserTrips = {() => getUserTrips()}
          CancelTripp = {data => CancelTripp(data)}
          msg ={msg}
          />
    </section>
  )

}




export default userTripsSection;
