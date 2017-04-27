import React from 'react';

class CreateTrip extends React.Component{
  render() {
    return (
        <section className='trip-create'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-offset-1 col-md-10'>
                <h3 className='heading'>New Trip</h3>
                <span className='caption'>Insert Info about your new trip</span>
                <div className='form'>
                  <div className='form-group'>
                    <label>Trip date</label>
                    <input type='date' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <label>Time</label>
                    <input type='time' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <label>From</label>
                    <select className='form-control'>
                  <option disabled='disabled' selected='selected'>From</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                </select>
                  </div>
                  <div className='form-group'>
                    <label>To</label>
                    <select className='form-control'>
                      <option disabled='disabled' selected='selected'>
                        To
                      </option>
                      <option>test</option>
                      <option>test</option>
                      <option>test</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Passing by</label>
                    <input type='text' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <label>Passingpoint Time</label>
                    <input type='text' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <label>Seats available</label>
                    <input type='number' className='form-control' />
                  </div>
                  <div className='btn-wrp-right'>
                    <button
                      type='submit'
                      className='btn btn-success'
                      >
                      Add this trip
                    </button>
                    <button type='submit' className='btn btn-default'>
                      Cancel
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default CreateTrip;
