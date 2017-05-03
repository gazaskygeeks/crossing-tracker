import React from 'react'

const TripRow = ({trip}) => {
  // debugger;
  if(!trip){
    return <div>Loading...</div>;
  }
  return (
        <tbody>
          <tr>
            <td>{trip.date}</td>
            <td>{trip.time}</td>
            <td>{trip.location_from}</td>
            <td>{trip.location_to}</td>
            <td>{trip.passing_by}</td>
            <td>{trip.pass_point_time}</td>
            <td>{trip.available_seats}</td>
            <td>{trip.org_name}</td>
          </tr>
        </tbody>
  )

}




export default TripRow;
