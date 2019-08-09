import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import 

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <img src="E6A94B58-3203-4FB0-9C64-87E1AD2B9DF9.png" alt="plant"></img>
    </li>
  );
}

export default BookDetails;