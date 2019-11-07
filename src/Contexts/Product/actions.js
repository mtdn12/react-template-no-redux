// Actions
const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST'
const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE'

const SET_FILTER = 'SET_FILTER'

export const ACTIONS = {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  SET_FILTER,
}

export const getActions = dispatch => ({
  getItems: filter => dispatch({ type: GET_ITEMS_REQUEST, filter }),
  setFilter: filter => dispatch({ type: SET_FILTER, filter }),
})
// Actions Handlers
export const actionHandlers = {
  [GET_ITEMS_SUCCESS]: (state, { items }) => ({ ...state, items }),

  [SET_FILTER]: (state, { filter }) => ({
    ...state,
    filter: { ...state.filter, ...filter },
  }),
}
