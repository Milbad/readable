import * as actionTypes from './actionsTypes'
import {requestPosts} from '../Actions/postsActions'

const api = 'http://localhost:5001'

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const requestComments = () => {
  return {type: actionTypes.REQUEST_COMMENTS}
}

export const voteSucessComment = () => {
  return {type: actionTypes.VOTE_COMMENT}
}

export const receiveComments = (comments) => {
  return {type: actionTypes.RECEIVE_COMMENTS, comments}
}

export const updateCommentSuccess = (comment) => {
  return {type: actionTypes.UPDATE_COMMENT_SUCCESS}
}

export const createCommentSuccess = (comment) => {
  return {type: actionTypes.CREATE_COMMENT_SUCCESS, comment}
}

export const deleteCommentSuccess = (comment) => {
  return {type: actionTypes.DELETE_COMMENT}
}

export const fetchComments = function(NewArray = []) {

  return (dispatch) => {

    dispatch(requestPosts())

    return fetch(`${api}/posts`, {headers}).then(response => response.json(), error => console.log('An error occured.', error)).then(json => {
      const postIds = json.map(post => post.id)
      postIds.forEach(id => {
        return fetch(`${api}/posts/${id}/comments`, {headers}).then(response => response.json(), error => console.log('An error occured.', error)).then(json => NewArray = NewArray.concat(json)).then(NewArray => dispatch(receiveComments(NewArray)))
      })
    })
  }
}

export const updateComment = (input) => {
  const id = input.id
  const timestamp = Date.now()
  const body = input.body

  return (dispatch) => {
    return fetch(`${api}/comments/${id}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({timestamp, body})
    }).then(res => res.json(), error => console.log('An error occured.', error)).then(json => dispatch(updateCommentSuccess(json)), dispatch(fetchComments()), window.alert("Comment updated!"))
  }
}

export const createComment = (input) => {

  const id = input.id
  const timestamp = input.timestamp
  const body = input.body
  const author = input.author
  const parentId = input.parentId

  return (dispatch) => {
    return fetch(`${api}/comments`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, timestamp, body, author, parentId})
    }).then(res => res.json(), error => console.log('An error occured.', error)).then(json => dispatch(createCommentSuccess(json)), window.alert("Comment created! \n You can go back to the post detail or create a new one."))
  }
}

export const deleteComment = (comment) => {
  const id = comment.id
  return (dispatch) => {
    return fetch(`${api}/comments/${id}`, {
      method: 'DELETE',
      headers
    }).then(json => dispatch(deleteCommentSuccess()), dispatch(fetchComments()))
  }
}

export const voteComment = (comment, option) => {
  const id = comment.id

  return (dispatch) => {
    return fetch(`${api}/comments/${id}`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({option})
    }).then(res => res.json(), error => console.log('An error occured.', error)).then(json => dispatch(voteSucessComment()), dispatch(fetchComments()))
  }
}
