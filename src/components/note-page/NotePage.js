/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Header from '../Header';
import NoteMain from './NoteMain';
import NoteSidebar from './NoteSidebar';

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
