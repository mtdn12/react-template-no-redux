import React from 'react'
import { useModalState, useModalActions } from 'Contexts/Modal'

const modalLookup = {}

const Modal = () => {
  const modalActions = useModalActions()
  const modalState = useModalState()
  const modal = modalState.modal
  // handle close modal
  const handleClose = () => modalActions.clearModal()
  if (modal) {
    const { modalName, modalProps } = modal
    const ModalShow = modalLookup[modalName]
    return <ModalShow handleClose={handleClose} {...modalProps} />
  }
  return <span />
}

export default Modal
