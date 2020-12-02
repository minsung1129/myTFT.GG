import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/main'
import Search from './pages/topRank'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/about" component={Search} />
      </div>
    );
  }
}

export default App;