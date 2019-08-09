import React, { useEffect } from 'react'

import { ModalBackground, ModalContainer, Close, Next, Prev } from './styles'

const handleArrowKeys = (modal, setModal) => event => {
  if (event.key === `ArrowRight`) setModal(modal + 1)
  else if (event.key === `ArrowLeft`) setModal(modal - 1)
}

export default function Modal({ open, modal, setModal, ...rest }) {
  if (open) {
    const { navigation, className, children } = rest
    useEffect(() => {
      const handler = handleArrowKeys(modal, setModal)
      document.addEventListener(`keydown`, handler)
      return () => document.removeEventListener(`keydown`, handler)
    })
    return (
      // passing setModal to onClick without arguments implicitly
      // passes undefined and thus closes the modal when triggered
      <ModalBackground open={open} onClick={setModal}>
        <ModalContainer
          onClick={event => event.stopPropagation()}
          className={className}
        >
          <Close onClick={setModal} />
          {navigation && (
            <>
              <Next onClick={() => setModal(modal + 1)} />
              <Prev onClick={() => setModal(modal - 1)} />
            </>
          )}
          {children}
        </ModalContainer>
      </ModalBackground>
    )
  } else return null
}