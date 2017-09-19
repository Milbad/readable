import React from 'react'
import {updateComment} from '../Actions/commentsActions'
import { withRouter  } from 'react-router'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { getBody, renderTextFieldBody, required} from '../Utils/helpers'
import Back from 'mui-icons/fontawesome/arrow-left'
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm } from 'redux-form'


class EditCommentForm extends React.Component {

render () {
  const { valid, comments, updateComment, history } = this.props
  return (
    <div>
      <FloatingActionButton mini children={<Back/>} onClick={() => {
      history.goBack()
    }}/>
      {comments && (

        <div className='center'>
          <h2 className='row text-align-center'>Edit a Comment</h2>
          <form >
            <Field
              validate={required}
              ref='bodyInput' name="body" component={renderTextFieldBody} label="Body" />
          </form>
          <RaisedButton disabled={!valid? true:false} primary type="submit" label='submit' onClick={()=> {
          let input = {
            id: comments.id,
            parentId: comments.parentId,
            body: this.refs.bodyInput.value
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
  let body = getBody(state.comments, props.match.params.comment_id)

  if(props.match.params.comment_id && body) {
    return {
      comments: state.comments.find(item =>item.id === props.match.params.comment_id),
      initialValues: {body}
    }
  }
  else {
    return {
     comments: state.comments.find(item =>item.id === props.match.params.comment_id),
   }
  }
}

EditCommentForm = reduxForm({
  form: 'editCommentForm'
})(EditCommentForm)



export default withRouter(connect(mapStateToProps, {updateComment})(EditCommentForm));
