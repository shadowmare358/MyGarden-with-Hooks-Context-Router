import React, { useContext } from 'react';
import { GardenContext } from '../contexts/GardenContext';


const PlantDetails = ({ plant }) => {
  const { dispatch } = useContext(GardenContext);
  return (
    <li onClick={() => dispatch({type: 'REMOVE_PLANT', id: plant.id})}>
      <div className="name">{plant.title}</div>
      <div className="text">{plant.author}</div>
      <img src={plant.image} alt="plant"></img>
    </li>
  );
}

export default PlantDetails;