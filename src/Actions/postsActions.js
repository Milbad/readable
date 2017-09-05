import * as actionTypes from './actionsTypes';

const api = 'http://localhost:5001'

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}



export const  requestPosts= () => {
  return {
    type: actionTypes.REQUEST_POSTS,
  }
}


export const  requestPost= () => {
  return {
    type: actionTypes.REQUEST_POST,
  }
}
export const receivePosts = (json) => {
  return {
    type: actionTypes.RECEIVE_POSTS,
    posts: json
  }
}

export const increaseScoreSuccess = (post) => {
  return {
    type: actionTypes.INCREASE_SCORE,
    post
  }
}

export const decreaseScoreSucess = (post) => {
  return {
    type: actionTypes.DECREASE_SCORE,
    post
  }
}

export const createPostSuccess = (post) => {
  return {
    type: actionTypes.CREATE_POST_SUCCESS,
    post
  }
}
export const updatePostSuccess = (post) => {
  console.log(post)
  return {
    type: actionTypes.UPDATE_POST_SUCCESS
  }
}

export const fetchPostByIdSuccess = (post) => {
  return {
    type: actionTypes.FETCH_POST_BY_ID_SUCCESS,
    post
  }
}

export const deletePost = (post) => {
  return {
    type: actionTypes.DELETE_POST,
    post
  }
}

export const fetchPosts = (posts) => {
  return (dispatch) => {

    dispatch (requestPosts())

    return fetch(`${api}/posts`, { headers })
    .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>{
        dispatch(receivePosts(json))
      }

      )
  }
}

export const createPost = (input) => {

  const id = input.id
  const timestamp = input.timestamp
  const title = input.title
  const body = input.body
  const author = input.author
  const category = input.category

  return (dispatch) => {
    return fetch(`${api}/posts`, {
      method: 'POST',
      headers:{
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, timestamp, title,body,author, category })
  }).then(
          res => res.json(),
          error => console.log('An error occured.', error)
        )
    .then(json =>
      dispatch(createPostSuccess(json))
    )
  }
}

export const updatePost = (input) => {
  const id = input.id
  const title = input.title
  const body = input.body

  return (dispatch) => {
    return fetch(`${api}/posts/${id}`, {
      method: 'PUT',
      headers:{
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title,body })
  }).then(
          res => res.json(),
          error => console.log('An error occured.', error)
        )
    .then(json =>
      dispatch(updatePostSuccess(json)),
      dispatch(fetchPosts())
    )
  }
}

export const upVote = (post) => {

  const id = post.id
  const option='upVote'

  return (dispatch) => {
    return fetch(`${api}/posts/${id}`, {
      method: 'POST',
      headers:{
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({option})
  }).then(
          res => res.json(),
          error => console.log('An error occured.', error)
        )
    .then(json =>
        dispatch(increaseScoreSuccess(json)),
        dispatch(fetchPosts())
    )
  }
}

export const deleteItem = (post) => {
  const id = post.id
  return (dispatch) => {
    return fetch(`${api}/posts/${id}`, {
      method: 'DELETE',
      headers: headers
  })
    .then(json =>
        dispatch(fetchPosts())
    )
  }
}

export const downVote = (post) => {

  const id = post.id
  const option='downVote'

  return (dispatch) => {
    return fetch(`${api}/posts/${id}`, {
      method: 'POST',
      headers:{
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({option})
  }).then(
          res => res.json(),
          error => console.log('An error occured.', error)
        )
    .then(json =>
        dispatch(decreaseScoreSucess(json)),
      dispatch(fetchPosts())
    )
  }
}


export const fetchPostById = (postId) => {
  return (dispatch) => {

    dispatch (requestPost())

    return fetch(`${api}/posts/${postId}`, { headers })
    .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        dispatch(fetchPostByIdSuccess(json))
      )
  }
}
//categories

export const  requestCategories= () => {
  return {
    type: actionTypes.REQUEST_CATS,
  }
}

export const receiveCategories = (json) => {
  return {

    type: actionTypes.RECEIVE_CATS,
    categories: json
  }
}

export const fetchCategories = (cats) => {
  return (dispatch) => {

    dispatch (requestCategories())

    return fetch(`${api}/categories`, { headers })
    .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        dispatch(receiveCategories(json.categories))
      )
  }
}
