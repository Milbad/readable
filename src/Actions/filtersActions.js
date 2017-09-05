import * as actionTypes from './actionsTypes'

export const setFilter = (filter) => {
  return {
    type: actionTypes.SET_FILTER,
    filter
  }
}
export const setSortBy = (sortby) => {
  return {
    type: actionTypes.SET_SORTBY,
    sortby
  }
}
