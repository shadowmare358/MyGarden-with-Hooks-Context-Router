import React, { useRef, useEffect } from 'react'

// import { ModalBackground, ModalContainer, Close } from './styles'

const handleClickOutside = (node, closeModal) => event => {
  if (node && !node.contains(event.target)) closeModal()
}

export default function Modal({ open, closeModal, children,plant }) {
  const ref = useRef()
  useEffect(() => {
    const handler = handleClickOutside(ref.current, closeModal)
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  })
  return (
    <div className=".modall" ref={ref} open={open}>
      <div>{plant.name}</div>
      <div>{plant.desc}</div>
      <button onClick={closeModal} >Close</button>
      {children}
    </div>
  )
}