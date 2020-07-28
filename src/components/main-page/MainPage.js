/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Header from '../Header';
import MainSection from './MainSection';
import MainSidebar from './MainSidebar';

import './MainPage.css';

export default class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="app">
          <div className="main">
            <MainSidebar />
            <MainSection />
          </div>
        </div>
      </>
    );
  }
}
