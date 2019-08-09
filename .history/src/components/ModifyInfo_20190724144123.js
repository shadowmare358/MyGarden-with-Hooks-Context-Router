import React, { useRef, useEffect } from 'react'

// import { ModalBackground, ModalContainer, Close } from './styles'

const closeModall = (e) => {
  e.parentNode.style.visibility = 'hidden'
  }

export default function Modal({ open, plant }) {
  const ref = useRef()
  useEffect(() => {

  })
if(show)
  return (
    <div ref={ref} open={open}>
      <div>{plant.name}</div>
      <div>{plant.desc}</div>
      <button onClick={(e)=> closeModall(e.target)} >Close</button>
    </div>
  )
}