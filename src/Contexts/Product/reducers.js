import { actionHandlers } from './actions'

export const initialState = {
  items: [],
}

export default function reducer(state = initialState, action) {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}
