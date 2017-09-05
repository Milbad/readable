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

export const  requestComments = () => {
  return {
    type: actionTypes.REQUEST_COMMENTS,
  }
}

export const increaseScoreSuccessComment = (comment) => {
  console.log(comment)
  return {
    type: actionTypes.INCREASE_SCORE_COMMENT,
  }
}

export const decreaseScoreSucessComment = (comment) => {
  return {
    type: actionTypes.DECREASE_SCORE_COMMENT,
  }
}

export const receiveCommentsById = (comments) => {
  return {
    type: actionTypes.RECEIVE_COMMENTS_BY_ID,
     comments
  }
}

export const receiveComments = (comments) => {
  return {
    type: actionTypes.RECEIVE_COMMENTS,
     comments
  }
}

export const updateCommentSuccess = (comment) => {
  return {
    type: actionTypes.UPDATE_COMMENT_SUCCESS
  }
}

export const createCommentSuccess = (comment) => {
  return {
    type: actionTypes.CREATE_COMMENT_SUCCESS,
    comment
  }
}

export const deleteCommentSuccess = (comment) => {
  return {
    type: actionTypes.DELETE_COMMENT,
  }
}

let NewArray =[]
let ArrayofComments =[]

const getArrayOfComments = (json) => {
    NewArray = NewArray.concat(json)
    return NewArray
}

export const fetchCommentsById = (postId) => {
  return (dispatch) => {
    dispatch(requestComments())

    return fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        dispatch(receiveCommentsById(json))
      )
  }
}

export const fetchComments = function(NewArray=[]) {

  return (dispatch) => {

    dispatch (requestPosts())

    return fetch(`${api}/posts`, { headers })
    .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json => {
        const postIds = json.map(post => post.id)
        postIds.forEach(id => {
          return fetch(`${api}/posts/${id}/comments`, { headers })
          .then(
              response => response.json(),
              error => console.log('An error occured.', error)
            )
            .then(json =>   NewArray = NewArray.concat(json)
              //ArrayofComments = getArrayOfComments(json),

            )
            .then (NewArray => dispatch(receiveComments(NewArray)))
        })
      })
  }
}

export const updateComment = (input) => {
  const id = input.id
  const parentId= input.parentId
  const timestamp = Date.now()
  const body = input.body

  return (dispatch) => {
    return fetch(`${api}/comments/${id}`, {
      method: 'PUT',
      headers:{
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ timestamp,body })
  }).then(
          res => res.json(),
          error => console.log('An error occured.', error)
        )
    .then(json =>
      dispatch(updateCommentSuccess(json)),
      dispatch(fetchComments())
    )
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
      headers:{
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, timestamp,body,author, parentId })
  }).then(
          res => res.json(),
          error => console.log('An error occured.', error)
        )
    .then(json =>
      dispatch(createCommentSuccess(json)),
    )
  }
}

export const deleteComment = (comment) => {
  const id = comment.id
  return (dispatch) => {
    return fetch(`${api}/comments/${id}`, {
      method: 'DELETE',
      headers
  })
    .then(json =>
        console.log(json),
        dispatch(deleteCommentSuccess()),
        dispatch(fetchComments())
    )
  }
}


export const downVoteComment = (comment) => {
  const id = comment.id
  const option='downVote'
  console.log(id)
  return (dispatch) => {
    return fetch(`${api}/comments/${id}`, {
      method: 'POST',
      headers:{
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({option})
  })
    .then(res => console.log(res))


  }
}

export const upVoteComment = (comment) => {
  const id = comment.id
  const option = 'upVote'
  return (dispatch) => {

    return fetch(`${api}/comments/${id}`, {
      method: 'POST',
      headers:{
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({option})
  }).then(
          res => console.log(res)
        )

  }
}
