/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Header from '../Header';
import MainSection from './MainSection';
import MainSidebar from './MainSidebar';

export default class MainPage extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <MainSidebar />
        <MainSection />
      </div>
    );
  }
}
