export const sortByReducer = (state = 'timestamp', action) => {
  switch (action.type) {
    case 'SET_SORTBY':
      return action.sortby
    default:
      return state
  }
}
