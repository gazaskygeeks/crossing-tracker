import React from 'react'
import TripRow from './tripRow.jsx';
const TripSection = ({trip}) => {
  if(!trip){
    return <div>Loading...</div>;
  }
  return (
    <section className='trip-details'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-offset-1 col-md-10'>
            <h3 className='heading'>Trip info</h3>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Trip Date</th>
                  <th>Departure Time</th>
                  <th>Estimated duration (in minutes)</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Other details</th>
                  <th>Seats available</th>
                  <th>Organization</th>
                </tr>
              </thead>
                <TripRow trip={trip} />
            </table>
          </div>
        </div>
      </div>
    </section>
  )

}




export default TripSection;
