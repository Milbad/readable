export const commentsReducer = (state = [], action) => {
  const {comments} = action
  switch (action.type) {
    case 'CREATE_COMMENT_SUCCESS':
      return [
        ...state,
        Object.assign({}, action.comment)
      ];
    case 'RECEIVE_COMMENTS':
      return comments
    default:
      return state
  }
}
