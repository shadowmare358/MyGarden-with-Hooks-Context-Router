import React, { useContext } from 'react';
import { GardenContext } from '../contexts/GardenContext';


const PlantDetails = ({ plant },show) => {
  const { dispatch } = useContext(GardenContext);
  return (
    <li onClick={() => dispatch({type: 'REMOVE_PLANT', id: plant.id})}>
      <div className="name">{plant.name}</div>
      <div className="text">{plant.desc}</div>
      <div className="text">Szoł {plant.desc}</div>
      <img src={plant.image} alt="plant"></img>
    </li>
  );
}

export default PlantDetails;