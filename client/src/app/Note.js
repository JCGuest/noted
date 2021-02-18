import React from 'react';
import '../note.css';

function Note(props) {
  return (
    <div className='note'>
      <ul>
        <li>
          <a href='#' contenteditable>
            <h2>Title #1</h2>
            <p>Text Content #1</p>
          </a>
        </li>
        <li>
          <a href='#' contenteditable>
            <h2>Title #2</h2>
            <p>Text Content #2</p>
          </a>
        </li>
        <li>
          <a href='#' contenteditable>
            <h2>Title #3</h2>
            <p>Text Content #3</p>
          </a>
        </li>
        <li>
          <a href='#' contenteditable>
            <h2>Title #4</h2>
            <p>Text Content #4</p>
          </a>
        </li>
        <li>
          <a href='#' contenteditable>
            <h2>Title #5</h2>
            <p>Text Content #5</p>
          </a>
        </li>
        <li>
          <a href='#' contenteditable>
            <h2>Title #6</h2>
            <p>Text Content #6</p>
          </a>
        </li>
        <li>
          <a href='#' contenteditable>
            <h2>Title #7</h2>
            <p>Text Content #7</p>
          </a>
        </li>
        <li>
          <a href='#' contenteditable>
            <h2>Title #8</h2>
            <p>Text Content #8</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Note;
