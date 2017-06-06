import React from 'react';
import viewTrip from '../../actions/tripDetailsActions.js';
import joinTripThis from '../../actions/joinTripActions.js';
import {connect} from 'react-redux';
import TripSection from './tripSection.jsx';
import UserSection from './userSection.jsx';
import Status from '../loading/loading.jsx';
import store from '../../store/store';
import moment from 'moment';

class TripDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    {this.props.viewThisTrip(this.props.params.id)}
    store.dispatch({type: 'EMPTY_MESSAE', payload: {}});
  }

  joinTripp(){
    this.props.joinThisTrip({trip_id: this.props.params.id});
  }
  render() {
    let show = {};
    let message = '';

    if(this.props.tripDetails){
      const date =  new Date(this.props.tripDetails.date);
      const Newdate = new Date(date.setTime( date.getTime() + 1 * 86400000 ));
      if(moment()._d > Newdate){
        show = {visibility: 'hidden'};
        message = 'Expired trip!';
      }else{
        show = {visibility: 'visible'};
        message = '';
      }
    }

    return (
      <div>

        <TripSection trip={this.props.tripDetails}/>

        <UserSection user={this.props.tripDetails}/>

        <div className="btn-wrp-center">
          <p className='error'>{this.props.joinTrip}</p>
          <p className='error'>{message}</p>
          <button
            style={show}
            className="btn btn-default"
            onClick={this.joinTripp.bind(this)}
            >
            Join this trip
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    tripDetails: store.tripDetails[0],
    joinTrip: store.joinTrip.msg
  }
}

const mapDispatchToProps = () => {
  return {
    viewThisTrip  : (id) => {
      viewTrip(id);
    },
    joinThisTrip : (id) => {
      joinTripThis(id);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TripDetails);
