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
const MainPage = () => {
    const { garden } = useContext(GardenContext);
    const {dispatch} = useContext(GardenContext);
    const [irrigation,setIrr] = useState('');
    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')

    const handleTime = (plant, target) => {
      let counter = 0;
      let timer = () => {
        if(counter >= 99){
          clearInterval(id);
          alert('Irrigation needed! ')
          dispatch({type: `START${target}_PLANT`, id: plant.id, payload: 'irr'});
        }else{
          counter++;
          dispatch({type: 'START${target}_PLANT', id: plant.id});
        }
      }
      let id = setInterval(timer, 10)

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
              <span style={{width: '25%'}}></span>
                </div>
              <p className="mainList__inputs__name">weeding</p>
              <div className="mainList__progress">
              <span style={{width: '25%'}}></span>
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
          <button onClick={() => handleTime(plant,'IRRIGATION')}>Start timer</button>
          <button onClick={() => dispatch({type: 'IRRIGATION_RESET', id: plant.id})}>Start timer</button>
          <p className="mainList__inputs__name">fertilization</p>
          <input type="text"/>
          <p className="mainList__inputs__name">weeding</p>
          <input type="text"/>
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