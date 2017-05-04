import React from 'react';
import viewTrip from '../../actions/tripDetailsActions.js';
import {connect} from 'react-redux';
import TripSection from './tripSection.jsx';

class TripDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    {this.props.viewThisTrip(this.props.params.id)}
  }


  render() {
    return (
      <div>

        <TripSection trip={this.props.tripDetails}/>

    <section className='trip-details'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-offset-1 col-md-10'>
            <h3 className='heading'>Contact Info</h3>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Trip owner</th>
                  <th>Email</th>
                  <th>Phone no.</th>
                  <th>Skype name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ghada Ibrahim</td>
                  <td>info@info.info</td>
                  <td>04367536</td>
                  <td>test.test</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <div className="btn-wrp-center">
      <button className="btn btn-default">
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
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TripDetails);
