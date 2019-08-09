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
        <p>Plant name</p>
      <div>{plant.name}</div>
      <p>Plant description</p>
      <div>{plant.desc}</div>
      <p>Plant irrigation</p>
      <div>{plant.irrigation}</div>
      <p>Plant fertilization</p>
      <div>{plant.fertilization}</div>
      <p>Plant weeding</p>
      <div>{plant.weeding}</div>
      <p>Plant image</p>
      <img></img>
      <button className="close-button" onClick={(e)=> closeModall(false)} >Close</button>
      </div>
    </div>
  )
}else{
  return null;
}

}