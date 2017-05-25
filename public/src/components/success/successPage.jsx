import React from 'react';
class SuccessPage extends React.Component {
  render() {
    return (
      <section className='success'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-offset-2 col-md-8'>
              <div className='message'>
                Your registeration request has been sent successfully!
              </div>
              <p>
                An email will be sent to you as soon as the
                admin approves your request
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default SuccessPage;
