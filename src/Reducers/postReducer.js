export const postsReducer = (state = [], action) => {
  const {post, posts} = action
  switch (action.type) {
    case 'CREATE_POST_SUCCESS':
      return [
        ...state,
        Object.assign({}, post)
      ];
    case 'RECEIVE_POSTS':
      return posts
    default:
      return state
  }
}

export const postReducer = (state = [], action) => {
  const {post} = action
  switch (action.type) {
    case 'FETCH_POST_BY_ID_SUCCESS':
      return post
    case 'VOTE_POST':
      return post
    default:
      return state
  }
}
