import { ACTIONS } from './actions'
import { ProductService } from 'Service/ProductService'

const delay = time =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })

const getItemsWorker = async (dispatch, { filter }, globalActions) => {
  try {
    globalActions.showLoadingList()
    const response = await ProductService.getListProduct(filter)
    console.log(response)
    dispatch({ type: ACTIONS.GET_ITEMS_SUCCESS, items: response.items })
    globalActions.hideLoadingList()
    globalActions.openNotification('Notification', 'Load Items success')
  } catch (error) {
    dispatch({ type: ACTIONS.GET_ITEMS_FAILURE })
    globalActions.openNotification('Notification', error.message)
  }
}

export const ayncHandlers = {
  [ACTIONS.GET_ITEMS_REQUEST]: getItemsWorker,
}
