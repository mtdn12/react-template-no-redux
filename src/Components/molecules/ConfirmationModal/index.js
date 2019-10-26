import React from 'react'
import { string, func, bool } from 'prop-types'
import { Modal } from 'antd'

const ConfirmationModal = ({
  title,
  handleClose,
  content,
  handleConfirm,
  isLoadingAction,
}) => {
  return (
    <Modal
      title={title}
      onCancel={handleClose}
      onOk={handleConfirm}
      visible
      confirmLoading={isLoadingAction}>
      {content}
    </Modal>
  )
}

ConfirmationModal.propTypes = {
  title: string.isRequired,
  handleClose: func.isRequired,
  content: string.isRequired,
  handleConfirm: func.isRequired,
  isLoadingAction: bool.isRequired,
}

export default ConfirmationModal
