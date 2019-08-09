import React, { useContext } from 'react';
import { GardenContext } from '../contexts/GardenContext';


const MainPage = () => {
    const { garden } = useContext(GardenContext);
        return (
            <ul className="mainPage">
{garden.map(plant => {

})}
    </ul>
        <h1 className="mainPage__header">MainPage</h1>
        <div className="name"></div>
      <div className="text"></div>
      <img></img>


        );


}

export default MainPage ;