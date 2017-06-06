import React from 'react'
import Loading from 'react-loading'
class Status extends React.Component {
  render() {
    return (

        <div className="Loading" style={this.props.show}>
            <Loading
              type={this.props.type}
              color={this.props.color}
              height='80px' width='80px'
              />
        </div>

    );
  }
}
export default Status;
