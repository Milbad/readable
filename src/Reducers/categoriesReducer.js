export const categoriesReducer = (state = [], action) => {
  const {categories} = action
  switch (action.type) {
    case 'CREATE_CAT_SUCCESS':
      return [
        ...state,
        Object.assign({}, categories)
      ];
    case 'RECEIVE_CATS':
      return categories
    default:
      return state
  }
}
