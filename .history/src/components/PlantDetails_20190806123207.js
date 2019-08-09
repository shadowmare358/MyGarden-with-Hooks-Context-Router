import React, { useContext } from 'react';
import { GardenContext } from '../contexts/GardenContext';


const PlantDetails = ({ plant }) => {
  const { dispatch } = useContext(GardenContext);
  return (
    <li className="plantDetails" onClick={() => dispatch({type: 'REMOVE_PLANT', id: plant.id})}>
      <div className="plantDetails__name">{plant.name}</div>
      <div className="plantDetails__text">{plant.desc}</div>
      <img className="plantDetails__text" src={plant.image} alt="plant"></img>
    </li>
  );
}

export default PlantDetails;