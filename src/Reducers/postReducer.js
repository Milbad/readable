export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_POST_SUCCESS':
        return [
          ...state,
          Object.assign({}, action.post)
        ];
    case 'RECEIVE_POSTS':
          return action.posts;
    case 'FILTER_POSTS':
        return state.filter(post => post.cat === action.cat);

    default:
          return state;
  }
};

export const postReducer = (state = [], action) => {

  switch (action.type) {
    case 'FETCH_POST_BY_ID_SUCCESS':
      return action.post;
    case 'INCREASE_SCORE':
        return action.post;
    case 'DECREASE_SCORE':
        return action.post;

    default:
      return state;
  }
};
