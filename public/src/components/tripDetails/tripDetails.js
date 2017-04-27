import React from 'react';

class TripDetails extends React.Component {
  render() {
    return (
      <div>
        <section className="trip-details">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <h3 className="heading">Trip Info</h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Trip Date</th>
                  <th>Time</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Passing by</th>
                  <th>Passpoint time</th>
                  <th>Seats available</th>
                  <th>Organization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>16/06/2017</td>
                  <td>8:30</td>
                  <td>Jerusalem</td>
                  <td>EREZ</td>
                  <td>Beit Hanina</td>
                  <td>14:30</td>
                  <td>3</td>
                  <td>Mercy Corps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <section className="trip-details">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <h3 className="heading">Contact Info</h3>
            <table className="table table-bordered">
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
      </div>
    );
  }
}

export default TripDetails;
