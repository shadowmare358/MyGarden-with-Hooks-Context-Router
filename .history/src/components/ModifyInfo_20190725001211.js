import React, { useRef, useEffect } from 'react'

// import { ModalBackground, ModalContainer, Close } from './styles'


export default function Modal({ show, setShow, plant }) {
  const ref = useRef()

if(show){
  return (
    <div ref={ref} className="modal">
      <div className="modal-content">
      <p>Plant name</p>
      <div>{plant.name}</div>
      <p>Plant description</p>
      <div>{plant.desc}</div>
      <p>P</p>
      <button onClick={(e)=> setShow(false)} >Close</button>
    </div>
    </div>
  )
}else{
  return null;
}

}