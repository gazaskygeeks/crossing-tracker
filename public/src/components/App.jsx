// This component handles the App template used on every page.
import React,{PropTypes} from 'react';
import Header from './templates/header.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
          <Header
            path = {this.props.location.pathname}
            />
          {this.props.children}
      </div>
    );
  }
}




export default App;
