import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router';

const HomeTrips = (props) => {
  var trips;
  if (props.tripsList.length === 0) {
    trips = <tr>
              <td colSpan={4}>No Available trips.
                You can create your own here:
                <Link to={'/createtrip/'}>  Create Trip</Link>
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
                  <Link to={`/tripdetails/${item.trip_id}`}>View Trip</Link>
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

const mapStateToProps = (store) => {
  return {tripsList: store.homeTrips}
}

const TripsHomeDisplay = connect(mapStateToProps)(HomeTrips)
export default TripsHomeDisplay
