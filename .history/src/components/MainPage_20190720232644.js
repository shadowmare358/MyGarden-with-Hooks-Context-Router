import React, { useContext } from 'react';
import PlantDetails from './PlantDetails';

import { GardenContext } from '../contexts/GardenContext';


const MainPage = () => {
    const { garden } = useContext(GardenContext);
    return garden.length ? (
        <div className="mainPage">
          <h1 className="mainPage_header">Plants list</h1>
          <ul className="mainList">
             {garden.map(plant => {
              return (
              <>
              <li className="mainList__item">
              <div className="mainList__name">{plant.name}</div>
              <div className="mainList__desc">{plant.desc}</div>
              <img className="mainList__image" src={plant.image} alt="plant"></img>
              <div className="mainList__inputs">
                <p></p>
              <input className="mainList__input" type="text"/>
              <p></p>
              <input className="mainList__input" type="text"/>
              <input className="mainList__input" type="text"/>
              </div>
              <button className="mainList_chanBtn">Change</button>
              <button className="mainList_delBtn">Delete</button>
              </li>
              </>
               );
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">No plants added.</div>
      );


}

export default MainPage ;