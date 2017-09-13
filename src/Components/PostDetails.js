import React from 'react'
import  EditDelete  from './EditDelete'
import  CommentList  from './CommentList'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import { getdate } from '../Utils/helpers'
import FontAwesome from 'react-fontawesome'
import { withRouter } from 'react-router'
import * as PostsActions from '../Actions/postsActions'
import  VotingMechanism  from './VotingMechanism'
import Paper from 'material-ui/Paper'


const nonDeletedPost = (posts) => {
    return posts.filter(post => post.deleted === false)
}

class PostDetails extends React.Component{


    render(){
      const { post, comments } = this.props

    return(
      <div>
        <Link style={{fontSize: '30px' ,textDecoration: 'none', color:'dodgerblue' }} to='/'>
          <FontAwesome name='fa-arrow-circle-left' className='fa-arrow-circle-left' />
        </Link>
        {!post &&(
          <h3>No post available</h3>
        )}
        {post && (
        <div>
        <Paper className='center'>
          <h2 className='row text-align-center' style={{padding: '10px'}}>Post Details</h2>
          <div className=' margin display-flex padding row '>
              <div className='col-9'>
                <h2>{post.title}</h2>
                <h3>{post.body}</h3>
                <div><i>Posted by {post.author} on {getdate(post.timestamp)}</i></div>
                <div>Category: {post.category}</div>
                <span>Current score:<VotingMechanism post={post} /></span>
                <div>{comments.length} comments</div>
            </div>
            <EditDelete post={post} />
          </div>
        </Paper>
        <CommentList comments={comments} post={post}/>
      </div>
        )}
    </div>
    )
  }

}
// Map state to props
const mapStateToProps = (state, props) => {
  if(props.match.params.post_id) {
    return {
      comments: state.comments.filter(item =>item.parentId === props.match.params.post_id),
      post: nonDeletedPost(state.posts).find(post =>post.id === props.match.params.post_id)
    }
  }
}
// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      fetchPostById: postId => dispatch(PostsActions.fetchPostById(postId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));
