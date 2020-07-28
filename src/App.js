/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

// import data
import DATA from './DATA.json';

// import components
import Header from './components/Header';
import MainPage from './components/main-page/MainPage';

import './App.css';

class App extends Component {
  state = {
    DATA,
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={MainPage} data={DATA} />
      </div>
    );
  }
}

export default App;
