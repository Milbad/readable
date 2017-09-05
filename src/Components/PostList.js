import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'
import { getdate } from '../Utils/helpers'
import  EditDelete  from './EditDelete'
import  VotingMechanism  from './VotingMechanism'



const getFilteredPosts = (posts, filter) => {
  if(filter === 'SHOW_ALL') {
      return posts.filter(post => post.deleted === false)
    }
    else {
      return (posts.filter(post => post.category === filter.toLowerCase())).filter(post => post.deleted === false)
    }

}

const getCommentsLength = (post, comments) => {
  let cl= comments.filter(item =>item.parentId === post.id)
  return cl.length
}


class PostList extends React.Component{


  render(){
    const { posts, comments} = this.props
    return(
      <div className='center'>
      {posts.length === 0 && (
        <h2>0 post found for that category</h2>
      )}
      <ul className='row' >
      {posts.map(post => (
        <li key={post.id} className=' margin display-flex padding row border-bottom'>

          <div className='col-6'>
            <Link style={{ textDecoration: 'none' , color:'black'}} className='post-title' to={`/${post.category}/${post.id}`}>
            <h3 >{post.title}</h3>
            </Link>
            <div><i>Posted by {post.author} on {getdate(post.timestamp)}</i></div>
            <div>{getCommentsLength(post, comments)} comments</div>
          </div>
          <VotingMechanism post={post} />
          <EditDelete post={post} />

        </li>
      ))}
      </ul>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: getFilteredPosts(state.posts, state.filter).sort(sortBy(state.sortBy)),
    comments: state.comments
  }
}


export default connect(mapStateToProps)(PostList)
