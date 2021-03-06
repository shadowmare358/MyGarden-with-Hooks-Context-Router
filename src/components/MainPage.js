import React, { useContext, useState } from 'react';
// import Modal from 'react-modal';
// import PlantDetails from './PlantDetails';
// import plantImg from '../images/E6A94B58-3203-4FB0-9C64-87E1AD2B9DF9.png'
import {Link} from 'react-router-dom';

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
  const {dispatch} = useContext(GardenContext)
    const { garden } = useContext(GardenContext);
    const [show, setShow] = useState(false);
    const [ident,setIdent] = useState('');

    const sendElement = (id) => {
      setShow(true);
      setIdent(id);
    }

    return garden.length ? (
        <div className="mainPage">
          <h1 className="mainPage__header">My Garden</h1>
          <ul className="mainList">
             {garden.map((plant,index) => {
              return (
              <>
              <Link to="/" className="navigation">creator</Link>
              <li className="mainList__item">
              <div className="mainList__name">{plant.name}</div>
              <div className="mainList__desc">{plant.desc}</div>
              <img className="mainList__image" src={plant.image} alt="plant"></img>
              <div className="mainList__link">
              <a target="_blank" rel="noopener noreferrer" href={`https://pl.wikipedia.org/wiki/${plant.name}`}>Wiki</a>
              </div>
              <div className="mainList__inputs">
                <p className="mainList__inputs__name">irrigation</p>
                <div className="mainList__progress">
              <span style={{width: `${plant.irrigation}%`}}></span>
                </div>
              <p className="mainList__inputs__name">fertilization</p>
              <div className="mainList__progress--fert">
              <span style={{width: `${plant.fertilization}%`}}></span>
                </div>
              <p className="mainList__inputs__name">weeding</p>
              <div className="mainList__progress--weed">
              <span style={{width: `${plant.weeding}%`}}></span>
                </div>
              </div>
              <div className="mainList__buttons">
              <button className="mainList_chanBtn" onClick={() => sendElement(plant.id)}>Change</button>
              <button className="mainList_delBtn" onClick={() => dispatch({type: 'REMOVE_PLANT', id: plant.id})}>Delete</button>
              </div>
              <ModifyInfo {...{show, setShow, plant, ident}}/>
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

