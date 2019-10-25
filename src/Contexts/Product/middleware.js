import { ayncHandlers } from './asyncHanlders'

export const applyMiddleWare = (dispatch, loadingActions) => action => {
  let handler = ayncHandlers[action.type]
  if (handler) handler(dispatch, action, loadingActions)
  dispatch(action)
}
