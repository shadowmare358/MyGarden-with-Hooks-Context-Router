import React, { useRef, useEffect } from 'react'

// import { ModalBackground, ModalContainer, Close } from './styles'



export default function Modal({ show, setShow, plant }) {
  const ref = useRef()
  let divz = document.querySelector('modal');
  shadesEl.classList.remove('cool', 'make', 'me');

  const closeModall = (val) => {
   setShow(val)
    }
if(show){
  return (
    <div ref={ref} className="modal">
      <div>{plant.name}</div>
      <div>{plant.desc}</div>
      <button onClick={(e)=> closeModall(false)} >Close</button>
    </div>
  )
}else{
  return null;
}

}