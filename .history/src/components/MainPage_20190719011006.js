import React from 'react';
const MainPage = () => {
    const { garden } = useContext(GardenContext);
        return (
            <div className="mainPage">
        <h1 className="mainPage__header">MainPage</h1>
        <div className="name"></div>
      <div className="text"></div>
      <img></img>
            </div>

        );


}

export default MainPage ;