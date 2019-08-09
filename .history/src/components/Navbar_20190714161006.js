import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>My Garden</h1>
      <p>Currently you have {books.length} plants ...</p>
    </div>
  );
}

export default Navbar;