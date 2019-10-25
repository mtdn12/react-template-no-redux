// Actions
// Show and hide loading list
const SET_MODAL = 'SET_MODAL'
const CLEAR_MODAL = 'CLEAR_MODAL'

export const getActions = dispatch => ({
  setModal: (modalName, modalProps) =>
    dispatch({ type: SET_MODAL, modalName, modalProps }),
  clearModal: () => dispatch({ type: CLEAR_MODAL }),
})

// Actions Handlers
export const actionHandlers = {
  [SET_MODAL]: (state, { modalName, modalProps }) => ({
    ...state,
    modal: { modalName, modalProps },
  }),
  [CLEAR_MODAL]: state => ({ ...state, modal: null }),
}
