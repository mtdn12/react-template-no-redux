import React, { useReducer, useContext, useMemo } from 'react'
import reducers, { initialState } from './reducers'
import { getActions } from './actions'

const LoadingState = React.createContext()
const LoadingActions = React.createContext()

export function LoadingProvider(props) {
  const [state, dispatch] = useReducer(reducers, initialState)
  // Attach middle ware to capture every dispatch
  const actions = useMemo(() => {
    return getActions(dispatch)
  }, [dispatch])

  return (
    <LoadingState.Provider value={state}>
      <LoadingActions.Provider value={actions}>
        {props.children}
      </LoadingActions.Provider>
    </LoadingState.Provider>
  )
}

// Hooks
export const useLoadingState = () => useContext(LoadingState)
export const useLoadingActions = () => useContext(LoadingActions)

export default LoadingProvider
