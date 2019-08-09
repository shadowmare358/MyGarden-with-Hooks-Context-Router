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
              <div >{plant.name}</div>
              <div>{plant.desc}</div>
              <img src={plant.image} alt="plant"></img>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <button>Change</button>
              <button>Delete</button>
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