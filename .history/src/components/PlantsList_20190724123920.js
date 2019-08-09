import React, { useContext } from 'react';
import PlantDetails from './PlantDetails';
import { GardenContext } from '../contexts/GardenContext';

const PlantsList = () => {
  const { garden } = useContext(GardenContext);
  return garden.length ? (
    <div className="book-list">
      <ul>
        {garden.map(plant => {
          return ( <PlantDetails plant={plant} key={plant.id} show={true} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No plants added.</div>
  );
}

export default PlantsList;