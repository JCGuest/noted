import React from 'react';
import '../styles/note.css';

function Note(props) {
  return (
    <div className='note'>
      <ul className='note'>
        <li className='note'>
          <a className='note' href='#' contenteditable>
            <h3 className='note'>Title #1</h3>
            <p className='note'>Text Content #1</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Note;
