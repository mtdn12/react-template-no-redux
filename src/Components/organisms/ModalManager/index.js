import React from 'react'
import { useModalState, useModalActions } from 'Contexts/Modal'
import { useLoadingState } from 'Contexts/Loading'

import ConfirmationModal from 'Components/molecules/ConfirmationModal'

const modalLookup = { ConfirmationModal }

const Modal = () => {
  const modalActions = useModalActions()
  const modalState = useModalState()
  const loadingState = useLoadingState()
  const modal = modalState.modal
  // handle close modal
  const handleClose = () => modalActions.clearModal()
  if (modal) {
    const { modalName, modalProps } = modal
    const ModalShow = modalLookup[modalName]
    return (
      <ModalShow
        isLoadingAction={loadingState.isLoadingAction}
        handleClose={handleClose}
        {...modalProps}
      />
    )
  }
  return <span />
}

export default Modal
