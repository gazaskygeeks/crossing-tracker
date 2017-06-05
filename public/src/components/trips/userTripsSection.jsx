import React from 'react'
import UserTripsRow from './userTripsRow.jsx';
const userTripsSection = ({userTrips}) => {

  if(!userTrips){
    return <div>Loading...</div>;
  }

  return (
    <section className='mytrip'>
        <h3 className='heading'>Created trips</h3>
        <span className='caption'>Own trips apear here</span>
        <UserTripsRow
          userTrips = {userTrips}
          />
    </section>
  )

}




export default userTripsSection;
