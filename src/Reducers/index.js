import { combineReducers } from 'redux';
import {postsReducer, postReducer} from './postReducer'
import {categoriesReducer} from './catReducer'
import {commentsReducer} from './commentsReducer'
import {filterReducer} from './filtersReducer'
import {sortByReducer, sortByCommentReducer } from './sortByReducer'


export default combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  comments: commentsReducer,
  post: postReducer,
  sortBy: sortByReducer,
  sortByComment: sortByCommentReducer,
  filter: filterReducer
});
