import React, { useContext } from 'react';
import PlantDetails from './PlantDetails';
import { GardenContext } from '../contexts/GardenContext';

const PlantsList = () => {
  const { garden } = useContext(GardenContext);
  const {show }
  return garden.length ? (
    <div className="book-list">
      <ul>
        {garden.map(plant => {
          return ( <PlantDetails plant={plant} show={true} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No plants added.</div>
  );
}

export default PlantsList;