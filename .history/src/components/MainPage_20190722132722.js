import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import PlantDetails from './PlantDetails';

import { GardenContext } from '../contexts/GardenContext';


const MainPage = () => {
    const { garden } = useContext(GardenContext);
    const {dispatch} = useContext(GardenContext);
    const [irrigation,setIrr] = useState('');
    const [show, setShow] = useState(false);

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
              <span style={{width: plant.irrigation}}></span>
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
           style={{
            overlay: {
              backgroundColor: 'papayawhip'
            },
            content: {
              color: 'lightsteelblue'
            }
          }}
        >
          <button onClick={handleClose}>Close Modal</button>
        </Modal>
              {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Close
          </button>
            <button onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal> */}
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