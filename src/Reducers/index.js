import { combineReducers } from 'redux';
import {postsReducer, postReducer} from './postReducer'
import {categoriesReducer} from './catReducer'
import {commentsReducer, commentsByIdReducer} from './commentsReducer'
import {filterReducer} from './filtersReducer'
import {sortByReducer} from './sortByReducer'


export default combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  comments: commentsReducer,
  post: postReducer,
  sortBy: sortByReducer,
  filter: filterReducer
});
