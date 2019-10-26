import React, { useReducer, useContext, useMemo } from 'react'
import reducers, { initialState } from './reducers'
import { getActions } from './actions'
import { applyMiddleWare } from './middleware'
import { useLoadingActions } from '../Loading'

const AuthState = React.createContext()
const AuthActions = React.createContext()

export function AuthProvider(props) {
  const [state, dispatch] = useReducer(reducers, initialState)
  // Attach middle ware to capture every dispatch
  const loadingActions = useLoadingActions()
  const actions = useMemo(() => {
    const enhanceDispatch = applyMiddleWare(dispatch, loadingActions)
    return getActions(enhanceDispatch)
  }, [dispatch, loadingActions])

  return (
    <AuthState.Provider value={state}>
      <AuthActions.Provider value={actions}>
        {props.children}
      </AuthActions.Provider>
    </AuthState.Provider>
  )
}

// Hooks
export const useAuthState = () => useContext(AuthState)
export const useAuthActions = () => useContext(AuthActions)

export default AuthProvider
