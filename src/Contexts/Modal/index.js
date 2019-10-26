import React, { useReducer, useContext, useMemo } from 'react'
import reducers, { initialState } from './reducers'
import { getActions } from './actions'

const ModalState = React.createContext()
const ModalActions = React.createContext()

export function ModalProvider(props) {
  const [state, dispatch] = useReducer(reducers, initialState)
  // Attach middle ware to capture every dispatch
  const actions = useMemo(() => {
    return getActions(dispatch)
  }, [dispatch])

  return (
    <ModalState.Provider value={state}>
      <ModalActions.Provider value={actions}>
        {props.children}
      </ModalActions.Provider>
    </ModalState.Provider>
  )
}

// Hooks
export const useModalState = () => useContext(ModalState)
export const useModalActions = () => useContext(ModalActions)

// HOC
export const withModalProdiver = Component => props => {
  return (
    <ModalProvider>
      <Component {...props} />
    </ModalProvider>
  )
}

export default ModalProvider
