import React, { useContext } from 'react';
import { GardenContext } from '../contexts/GardenContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1 className="navbar__title">My Garden</h1>
      <p className="navbar__p">Currently you have {books.length} plants ...</p>
    </div>
  );
}

export default Navbar;