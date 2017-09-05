const api = 'http://localhost:5001'


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}
 export function getPost(id){
   if(id){
     post(id).then((post) => {
       console.log(post.title)
       return post.title
     })
   }
 }

 const post = (id) =>
 fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)


export function getcomments (id) {
  if(id){
    getc(id).then((comments) => {
      let n = comments.length
      return n
    })
  }
}

 const getc = (id) =>
 fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
/*export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query, maxResults) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.books)
*/
