import React from 'react';
import { connect } from 'react-redux';
import {getUserTrips} from '../../actions/myTripsActions.js';
import UserTripsSection from './userTripsSection.jsx';
import UserJoinedTrips from './userJoinedTrips.jsx';
import {UnjoinTrip} from '../../actions/myTripsActions.js';

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
          unjoinTrip={id => this.props.unjoinTrip(id)}
          userData={() => this.props.UserTrips()}
          msg={this.props.msg}
          />
      </div>
    );
  }
}


const mapStateToProps = (store) => {
  return {
    GetUserTrips: store.userTrips.createdTrip,
    UserJoinedTrips: store.userTrips.joinedTrip,
    msg : store.unjoinTrip.msg
  }
}
const mapDispatchToProps = () => {
  return {
    UserTrips: () => {
      getUserTrips()
    },
    unjoinTrip:(id)=>{
      UnjoinTrip(id)
    }
  }
}

const userTrips = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsPage)
export default userTrips;
