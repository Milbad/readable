import React from 'react'
import  EditDeleteComment  from './EditDeleteComment'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import { getdate } from '../Utils/helpers'
import  VotingMechanism  from './VotingMechanism'
import  VotingMechanismComment  from './VotingMechanismComment'

class CommentList extends React.Component{

    render(){
    const {  comments, post } = this.props

    return(
      <div>
        <div className='center'>
          <h3 className='title row text-align-left'>Comments for this post</h3>
          {comments  && (
            <div>
            <ol className='row'>
            {comments.map(comment => (
              <li className='margin display-flex padding row' key={comment.id}>
                <div className='col-6'>
                <div>{comment.body}</div>
                <div><i>Posted by {comment.author} on {getdate(comment.timestamp)}</i></div>
                <span>Current score:<VotingMechanismComment comment={comment} /></span>
              </div>
              <br />
                <EditDeleteComment comment={comment} />
              </li>
            ))}
          </ol>
          <Link to={`/addcomment/${post.id}`} className='btn'>Add a comment</Link>
        </div>
        )}
      </div>
    </div>
    )
  }

}
// Map state to props
const mapStateToProps = (state, props) => {
    return {
      comments: props.comments,
      post: props.post
    }

}


export default connect(mapStateToProps)(CommentList);
