import React from 'react';
import viewTrip from '../../actions/tripDetailsActions.js';
import joinTrip from '../../actions/joinTripActions.js';
import {connect} from 'react-redux';
import TripSection from './tripSection.jsx';
import UserSection from './userSection.jsx';

class TripDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    {this.props.viewThisTrip(this.props.params.id)}
  }

  joinTripp(){
    this.props.joinThisTrip({trip_id: this.props.params.id});
  }
  render() {
    return (
      <div>

        <TripSection trip={this.props.tripDetails}/>

        <UserSection user={this.props.tripDetails}/>

    <div className="btn-wrp-center">
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
  return {tripDetails: store.tripDetails[0]}
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
