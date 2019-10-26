import { ayncHandlers } from './asyncHanlders'

export const applyMiddleWare = (dispatch, globalActions) => action => {
  let handler = ayncHandlers[action.type]
  if (handler) handler(dispatch, action, globalActions)
  dispatch(action)
}
