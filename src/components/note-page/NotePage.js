/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Header from '../Header';
import NoteMain from './MainSection';
import NoteSidebar from './MainSidebar';

export default class NotePage extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <NoteMain />
        <NoteSidebar />
      </div>
    );
  }
}
