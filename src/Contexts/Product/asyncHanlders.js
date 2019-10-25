import { ACTIONS } from './actions'

const delay = time =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })

const getItemsWorker = async (dispatch, action, loadingActions) => {
  try {
    loadingActions.showLoadingAction()
    const response = await delay(3000)
    dispatch({ type: ACTIONS.GET_ITEMS_SUCCESS, items: ['item1', 'item2'] })
    loadingActions.hideLoadingAction()
  } catch (error) {}
}

export const ayncHandlers = {
  [ACTIONS.GET_ITEMS_REQUEST]: getItemsWorker,
}
