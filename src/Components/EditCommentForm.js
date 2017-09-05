import React from 'react'
import FontAwesome from 'react-fontawesome'
import * as CommentsActions from '../Actions/commentsActions'
import { withRouter  } from 'react-router'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'


class EditCommentForm extends React.Component {


render () {
  const { comments, updateComment } = this.props

  return (
    <div>
    <Link style={{fontSize: '30px' ,textDecoration: 'none', color:'dodgerblue' }} to='/'>
      <FontAwesome name='fa-arrow-circle-left' className='fa-arrow-circle-left' />
    </Link>
    {comments && (
    <div className='center'>
    <h2 className='row text-align-center'>Edit a Comment</h2>
    <form onSubmit={e => {
          e.preventDefault();
          let input = {
            id: comments.id,
            parentId: comments.parentId,
            body: this.refs.bodyInput.value
          };
            updateComment(input);
            e.target.reset();

        }} >
      <br/>
      <label  htmlFor="body"><b>Body</b></label>
      <div>
        <textarea className='row'   rows="4" cols="50" ref='bodyInput' type='text' defaultValue={comments.body}></textarea>
      </div>
      <br/>
      <div className="input-group">
        <div className="col-sm-offset-2 col-sm-10">
          <input type="submit" className='btn' value='Edit'/>
        </div>
      </div>
    </form>
    </div>
    )}
  </div>

  )
}
}

// Map state to props
const mapStateToProps = (state, props) => {
  if(props.match.params.comment_id) {
    return {
      comments: state.comments.find(item =>item.id === props.match.params.comment_id)
    }
  }
}
// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      updateComment: items => dispatch(CommentsActions.updateComment(items))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCommentForm));
