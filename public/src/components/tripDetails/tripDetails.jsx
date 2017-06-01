import React from 'react';
import viewTrip from '../../actions/tripDetailsActions.js';
import joinTrip from '../../actions/joinTripActions.js';
import {connect} from 'react-redux';
import TripSection from './tripSection.jsx';
import UserSection from './userSection.jsx';
import Status from '../loading/loading.jsx';

var type='';
var message='';
var purple = '#794f6c';
class TripDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    {this.props.viewThisTrip(this.props.params.id)}
  }

  joinTripp(){
    message='';
    type = 'spinningBubbles';
    this.props.joinThisTrip({trip_id: this.props.params.id});
  }
  render() {
    message = this.props.joinTrip;
    type='';
    return (
      <div>

        <TripSection trip={this.props.tripDetails}/>

        <UserSection user={this.props.tripDetails}/>

    <div className="btn-wrp-center">
      <p className='error'>{message}</p>
      <Status type={type} color={purple}/>
      <button
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
      joinTrip(id);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TripDetails);
