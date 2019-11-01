import React, { useReducer, useContext, useMemo } from 'react'
import reducers, { initialState } from './reducers'
import { getActions } from './actions'
import { applyMiddleWare } from './middleware'
import { useGlobalAction } from '../Global'

const AuthState = React.createContext()
const AuthActions = React.createContext()

export function AuthProvider(props) {
  const [state, dispatch] = useReducer(reducers, initialState)
  // Attach middle ware to capture every dispatch
  const glovalActions = useGlobalAction()
  const actions = useMemo(() => {
    const enhanceDispatch = applyMiddleWare(dispatch, glovalActions)
    return getActions(enhanceDispatch)
  }, [dispatch, glovalActions])

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
export const useAuthAction = () => useContext(AuthActions)

export default AuthProvider
