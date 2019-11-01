// Actions
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const CLEAR_AUTH = 'CLEAR_AUTH'

const LOG_OUT = 'LOG_OUT'

export const ACTIONS = {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
}

export const getActions = dispatch => ({
  logIn: (values, handleLoginSuccess) =>
    dispatch({ type: LOGIN_REQUEST, values, handleLoginSuccess }),
})

// Actions Handlers
export const actionHandlers = {
  [LOGIN_SUCCESS]: (state, { auth }) => ({ ...state, auth }),
  [CLEAR_AUTH]: state => ({ ...state, auth: null }),
}
