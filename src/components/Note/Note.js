/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Note(props) {
  const { id, name, modified } = props;
  return (
    <div className="note">
      <h2 className="note-title">
        <Link to={`/note/${id}`}>{name}</Link>
      </h2>
      <button className="note-button" type="button">
        Button
      </button>
      <div className="note-dates">
        <div className="note-dates-modified">
          <span>Modified</span>
          <br />
          <span className="date">{modified}</span>
        </div>
      </div>
    </div>
  );
}
