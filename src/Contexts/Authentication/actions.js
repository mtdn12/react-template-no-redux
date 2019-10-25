// Actions
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'

const LOG_OUT = 'LOG_OUT'

export const ACTIONS = {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
}

export const getActions = dispatch => ({
  logIn: values => dispatch({ type: LOGIN_REQUEST, values }),
})

// Actions Handlers
export const actionHandlers = {
  [LOGIN_SUCCESS]: (state, { auth }) => ({ ...state, auth }),
}
