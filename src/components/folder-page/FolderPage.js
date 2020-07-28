/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Header from '../Header';
import FolderMain from './FolderMain';
import FolderSidebar from './FolderSidebar';

export default class FolderPage extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <FolderSidebar />
        <FolderMain />
      </div>
    );
  }
}
