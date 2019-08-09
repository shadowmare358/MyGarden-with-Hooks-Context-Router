import React, { useRef, useEffect } from 'react'

// import { ModalBackground, ModalContainer, Close } from './styles'


export default function Modal({ show, setShow, plant }) {
  const ref = useRef()

if(show){
  return (
    <div ref={ref} className="modal">
      <div className="modal-content">
      <p></p>
      <div>{plant.name}</div>
      <div>{plant.desc}</div>
      <button onClick={(e)=> setShow(false)} >Close</button>
    </div>
    </div>
  )
}else{
  return null;
}

}