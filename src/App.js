/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import data
import DATA from './DATA.json';

// import components
import MainPage from './components/main-page/MainPage';
import FolderPage from './components/folder-page/FolderPage';
import NotePage from './components/note-page/NotePage';

import './App.css';

class App extends Component {
  state = {
    DATA,
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={MainPage} data={DATA} />
          <Route path="/folder" component={FolderPage} />
          <Route path="/note" component={NotePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
