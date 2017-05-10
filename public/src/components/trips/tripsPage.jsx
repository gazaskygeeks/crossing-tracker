import React from 'react';
import { connect } from 'react-redux';
import {getUserTrips} from '../../actions/myTripsActions.js';
import UserTripsSection from './userTripsSection.jsx';
import UserJoinedTrips from './userJoinedTrips.jsx';

class TripsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.UserTrips();
  }

  render() {
    return (
      <div>
        <UserTripsSection
          userTrips={this.props.GetUserTrips}
          />
        <UserJoinedTrips
          joinedTrips={this.props.UserJoinedTrips}
          />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('store.userTrips: ',store.userTrips);
  return {
    GetUserTrips: store.userTrips.createdTrip,
    UserJoinedTrips: store.userTrips.joinedTrip,
  }
}
const mapDispatchToProps = () => {
  return {
    UserTrips: () => {
      getUserTrips()
    }
  }
}

const userTrips = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsPage)
export default userTrips;
