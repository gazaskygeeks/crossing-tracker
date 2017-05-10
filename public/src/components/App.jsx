// This component handles the App template used on every page.
import React,{PropTypes} from 'react';
import Header from './templates/header.jsx';
import {connect} from 'react-redux';
class App extends React.Component {
  render() {
    return (
      <div>
          <Header
            logedIn={this.props.userLoged}
            path = {this.props.location.pathname}
            />
          {this.props.children}
      </div>
    );
  }
}


const mapStateToProps = (store) => {
  return {userLoged: store.signin}
}

const app = connect(
 mapStateToProps
)(App)

export default app;
