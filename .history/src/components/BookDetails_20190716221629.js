import React, { useContext } from 'react';
import { GardenContext } from '../contexts/BookContext';


const PlantDetails = ({ book }) => {
  const { dispatch } = useContext(GardenContext);
  return (
    <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
      <div className="name">{book.title}</div>
      <div className="text">{book.author}</div>
      <img src={book.image} alt="plant"></img>
    </li>
  );
}

export default PlantDetails;