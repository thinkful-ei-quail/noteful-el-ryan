import React from 'react';
import { NavLink } from 'react-router-dom';
import { countNotesForFolder } from '../notes-helpers';

export default function NoteHomeNav(props) {
  return (
    <div className="note-home-nav">
      <ul className="note-home-nav-list">
        {props.folders.map((folder) => (
          <li key={folder.id}>
            <NavLink
              className="notes-list-nav-folder-link"
              to={`/folder/${folder.id}`}
            >
              <span className="note-list-nav-num-notes">
                {countNotesForFolder(props.notes, folder.id)}
              </span>
              {folder.id}
            </NavLink>
          </li>
        ))}
      </ul>
      <button type="button">A button</button>
    </div>
  );
}
