import React from 'react'
import  EditDeleteComment  from './EditDeleteComment'
import  SortByComment  from './SortByComment'
import sortBy from 'sort-by'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import { getdate } from '../Utils/helpers'
import RaisedButton from 'material-ui/RaisedButton'
import  VotingMechanismComment  from './VotingMechanismComment'

class CommentList extends React.Component{

    render(){
    const {  comments, post } = this.props

    return(
      <div>
        <div className='center'>
          {comments.length === 0 && (
            <h3>No comments found for this post</h3>
          )}
          {comments.length !== 0 && (
            <div>
              <h3 className='title text-align-left'>Comments for this post</h3>
              <SortByComment />
              <div>
                <ol>
                  {comments.map(comment => (
                    <li className='margin display-flex padding' key={comment.id}>
                      <div className='col-9'>
                        <div>{comment.body}</div>
                        <div><i>Posted by {comment.author} on {getdate(comment.timestamp)}</i></div>
                        <span>Current score:<VotingMechanismComment comment={comment} /></span>
                      </div>
                      <br />
                      <EditDeleteComment comment={comment} />
                    </li>
                  ))}
                </ol>

              </div>
            </div>
          )}
      <RaisedButton  fullWidth={true} label='Add a comment' primary containerElement={<Link to={`/addcomment/${post.id}`}/>}/>
        </div>
    </div>
    )
  }

}
// Map state to props
const mapStateToProps = (state, props) => {
    return {
      comments: props.comments.sort(sortBy('-'+ state.sortByComment)),
      post: props.post
    }

}


export default connect(mapStateToProps)(CommentList);
