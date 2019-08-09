import React, { useRef, useEffect } from 'react'

// import { ModalBackground, ModalContainer, Close } from './styles'



export default function Modal({ show, setShow, plant, ident }) {
  const ref = useRef()
  let divz = document.querySelector('div');
  divz.classList.remove('modal');
  const closeModall = (val) => {
   setShow(val)
    }
if(show && ident === plant.id ){
  return (
    <div ref={ref} key={plant.id}  className="modal">
      <div className="modal-content">
        <h3>Change data</h3>
        <p className="modal__p">Plant name</p>
      <div>{plant.name}</div>
      <p className="modal__p">Plant description</p>
      <div>{plant.desc}</div>
      <input></input>
    <button></button>
      <p className="modal__p">Plant irrigation</p>
      <div>{plant.irrigation}</div>
      <input></input>
      <button></button>
      <p className="modal__p">Plant fertilization</p>
      <div>{plant.fertilization}</div>
      <input></input>

      <p className="modal__p">Plant weeding</p>
      <div>{plant.weeding}</div>
      <input></input>

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