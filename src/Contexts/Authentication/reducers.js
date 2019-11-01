import { actionHandlers } from './actions'
import { getTokenData } from 'Utils/token'

export const initialState = {
  auth: getTokenData(),
}

export default function reducer(state = initialState, action) {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}
