/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import {
  getNotesForFolder,
  findNote,
  findFolder,
} from './components/notes-helpers';

// import data
import DATA from './DATA';

import './App.css';

// import components
import NoteHomeMain from './components/NoteHomeMain/NoteHomeMain';
import NotePageMain from './components/NotePageMain/NotePageMain';
import NoteHomeNav from './components/NoteHomeNav/NoteHomeNav';
import NotePageNav from './components/NotePageNav/NotePageNav';

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  // mimics an api call to set the state
  componentDidMount() {
    setTimeout(() => this.setState(DATA), 800);
  }

  renderMainRoutes() {
    const { notes } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map((path) => (
          <Route
            exact
            keu={path}
            path={path}
            render={(routerProps) => {
              const { folderId } = routerProps.match.params;
              const notesForFolder = getNotesForFolder(notes, folderId);
              return <NoteHomeMain {...routerProps} notes={notesForFolder} />;
            }}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={(routeProps) => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId);
            return <NotePageMain {...routeProps} note={note} />;
          }}
        />
      </>
    );
  }

  renderNavRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={(routeProps) => {
              const { noteId } = routeProps.match.params;
              const note = findNote(notes, noteId) || {};
              const folder = findFolder(folders, note.folderId);
              return <NotePageNav {...routeProps} folder={folder} />;
            }}
          />
        ))}
      </>
    );
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <nav className="app-nav">{this.renderNavRoutes()}</nav>
        <header>
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <main className="app-main">{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

export default App;
