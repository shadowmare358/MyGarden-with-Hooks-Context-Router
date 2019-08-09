import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { GardenContext } from '../contexts/GardenContext';

const PlantsList = () => {
  const { garden } = useContext(GardenContext);
  return garden.length ? (
    <div className="book-list">
      <ul>
        {garden.map(book => {
          return ( <BookDetails book={book} key={book.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No plants added.</div>
  );
}

export default PlantsList;