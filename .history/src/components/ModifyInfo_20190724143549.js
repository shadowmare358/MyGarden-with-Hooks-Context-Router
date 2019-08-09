import React, { useRef, useEffect } from 'react'

// import { ModalBackground, ModalContainer, Close } from './styles'



export default function Modal({ open, closeModal, children,plant }) {
  const ref = useRef()
  useEffect(() => {

  })
  const closeModall = (e) => {
    e.target.partentElement.style.visibility = 'hidden'
    }
  return (
    <div ref={ref} open={open}>
      <div>{plant.name}</div>
      <div>{plant.desc}</div>
      <button onClick={(e)=> closeModall(e)} >Close</button>
      {children}
    </div>
  )
}