import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { GardenContext } from '../contexts/GardenContext';

const PlantsList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return ( <BookDetails book={book} key={book.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No plants added.</div>
  );
}

export default PlantsList;