import React from 'react';
import { connect } from 'react-redux';
import {getUserTrips} from '../../actions/myTripsActions.js';
import UserTripsSection from './userTripsSection.jsx';
import UserJoinedTrips from './userJoinedTrips.jsx';
import {UnjoinTrip} from '../../actions/myTripsActions.js';
import JoinedUsersRow from './joinedUsersRow.jsx';
import ApproveJoin from '../../actions/approveJoin.js';

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
        <JoinedUsersRow
          joinedUsers={this.props.JoinedUsers}
          approveJoin = {data => this.props.DoApproveJoin(data)}
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
  console.log('stroooo:',store);
  console.log('store.aprroveJoin: ',store.userTrips.joinedTrip);
  return {
    GetUserTrips: store.userTrips.createdTrip,
    UserJoinedTrips: store.userTrips.joinedTrip,
    JoinedUsers: store.userTrips.tripMembers,
    aprroveJoin: store.aprroveJoin,
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
    },
    DoApproveJoin: (data) => {
      ApproveJoin(data)
    }
  }
}

const userTrips = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsPage)
export default userTrips;
