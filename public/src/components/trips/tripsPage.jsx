import React from 'react';

class TripsPage extends React.Component {
  render() {
    return (
      <div>
        <section className='mytrip'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-offset-2 col-md-8'>
            <h3 className='heading'>Created Trips</h3>
            <span className='caption'>Own trips apear here</span>
            <ul>
              <li><label>Trip date</label> <span>16/06/2017</span></li>
              <li><label>Time</label> <span>8:30</span></li>
              <li><label>From</label> <span>Jerusalem</span></li>
              <li><label>To</label> <span>EREZ</span></li>
              <li><label>Passing by</label> <span>Beit Hanina</span></li>
              <li><label>Passingpoint time</label> <span>14:30</span></li>
              <li><label>Seats available</label> <span>3</span></li>
              <li><label>Organization</label> <span>Mercy Corps</span></li>
              <li><label>Email</label> <span>info@info.info</span></li>
              <li><label>Phone no.</label> <span>23457890</span></li>
              <li><label>Skype name</label> <span>test.test</span></li>
            </ul>
            <div className='btn-wrp-right'>
              <button
                type='button'
                className='btn btn-default'
                >
                Edit this trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='mytrip'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-offset-2 col-md-8'>
            <h3 className='heading'>Joined Trips</h3>
            <span className='caption'>Joined trips apear here</span>
            <ul>
              <li><label>Trip date</label> <span>16/06/2017</span></li>
              <li><label>Time</label> <span>8:30</span></li>
              <li><label>From</label> <span>Jerusalem</span></li>
              <li><label>To</label> <span>EREZ</span></li>
              <li><label>Passing by</label> <span>Beit Hanina</span></li>
              <li><label>Passingpoint time</label> <span>14:30</span></li>
              <li><label>Seats available</label> <span>3</span></li>
              <li><label>Organization</label> <span>Mercy Corps</span></li>
              <li><label>Trip owner</label> <span>Ghada Ibrahim</span></li>
              <li><label>Email</label> <span>info@info.info</span></li>
              <li><label>Phone no.</label> <span>23457890</span></li>
              <li><label>Skype name</label> <span>test.test</span></li>
              <li><label>Status</label> <span>Confirmed</span></li>
            </ul>
            <div className='btn-wrp-right'>
              <button
                type='button'
                className='btn btn-default'
                >
                Invite friends
              </button>
              <button
                type='button'
                className='btn btn-default'
                >
                Add to calender
              </button>
              <button
                type='button'
                className='btn btn-default'
                >
                Cancel this ride
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    );
  }
}

export default TripsPage;
