import React, { useReducer, useContext, useMemo } from 'react'
import reducers, { initialState } from './reducers'
import { getActions } from './actions'
import { applyMiddleWare } from './middleware'
import { useGlobalAction } from '../Global'

const ProductState = React.createContext()
const ProductActions = React.createContext()

export function ProductProvider(props) {
  const [state, dispatch] = useReducer(reducers, initialState)
  // Attach middle ware to capture every dispatch
  const globalActions = useGlobalAction()
  console.log('global', globalActions)
  const actions = useMemo(() => {
    const enhanceDispatch = applyMiddleWare(dispatch, globalActions)
    return getActions(enhanceDispatch)
  }, [dispatch, globalActions])

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
