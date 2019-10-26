import React, { useEffect } from 'react'
import {
  useProductActions,
  withProductProdiver,
  useProductState,
} from 'Contexts/Product'
import { useLoadingState } from 'Contexts/Loading'
import { useGlobalAction } from 'Contexts/Global'
import { Button } from 'antd'

const Product = () => {
  const state = useProductState()
  const Productactions = useProductActions()
  const loadingState = useLoadingState()
  const globalActions = useGlobalAction()
  // Effect get list product
  useEffect(() => {
    Productactions.getItems()
  }, [Productactions])
  // handle OpenModal confirm
  const handleOpenModalConfirm = () => {
    globalActions.setModal('ConfirmationModal', {
      title: 'Confirm',
      content: 'Confirm product',
      handleConfirm: async () => {
        globalActions.showLoadingAction()
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true)
          }, 2000)
        })
        globalActions.clearModal()
        globalActions.hideLoadingAction()
      },
    })
  }
  return (
    <div>
      {loadingState.isLoadingList && <div>..... Loading</div>}
      <h1>Product page</h1>
      {state.items && state.items.map((item, index) => <div>{item}</div>)}
      <Button onClick={handleOpenModalConfirm}>Open Confirm modal</Button>
    </div>
  )
}

export default withProductProdiver(Product)
