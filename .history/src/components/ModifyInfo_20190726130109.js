import React, { useState, useContext } from 'react'
import {GardenContext} from '../contexts/GardenContext';
// import { ModalBackground, ModalContainer, Close } from './styles'



export default function Modal({ show, setShow, plant, ident }) {
  const {dispatch} = useContext(GardenContext)
  let divz = document.querySelector('div');
  divz.classList.remove('modal');
  const [value, setValue] = useState();

  const closeModall = (val) => {
   setShow(val)
    }

  const setIntervall = (id) => {
let counter = 0;
if(counter === 10){
  dispatch({type: 'STARTIRRIGATION_PLANT', id})
}else{
  setInterval(() => {
    dispatch({type: 'STARTIRRIGATION_PLANT', id})
    counter++;
},100)
}





  };

if(show && ident === plant.id ){
  return (
    <div key={plant.id}  className="modal">
      <div className="modal-content">
        <h3>Change data</h3>
        <p className="modal__p">Plant name</p>
      <div>{plant.name}</div>
      <button>Change</button>
      <p className="modal__p">Plant description</p>
      <div>{plant.desc}</div>
    <button>Change</button>
      <p className="modal__p">Plant irrigation</p>
      <input placeholder={plant.irrigation} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={() => setIntervall(plant.id)}>Start period (days)</button>
      <p className="modal__p">Plant fertilization</p>
      <input placeholder={plant.fertilization}></input>
      <button>Start period (days)</button>
      <p className="modal__p">Plant weeding</p>
      <input placeholder={plant.weeding}></input>
      <button>Start period (days)</button>
      <p className="modal__p">Plant image</p>
      <img src={plant.image} alt="Plant"></img>
      <button className="close-button" onClick={(e)=> closeModall(false)} >Close</button>
      </div>
    </div>
  )
}else{
  return null;
}

}