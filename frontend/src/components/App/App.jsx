// React core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Login } from 'components';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }

}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Export a redux connected component
export default connect(mapStateToProps)(App);
