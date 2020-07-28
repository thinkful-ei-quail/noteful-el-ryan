/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Noteful</h1>
      </header>
    );
  }
}

export default Header;
