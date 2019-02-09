import React, { Component, Fragment } from 'react';
import routes from '../routes';
import Navbar from './navbar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />

        <div className="content">
          {routes()}
        </div>
      </Fragment>
    );
  }
}

export default App
