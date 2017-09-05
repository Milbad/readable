
export const commentsReducer = (state = [] , action) => {
  const { comments } = action
  console.log(action)
  switch (action.type) {
    case 'CREATE_COMMENT_SUCCESS':
        return [
          ...state,
          Object.assign({}, action.comment)
        ];
     case 'RECEIVE_COMMENTS':
      return comments
    //let newArray = comments
     //return state.concat(newArray)
    // return [...state, action.comments]
    case 'INCREASE_SCORE_COMMENT':
        return action.comment;
    case 'DECREASE_SCORE_COMMENT':
        return action.comment;
    default:
          return state;
  }
}

export const commentsByIdReducer = (state = [] , action) => {
  console.log(action)
  const { comments } = action
  switch (action.type) {
    case 'RECEIVE_COMMENTS_BY_ID':
     return  action.comments
    default:
          return state;
  }
}
/*     ...state,
      [post.id]: {

       id: action.comments

    }*/
