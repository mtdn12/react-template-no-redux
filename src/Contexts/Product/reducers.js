import { actionHandlers } from './actions'

export const initialState = {
  items: [],
  filter: {
    page: 0,
    limit: 10,
  },
}
export default function reducer(state = initialState, action) {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}
