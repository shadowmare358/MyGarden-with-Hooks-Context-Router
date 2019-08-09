import React, { useRef, useEffect } from 'react'

// import { ModalBackground, ModalContainer, Close } from './styles'


export default function Modal({ show, plant }) {
  const ref = useRef()

  const closeModall = (show) => {
    show = false;
    }
if(show){
  return (
    <div ref={ref}>
      <div>{plant.name}</div>
      <div>{plant.desc}</div>
      <button onClick={(e)=> closeModall(show)} >Close</button>
    </div>
  )
}else{
  return null;
}

}