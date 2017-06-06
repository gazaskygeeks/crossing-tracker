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
    this.state = {
      MyTrips: true,
      JoinedUsers: false,
      JoinedTrips: false
    };
    this.showMyTrips = this.showMyTrips.bind(this);
    this.showJoinedUsers = this.showJoinedUsers.bind(this);
    this.showJoinedTrips = this.showJoinedTrips.bind(this);
  }

  componentWillMount(){
    this.props.UserTrips();
  }

  showMyTrips(){
    this.setState(
      {
        MyTrips: true,
        JoinedUsers: false,
        JoinedTrips: false
      }
    );

  }

  showJoinedUsers(){
    this.setState(
      {
        MyTrips: false,
        JoinedUsers: true,
        JoinedTrips: false
      }
    );
  }

  showJoinedTrips(){
    this.setState(
      {
        MyTrips: false,
        JoinedUsers: false,
        JoinedTrips: true
      }
    );
  }

  render() {

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3 btns-wrp'>
            <button
              className='btn btn-default'
              onClick = {
                this.showMyTrips
              }
              >
              My trips
            </button>
            <button
              className='btn btn-default'
              onClick = {
                this.showJoinedUsers
              }
              >
              People joined my trips
            </button>

            <button
              className='btn btn-default'
              onClick = {
                this.showJoinedTrips
              }
              >
              Trips I've joined
            </button>
          </div>
          <div className='col-md-8'>
            {this.state.MyTrips ? <UserTripsSection
              userTrips={this.props.GetUserTrips}
              getUserTrips = {() => this.props.UserTrips()}
              /> : null}

            {this.state.JoinedUsers ? <JoinedUsersRow
              joinedUsers={this.props.JoinedUsers}
              approveJoin = {data => this.props.DoApproveJoin(data)}
              getUserTrips = {() => this.props.UserTrips()}
              /> : null}

            {this.state.JoinedTrips ? <UserJoinedTrips
              joinedTrips={this.props.UserJoinedTrips}
              unjoinTrip={id => this.props.unjoinTrip(id)}
              userData={() => this.props.UserTrips()}
              msg={this.props.msg}
              getUserTrips = {() => this.props.UserTrips()}
              /> : null}
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (store) => {
  console.log('stroooo:',store.userTrips);
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
