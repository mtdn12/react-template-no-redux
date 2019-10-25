// Actions
// Show and hide loading list
const SHOW_LOADING_LIST = 'SHOW_LOADING_LIST'
const HIDE_LOADING_LIST = 'HIDE_LOADING_LIST'
// Show and hide loading action
const SHOW_LOADING_ACTION = 'SHOW_LOADING_ACTION'
const HIDE_LOADING_ACTION = 'HIDE_LOADING_ACTION'
// Show and hide loading item
const SHOW_LOADING_ITEM = 'SHOW_LOADING_ITEM'
const HIDE_LOADING_ITEM = 'HIDE_LOADING_ITEM'

export const getActions = dispatch => ({
  showLoadingList: () => dispatch({ type: SHOW_LOADING_LIST }),
  hideLoadingList: () => dispatch({ type: HIDE_LOADING_LIST }),
  showLoadingAction: () => dispatch({ type: SHOW_LOADING_ACTION }),
  hideLoadingAction: () => dispatch({ type: HIDE_LOADING_ACTION }),
  showLoadingItem: name => dispatch({ type: SHOW_LOADING_ITEM, name }),
  hideLoadingItem: name => dispatch({ type: HIDE_LOADING_ITEM, name }),
})

// Actions Handlers
export const actionHandlers = {
  [SHOW_LOADING_LIST]: state => ({ ...state, isLoadingList: true }),
  [HIDE_LOADING_LIST]: state => ({ ...state, isLoadingList: false }),
  [SHOW_LOADING_ACTION]: state => ({ ...state, isLoadingAction: true }),
  [HIDE_LOADING_ACTION]: state => ({ ...state, isLoadingAction: false }),
  [SHOW_LOADING_ITEM]: (state, { name }) => ({
    ...state,
    isLoadingItem: { ...state.isLoadingItem, [name]: true },
  }),
  [HIDE_LOADING_ITEM]: (state, { name }) => ({
    ...state,
    isLoadingItem: { ...state.isLoadingItem, [name]: false },
  }),
}
