import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import 'font-awesome/css/font-awesome.min.css'
import * as postsActions from './Actions/postsActions'
import * as commentsActions from './Actions/commentsActions'
import App from './Components/App';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import reducer  from './Reducers'
import { Provider } from 'react-redux'


const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(postsActions.fetchPosts());
store.dispatch(postsActions.fetchCategories());
store.dispatch(commentsActions.fetchComments());




ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
