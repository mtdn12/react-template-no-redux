import { ACTIONS } from './actions'

const delay = time =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })

const getItemsWorker = async (dispatch, action, globalActions) => {
  try {
    globalActions.showLoadingList()
    const response = await delay(3000)
    dispatch({ type: ACTIONS.GET_ITEMS_SUCCESS, items: ['item1', 'item2'] })
    globalActions.hideLoadingList()
    globalActions.openNotification('Notification', 'This is a notification')
  } catch (error) {}
}

export const ayncHandlers = {
  [ACTIONS.GET_ITEMS_REQUEST]: getItemsWorker,
}
