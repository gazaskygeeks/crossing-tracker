// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './templates/header';
class App extends React.Component {
  render() {
    return (
      <div>
          <Header />
          {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};
export default App;
