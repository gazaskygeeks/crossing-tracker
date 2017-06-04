import React from 'react';
import Calendar from './calendar.jsx';
import TripsHomeDisplay from './tripsSection.jsx';
import HomeTrips from '../../actions/tripsActions.js';
import GetAllTrips from '../../actions/getAllTrips.js';
import GetTripByTime from '../../actions/getTripByTime.js'
import {connect} from 'react-redux'

class PageHome extends React.Component {
  render() {
    return (
            <section className='data-wrp'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 calendar'>
                            <Calendar
                              {...this.props}
                            />
                        </div>
                        <div className='col-md-4 details'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <TripsHomeDisplay
                                {...this.props}/>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
    );
  }
}
const mapStateToProps = (store) => {
  return {tripsList: store.homeTrips,
    allTrips : store.allTrips}
}
const mapDispatchToProps = () => {
  return {
    getTrips  : (date) => {
      HomeTrips(date);
    },
    getAllTrips : () =>{
      GetAllTrips()
    },
    getTripByTime : (id) =>{
      GetTripByTime(id)
    }
  }
}
const HomePage = connect(
  mapStateToProps,mapDispatchToProps
)(PageHome)

export default HomePage;
