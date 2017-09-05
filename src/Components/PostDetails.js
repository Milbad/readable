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

class PostDetails extends React.Component{

  componentDidMount(){
   this.props.fetchPostById(this.props.match.params.post_id)
   //add a fetch coment by id
}

    render(){
      const { post, comments } = this.props

    return(
      <div>
        <Link style={{fontSize: '30px' ,textDecoration: 'none', color:'dodgerblue' }} to='/'>
          <FontAwesome name='fa-arrow-circle-left' className='fa-arrow-circle-left' />
        </Link>
        <div className='center'>
          <h2 className='row text-align-center'>Post Details</h2>
          <div className=' margin display-flex padding row border'>
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
        </div>
        <CommentList comments={comments} post={post}/>
    </div>
    )
  }

}
// Map state to props
const mapStateToProps = (state, props) => {
  console.log(props)
  if(props.match.params.post_id) {
    return {
      comments: state.comments.filter(item =>item.parentId === props.match.params.post_id),
      post: state.post
    };
  }
};
// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      fetchPostById: postId => dispatch(PostsActions.fetchPostById(postId)),

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));
