import React, { useContext, useState  } from 'react';
import PlantDetails from './PlantDetails';
import { GardenContext } from '../contexts/GardenContext';

const PlantsList = () => {
  const { garden } = useContext(GardenContext);
  const {show } = useState(true);
  return garden.length ? (
    <div className="plantsList">
      <ul className="plantsList__list">
        {garden.map(plant => {
          return ( <PlantDetails plant={plant} show={show} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No plants added.</div>
  );
}

export default PlantsList;