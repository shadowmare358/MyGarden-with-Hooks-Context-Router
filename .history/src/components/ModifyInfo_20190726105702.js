import React, { useRef, useEffect } from 'react'

// import { ModalBackground, ModalContainer, Close } from './styles'



export default function Modal({ show, setShow, plant, ident }) {
  const ref = useRef()
  let divz = document.querySelector('div');
  divz.classList.remove('modal');
  const closeModall = (val) => {
   setShow(val)
    }
if(show && ident ===  ){
  return (
    <div ref={ref}  className="modal">
      <div>{plant.name}</div>
      <div>{plant.desc}</div>
      <button onClick={(e)=> closeModall(false)} >Close</button>
    </div>
  )
}else{
  return null;
}

}