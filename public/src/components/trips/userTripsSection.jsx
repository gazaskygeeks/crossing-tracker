import React from 'react'
import UserTripsRow from './userTripsRow.jsx';
const userTripsSection = ({userTrips}) => {

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
            />
        </div>
      </div>
    </section>
  )

}




export default userTripsSection;
