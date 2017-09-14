import { combineReducers } from 'redux';
import {postsReducer, postReducer} from './postReducer'
import {categoriesReducer} from './catReducer'
import {commentsReducer} from './commentsReducer'
import {filterReducer} from './filtersReducer'
import {sortByReducer, sortByCommentReducer } from './sortByReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  comments: commentsReducer,
  post: postReducer,
  sortBy: sortByReducer,
  form: formReducer,
  sortByComment: sortByCommentReducer,
  filter: filterReducer
});
