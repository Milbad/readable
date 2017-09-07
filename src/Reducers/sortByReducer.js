export const sortByReducer = (state = 'voteScore', action) => {
  const {sortby} = action
  switch (action.type) {
    case 'SET_SORTBY':
      return sortby
    default:
      return state
  }
}

export const sortByCommentReducer = (state = 'voteScore', action) => {
  const {sortby} = action
  switch (action.type) {
    case 'SET_SORTBY_COMMENT':
      return sortby
    default:
      return state
  }
}
