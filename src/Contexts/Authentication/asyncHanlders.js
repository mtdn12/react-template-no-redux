import { ACTIONS } from './actions'
import { AuthService } from 'Service/AuthService'
import jwtDecode from 'jwt-decode'
import { setToken } from 'Utils/token'

const loginWorker = async (
  dispatch,
  { values, handleLoginSuccess },
  globalActions
) => {
  try {
    globalActions.showLoadingAction()
    const response = await AuthService.login()
    const token = response.token
    const auth = jwtDecode(token)
    setToken(token)
    dispatch({
      type: ACTIONS.LOGIN_SUCCESS,
      auth,
    })
    globalActions.hideLoadingAction()
    handleLoginSuccess()
  } catch (error) {
    dispatch({ type: ACTIONS.LOGIN_FAILURE })
    globalActions.hideLoadingAction()
    globalActions.openNotification(error.message)
  }
}

export const ayncHandlers = {
  [ACTIONS.LOGIN_REQUEST]: loginWorker,
}
