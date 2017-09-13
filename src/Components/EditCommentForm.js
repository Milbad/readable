import React from 'react'
import FontAwesome from 'react-fontawesome'
import * as CommentsActions from '../Actions/commentsActions'
import { withRouter  } from 'react-router'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import TextField from 'material-ui/TextField'
import Back from 'mui-icons/fontawesome/arrow-left'
import RaisedButton from 'material-ui/RaisedButton'

class EditCommentForm extends React.Component {


render () {
  const { comments, updateComment, history } = this.props

  return (
    <div>
      <FloatingActionButton mini children={<Back/>} onClick={() => {
      history.goBack()
    }}/>
      {comments && (
        <div className='center'>
          <h2 className='row text-align-center'>Edit a Comment</h2>
          <form id="formEditComment" onSubmit={e => {
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
      </form>
    <button  className='btn btn-form' type="submit" form="formEditComment" aria-label='edit'>
      <FontAwesome
        name='fa-pencil-square-o'
        className='fa-pencil-square-o'
    /> Edit
  </button>
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
