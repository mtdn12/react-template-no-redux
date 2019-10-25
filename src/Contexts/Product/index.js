import React, { useReducer, useContext, useMemo } from 'react'
import reducers, { initialState } from './reducers'
import { getActions } from './actions'
import { applyMiddleWare } from './middleware'
import { useLoadingActions } from '../Loading'

const ProductState = React.createContext()
const ProductActions = React.createContext()

export function ProductProvider(props) {
  const [state, dispatch] = useReducer(reducers, initialState)
  // Attach middle ware to capture every dispatch
  const loadingActions = useLoadingActions()
  const actions = useMemo(() => {
    const enhanceDispatch = applyMiddleWare(dispatch, loadingActions)
    return getActions(enhanceDispatch)
  }, [dispatch, loadingActions])

  return (
    <ProductState.Provider value={state}>
      <ProductActions.Provider value={actions}>
        {props.children}
      </ProductActions.Provider>
    </ProductState.Provider>
  )
}

// Hooks
export const useProductState = () => useContext(ProductState)
export const useProductActions = () => useContext(ProductActions)
// HOC
export const withProductProdiver = Component => props => {
  return (
    <ProductProvider>
      <Component {...props} />
    </ProductProvider>
  )
}

export default ProductProvider
