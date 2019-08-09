import React, { useContext, useState } from 'react';
import PlantDetails from './PlantDetails';

import { GardenContext } from '../contexts/GardenContext';


const MainPage = () => {
    const { garden } = useContext(GardenContext);
    const [irrigation,setIrr] = useState('');
    return garden.length ? (
        <div className="mainPage">
          <h1 className="mainPage__header">Plants list</h1>
          <ul className="mainList">
             {garden.map(plant => {
              return (
              <>
              <li className="mainList__item">
              <div className="mainList__name">{plant.name}</div>
              <div className="mainList__desc">{plant.desc}</div>
              <img className="mainList__image" src={plant.image} alt="plant"></img>
              <div className="mainList__inputs">
                <p className="mainList__inputs__name">{plant.irrigation}</p>
              <input className="mainList__input" type="text"/>
              <p className="mainList__inputs__name">fertilization</p>
              <input className="mainList__input" type="text"/>
              <p className="mainList__inputs__name">weeding</p>
              <input className="mainList__input" type="text"/>
              </div>
              <button className="mainList_chanBtn" onClick={() => dispatch({type: 'STARTTIME_PLANT', id: plant.id})}>Change</button>
              <button className="mainList_delBtn">Delete</button>
              </li>
              </>
               );
            })}
          </ul>
          <img className="mainPage__image"></img>
        </div>
      ) : (
        <div className="empty">No plants added.</div>
      );


}

export default MainPage ;