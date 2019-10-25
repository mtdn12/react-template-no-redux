import { actionHandlers } from './actions'

export const initialState = {
  isLoadingList: false,
  isLoadingAction: false,
  isLoadingItem: {},
}

export default function reducer(state = initialState, action) {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}
