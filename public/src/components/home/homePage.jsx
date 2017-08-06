import React from 'react';
import moment from 'moment';
import Calendar from './calendar.jsx';
import TripsHomeDisplay from './tripsSection.jsx';
import HomeTrips from '../../actions/tripsActions.js';
import GetAllTrips from '../../actions/getAllTrips.js';
import GetTripByTime from '../../actions/getTripByTime.js'
import SelectLocations from '../createTrip/SelectLocations.jsx';
import getLocations from '../../actions/getLocationActions';
import search from '../../actions/searchAction.js';
import {connect} from 'react-redux';

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location_from: '',
      location_to: '',
      from: '',
      to: '',
      displayHint : false
    };
    this.cancleSearch = this.cancleSearch.bind(this)
  }
  changeLocationFrom(ev) {
    const index = ev.nativeEvent.target.selectedIndex;
    const text = ev.nativeEvent.target[index].text;
    this.setState({location_from: ev.target.value, from: text});


  }

  changeLocationTo(ev) {
    const index = ev.nativeEvent.target.selectedIndex;
    const text = ev.nativeEvent.target[index].text;
    this.setState({location_to: ev.target.value, to : text});
  }
  handleSearch() {
    this.setState({displayHint : true})
    this.props.Filter({from: this.state.location_from, to: this.state.location_to, date: moment().format('YYYY-MM-DD')})
    this.setState({location_from: '', location_to: ''})
  }
  cancleSearch(){
    this.setState({displayHint : false})
    this.props.getTrips(moment().format('YYYY-MM-DD'));
    this.props.getAllTrips()
  }
  componentWillMount() {
    this.props.Locations();
  }
  render() {

    return (
      <section className='data-wrp'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 calendar'>
              <div className='search-form'>
                <div className='form-group'>
                  <label></label>
                  <SelectLocations label='From' options={this.props.locations} value={this.state.location_from} change={this.changeLocationFrom.bind(this)}/>
                </div>
                <div className='form-group'>
                  <label></label>
                  <SelectLocations label='To' options={this.props.locations} value={this.state.location_to} change={this.changeLocationTo.bind(this)}/>
                </div>
                <button type='submit' className='btn' onClick={this.handleSearch.bind(this)}>
                  Search
                </button>
              </div>
              {this.state.displayHint
                ? <div style={{paddingBottom: '20px'}}>
                    Only showing trips from {this.state.from} to {this.state.to}
                    <button
                      onClick={this.cancleSearch}
                      style={{marginLeft: '10px'}}
                      className='btn btn-danger'
                      >
                      close
                    </button>
                  </div>
                : null
}
              <Calendar {...this.props}/>
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
                <TripsHomeDisplay {...this.props}/>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (store) => {
  return {tripsList: store.homeTrips, allTrips: store.allTrips, locations: store.locations}
}
const mapDispatchToProps = () => {
  return {
    getTrips: (date) => {
      HomeTrips(date);
    },
    getAllTrips: () => {
      GetAllTrips()
    },
    getTripByTime: (id) => {
      GetTripByTime(id)
    },
    Locations: () => {
      getLocations();
    },
    Filter: (data) => {
      search(data)
    }
  }
}
const HomePage = connect(mapStateToProps, mapDispatchToProps)(PageHome)

export default HomePage;
