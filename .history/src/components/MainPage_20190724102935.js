import React, { useContext, useState } from 'react';
// import Modal from 'react-modal';
// import PlantDetails from './PlantDetails';
// import plantImg from '../images/E6A94B58-3203-4FB0-9C64-87E1AD2B9DF9.png'

import { GardenContext } from '../contexts/GardenContext';
import ModifyInfo from './ModifyInfo';

const customStyles = {
  content : {
    width                 : '300px',
    height                : '300px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



const MainPage = () => {

    const { garden } = useContext(GardenContext);
    const {dispatch} = useContext(GardenContext);

    const [show, setShow] = useState(false);
  let cos = false;


  const toggleModal = () => {
    let modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");

  }
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
    console.log(show)};
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
                <p className="mainList__inputs__name">irrigation</p>
                <div className="mainList__progress">
              <span style={{width: `${plant.irrigation}%`}}></span>
                </div>
              <p className="mainList__inputs__name">fertilization</p>
              <div className="mainList__progress">
              <span style={{width: `${plant.fertilization}%`}}></span>
                </div>
              <p className="mainList__inputs__name">weeding</p>
              <div className="mainList__progress">
              <span style={{width: `${plant.weeding}%`}}></span>
                </div>
              </div>
              <button className="mainList_chanBtn" onClick={() => handleShow()}>Change</button>
              <button className="mainList_delBtn">Delete</button>
              </li>
              <ModifyInfo plant={plant} key={plant.id} show={show}/>
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