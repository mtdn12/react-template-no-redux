import React, { useEffect } from 'react'
import {
  useProductActions,
  withProductProdiver,
  useProductState,
} from 'Contexts/Product'
import { useLoadingState } from 'Contexts/Loading'

const Product = () => {
  const state = useProductState()
  const actions = useProductActions()
  const loadingState = useLoadingState()
  useEffect(() => {
    actions.getItems()
  }, [actions])
  return (
    <div>
      {loadingState.isLoadingAction && <div>..... Loading</div>}
      <h1>Product page</h1>
      {state.items && state.items.map((item, index) => <div>{item}</div>)}
    </div>
  )
}

export default withProductProdiver(Product)
