import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import PlantDetails from './PlantDetails';
import plantImg from '../images/E6A94B58-3203-4FB0-9C64-87E1AD2B9DF9.png'

import { GardenContext } from '../contexts/GardenContext';

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
let id;
const resetTimer = (id,plant) => {
  const {dispatch} = useContext(GardenContext);
  clearInterval(id);
  dispatch({type: `${target}_RESET`, id: plant.id});
}

const MainPage = () => {
    const { garden } = useContext(GardenContext);
    const {dispatch} = useContext(GardenContext);
    const [irrigation,setIrr] = useState('');
    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')

    const handleTime = (plant, target, reset) => {
      let counter = 0;
      let timer = () => {
        if(counter >= 99 || reset === true){
          clearInterval(id);
          alert(`${target} NEEDED!`)
          dispatch({type: `${target}_RESET`, id: plant.id});
        }else{
          counter++;
          dispatch({type: `START${target}_PLANT`, id: plant.id});
        }
      }
      id = setInterval(timer, 1000)

  }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
              <button className="mainList_chanBtn" onClick={handleShow}>Change</button>
              <button className="mainList_delBtn">Delete</button>
              </li>
              <Modal
           isOpen={show} onHide={handleClose}
           contentLabel="Minimal Modal Example"
           style={customStyles}
        >
          <p className="mainList__inputs__name">irrigation</p>
          <input type="text" placeholder={plant.irrigation} onChange={(e) => setIrr(e.target.value)}/>
          <button onClick={() => handleTime(plant,'IRRIGATION', false)}>Start timer</button>
          <button onClick={() => resetTimer(id)}>RESET</button>
          <p className="mainList__inputs__name">fertilization</p>
          <input type="text"/>
          <button onClick={() => handleTime(plant,'FERTILIZATION')}>Start timer</button>
          <button onClick={() => dispatch({type: 'FERTILIZATION_RESET', id: plant.id})}>RESET</button>
          <p className="mainList__inputs__name">weeding</p>
          <input type="text"/>
          <button onClick={() => handleTime(plant,'WEEDING')}>Start timer</button>
          <button onClick={() => dispatch({type: 'WEEDING_RESET', id: plant.id})}>RESET</button>
          <p className="mainList__inputs__name">Plant name</p>
          <input type="text" placeholder={plant.name} />
          <p className="mainList__inputs__name">Description</p>
          <input type="text" placeholder={plant.desc}/>
          <p className="mainList__inputs__name">Image</p>
          <img className="mainList__image" src={plant.image} alt="plant"></img>
          <input className="addPage_input-type-file" type="file" accept="file/*" onChange={(e) => setImage(plantImg)}/>
          <button onClick={handleClose}>Close Modal</button>
        </Modal>
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