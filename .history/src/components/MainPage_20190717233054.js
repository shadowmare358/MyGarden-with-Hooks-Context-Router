import React from 'react';
const MainPage = () => {

        return (
            <div className="mainPage">
        <h1 className="mainPage__header">MainPage</h1>
        <div className="name"></div>
      <div className="text">{plant.desc}</div>
      <img src={plant.image} alt="plant"></img>
            </div>

        );


}

export default MainPage ;