import React from 'react'
import {Link} from 'react-router';

const TripsHomeDisplay = (props) => {
  var trips;
  if (props.tripsList.length === 0) {
    trips = <tr>
              <td colSpan={4}>No Available trips.
                You can create your own here:
                <Link to={'/createtrip/'}>  Create trip</Link>
              </td>
           </tr>;
  } else {
    trips = props.tripsList.map(function(item) {
      return (
          <tr>
              <td>{item.time}</td>
              <td>
                  {item.location_from}</td>
              <td>{item.location_to}</td>
              <td>
                  <Link to={`/tripdetails/${item.trip_id}`}>View trip</Link>
              </td>
          </tr>
      )
    })
  }
  return (
        <tbody>
            {trips}
        </tbody>
  )
}
export default TripsHomeDisplay
