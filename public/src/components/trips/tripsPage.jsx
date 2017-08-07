import React from 'react';
import { connect } from 'react-redux';
import {getUserTrips} from '../../actions/myTripsActions.js';
import UserTripsSection from './userTripsSection.jsx';
import ExpiredTrips from './expiredTrips.jsx';
import UserJoinedTrips from './userJoinedTrips.jsx';
import { UnjoinTrip } from '../../actions/myTripsActions.js';
import ApproveJoin from '../../actions/approveJoin.js';
import {CancelTrip} from '../../actions/myTripsActions.js';
let msg;

class TripsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MyTrips: true,
      JoinedTrips: false,
      expiredTrips: false,
      message: ''
    };
    this.showMyTrips = this.showMyTrips.bind(this);
    this.showJoinedTrips = this.showJoinedTrips.bind(this);
    this.messageChange = this.messageChange.bind(this);
    this.showExpiredTrips = this.showExpiredTrips.bind(this);
  }

  componentWillMount(){
    this.props.UserTrips();
  }

  messageChange(ev) {
    this.setState({message: ev.target.value});
    const status = ev.target.value.trim();
    if(status.length === 0){
      msg = 'Message is required';
    }else if(status.length > 0){
      msg = '';
    }
  }

  showMyTrips(){
    this.setState(
      {
        MyTrips: true,
        expiredTrips: false,
        JoinedTrips: false
      }
    );

  }

  showJoinedTrips(){
    this.setState(
      {
        MyTrips: false,
        expiredTrips: false,
        JoinedTrips: true
      }
    );
  }

  showExpiredTrips(){
    this.setState(
      {
        MyTrips: false,
        expiredTrips: true,
        JoinedTrips: false
      }
    );
  }
  render() {

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-offset-2 col-md-8 btns-wrp'>
            <button
              className={this.state.MyTrips ?
                'btn btn-default active' : 'btn btn-default' }
              onClick = {
                this.showMyTrips
              }
              >
              Trips I own
            </button>

            <button

              className={this.state.JoinedTrips ?
                'btn btn-default active' : 'btn btn-default' }
              onClick = {
                this.showJoinedTrips
              }
              >
              Trips I've joined
            </button>

            <button
              className={this.state.expiredTrips ?
                'btn btn-default active' : 'btn btn-default' }
              onClick = {
                this.showExpiredTrips
              }
              >
              Expired trips
            </button>
          </div>
          <div className='col-md-offset-2 col-md-8'>
            {this.state.MyTrips ? <UserTripsSection
              userTrips={this.props.GetUserTrips}
              messageChange = {this.messageChange}
              delMessage = {this.state.message}
              CancelTripp = { data => this.props.CancelTripp(data)}
              msg = {msg}
              joinedUsers={this.props.JoinedUsers}
              approveJoin = {data => this.props.DoApproveJoin(data)}
              getUserTrips = {() => this.props.UserTrips()}
              /> : null}

              {this.state.expiredTrips ? <ExpiredTrips
                userTrips={this.props.GetUserTrips}
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
  console.log('store.tripMembers: ',store.userTrips.tripMembers);
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
    },
    CancelTripp: (data) => {
      CancelTrip(data)
    },
  }
}

const userTrips = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsPage)
export default userTrips;
