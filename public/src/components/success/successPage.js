import React from 'react';
class SuccessPage extends React.Component {
  render() {
    return (
      <section className="success">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
              <div className="message">
                Your Request to join the trip has been sent successfully!
              </div>
              <p>We will send you an email to notify you that the trip owner has accepted your request</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default SuccessPage;
