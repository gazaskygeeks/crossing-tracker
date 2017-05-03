import React from 'react';
import HomeTrips from '../../actions/tripsActions.js';
import { connect } from 'react-redux'
import RegestratedList from './registeredUsers.jsx'
class AdminHome extends React.Component{
  render() {
    return(
      <section className="admin">
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone no.</th>
            <th>Organization</th>
            <th>verification</th>
          </tr>
          <RegestratedList

            />
        </thead>

      </table>
    </div>
  </section>
    );

  }
}
// const mapStateToProps = (store) => {
//   return {tripsList: store.homeTrips}
// }
// const mapDispatchToProps = () => {
//   return {
//     getTrips  : (date) => {
//       HomeTrips(date);
//     }
//   }
// }


// const TripsHomeDisplay = connect(
//   mapStateToProps,
//   mapDispatchToProps)(HomeTrips)
// export default TripsHomeDisplay
export default AdminHome
