import React, { useContext } from 'react';
import { GardenContext } from '../contexts/GardenContext';


const PlantDetails = ({ plant }) => {
  const { dispatch } = useContext(GardenContext);
  return (
    <li className="plantsList__item" onClick={() => dispatch({type: 'REMOVE_PLANT', id: plant.id})}>
      <div className="plantsList__name">{plant.name}</div>
      <div className="plantsList__text">{plant.desc}</div>
      <img className="plantsList__img" src={plant.image} alt="plant"></img>
    </li>
  );
}

export default PlantDetails;