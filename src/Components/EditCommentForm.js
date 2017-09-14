import React from 'react'
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
        <label  htmlFor="body"><b>Body</b></label>
        <TextField multiLine={true}  name='bodyInput' ref='bodyInput' defaultValue={comments.body} fullWidth={true}/>
      <RaisedButton primary type="submit" label='submit' onClick={()=> {
        let input = {
          id: comments.id,
          parentId: comments.parentId,
          body: this.refs.bodyInput.input.refs.input.value
        };
        updateComment(input);
      }}/>
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
