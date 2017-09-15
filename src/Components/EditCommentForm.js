import React from 'react'
import * as CommentsActions from '../Actions/commentsActions'
import { withRouter  } from 'react-router'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import TextField from 'material-ui/TextField'
import Back from 'mui-icons/fontawesome/arrow-left'
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm } from 'redux-form'

const required = value => (value ? undefined : 'Required')


const getBody = (comments,id) => {
  if(comments && id){
    let bodyInit = comments.find(item =>item.id === id)
    if (bodyInit){
      return(bodyInit.body)
    }
  }
}

const renderTextFieldBody = ({ body, input, label, meta: { touched, error } }) => (
    <TextField
      hintText={label}
      multiLine={true}
      fullWidth={true}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
  />
  )

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
          <form >
            <div>
            <Field
              body={comments.body}
              validate={required}
              ref='bodyInput' name="body" component={renderTextFieldBody} label="Body" />
            </div>
          </form>
          <RaisedButton primary type="submit" label='submit' onClick={()=> {
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

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      updateComment: items => dispatch(CommentsActions.updateComment(items))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCommentForm));
