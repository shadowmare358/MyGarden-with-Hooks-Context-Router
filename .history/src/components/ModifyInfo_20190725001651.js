import React, { useRef, useEffect } from 'react'

// import { ModalBackground, ModalContainer, Close } from './styles'


export default function Modal({ show, plant }) {
  const ref = useRef()

  const closeModall = (val) => {
    show = val;
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