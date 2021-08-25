import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

function Book({ category, bookName, Author }) {
  return (
    <div>
      <span>{category}</span>
      <h3>{bookName}</h3>
      <span>{Author}</span>
      <ul>
        <li>
          <Link>Comment</Link>
        </li>
        <li>
          <Link>Remove</Link>
        </li>
        <li>
          <Link>Edit</Link>
        </li>
      </ul>
    </div>
  );
}

export default Book;
