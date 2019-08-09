import React from 'react'

import { ModalBackground, ModalContainer, Close } from './styles'

export default function Modal({ open, closeModal, children }) {
  return (
    <ModalBackground open={open} onClick={closeModal}>
      <ModalContainer onClick={event => event.stopPropagation()}>
        <Close onClick={closeModal} />
        {children}
      </ModalContainer>
    </ModalBackground>
  )
}