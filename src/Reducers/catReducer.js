export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CAT_SUCCESS':
        return [
          ...state,
          Object.assign({}, action.categories)
        ];
    case 'RECEIVE_CATS':
          return action.categories;
    default:
          return state;
  }
};
