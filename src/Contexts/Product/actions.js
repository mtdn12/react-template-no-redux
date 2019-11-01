// Actions
const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST'
const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE'

export const ACTIONS = {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
}

export const getActions = dispatch => ({
  getItems: () => dispatch({ type: GET_ITEMS_REQUEST }),
})
// Actions Handlers
export const actionHandlers = {
  [GET_ITEMS_SUCCESS]: (state, { items }) => ({ ...state, items }),
}
