import { ACTIONS } from './actions'

const delay = time =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })

const loginWorker = async (dispatch, { values }, loadingActions) => {
  try {
    loadingActions.showLoadingAction()
    const response = await delay(3000)
    dispatch({ type: ACTIONS.LOGIN_SUCCESS, auth: { name: 'Tuan' } })
    loadingActions.hideLoadingAction()
  } catch (error) {}
}

export const ayncHandlers = {
  [ACTIONS.LOGIN_REQUEST]: loginWorker,
}
