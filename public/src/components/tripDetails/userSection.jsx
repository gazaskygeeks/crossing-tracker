import React from 'react';
import UserRow from './userRow.jsx';
const TripSection = ({user}) => {
  if(!user){
    return <div>Loading...</div>;
  }
  return (
    <section className='trip-details'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-offset-1 col-md-10'>
            <h3 className='heading'>Contact Info</h3>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Trip owner</th>
                  <th>Email</th>
                  <th>Phone no.</th>
                </tr>
              </thead>
              <UserRow user={user}/>
            </table>
          </div>
        </div>
      </div>
    </section>
  )

}




export default TripSection;
