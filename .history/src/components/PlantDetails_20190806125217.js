import React, { useContext } from 'react';
import { GardenContext } from '../contexts/GardenContext';


const PlantDetails = ({ plant }) => {
  const { dispatch } = useContext(GardenContext);
  return (
    <li className="plantsList__item" onClick={() => dispatch({type: 'REMOVE_PLANT', id: plant.id})}>
      <div className="plantList__name">{plant.name}</div>
      <div className="plantList__text">{plant.desc}</div>
      <img className="plantList__img" src={plant.image} alt="plant"></img>
    </li>
  );
}

export default PlantDetails;