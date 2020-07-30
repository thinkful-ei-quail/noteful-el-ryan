/* eslint-disable react/prop-types */
import React from 'react';
import './NoteHomeMain.css';
import Note from '../Note/Note';

export default function NoteHomeMain(props) {
  const { notes } = props;
  return (
    <section className="NoteHomeMain">
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note id={note.id} name={note.name} modified={note.modified} />
          </li>
        ))}
      </ul>
      <button type="button" className="note-home-main-add-note-button">
        Add Note
      </button>
    </section>
  );
}

NoteHomeMain.defaultProps = {
  notes: [],
};
