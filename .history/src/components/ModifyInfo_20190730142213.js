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

  const setIntervall = (e,id,type) => {
let counter = 0;
let cos = e.target.disabled;
 cos = true;
  const startCounter = setInterval(() => {
    dispatch({type: `START+${type}_PLANT`, id})
    counter++;

    if(counter === 100){
      dispatch({type: `${type}_RESET`, id})
      clearInterval(abc)
      alert("Irrigation needed!")
      cos = false;
    }
  },100)
}

  const setChangeVisible = (div) => {
    const modalChange = document.querySelector(div);
   if(modalChange.style.visibility === "visible"){
    modalChange.style.visibility = "hidden"
   }else{
    modalChange.style.visibility = "visible"
   }
  }

  const setName = (plant) => {
    const value = document.querySelector('.nameChange').value;
    dispatch({type: 'SET_NAME', id: plant.id, name: value})}

    const setDesc = (plant) => {
      const value = document.querySelector('.descChange').value;
      dispatch({type: 'SET_DESC', id: plant.id, desc: value})}


if(show && ident === plant.id ){
  return (
    <>
    <div key={plant.id}  className="modal">
      <div className="modal-content">
        <h3>Change data</h3>
        <p className="modal__p">Plant name</p>
      <div>{plant.name}</div>
      <button onClick={()=> {setChangeVisible(".change__name"); setChangeVisible('.modalhide')}}>Change</button>
      <div className="modalhide">
      <div className="change__name">
        <p>Change plant name</p>
        <span className="closeBtn" onClick={()=> {setChangeVisible(".change__name"); setChangeVisible('.modalhide')}}>X</span>
        <input className="nameChange"></input>
        <button className="change__name__btn" onClick={()=> setName(plant)}>SET NAME</button>
      </div>
      </div>
      <p className="modal__p">Plant description</p>
      <div>{plant.desc}</div>
      <button onClick={()=> {setChangeVisible(".change__desc"); setChangeVisible('.modalhide')}}>Change</button>
      <div className="modalhide">
      <div className="change__desc">
        <p>Change plant description</p>
        <span className="closeBtn" onClick={()=> {setChangeVisible(".change__desc"); setChangeVisible('.modalhide')}}>X</span>
        <input className="descChange"></input>
        <button className="change__desc__btn" onClick={()=> setDesc(plant)}>SET DESCRIPTION</button>
      </div>
      </div>
      <p className="modal__p">Plant irrigation</p>
      <input placeholder={plant.irrigation} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={(e) => setIntervall(e,plant.id,'irrigation')}>Start period (days)</button>
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

      </>
  )
}else{
  return null;
}

}