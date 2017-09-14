import React from 'react'
import { connect } from 'react-redux'
import {createComment} from '../Actions/commentsActions'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Back from 'mui-icons/fontawesome/arrow-left'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Field, reduxForm } from 'redux-form'


const required = value => (value ? undefined : 'Required')

const renderTextField = ({ input, label, meta: { touched, error } }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    fullWidth
    errorText={touched && error}
    {...input}

  />
)

const renderTextFieldBody = ({ input, label, meta: { touched, error } }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    fullWidth
    multiLine
    errorText={touched && error}
    {...input}
  />
)

class AddComment extends React.Component {

  render(){
    const { valid, createComment, history, reset } = this.props
    return (
      <div>
        <FloatingActionButton mini children={<Back/>} onClick={() => {
        history.goBack()
      }}/>
      <div className='center'>
      <h2 className='row text-align-center'>Add a comment</h2>
      <form id="formAddComment" >
        <div>
        <Field  validate={required} ref='authorInput' name="author" component={renderTextField} label="Author"/>
        </div>
        <div>
        <Field  validate={required} ref='bodyInput' name="body" component={renderTextFieldBody} label="Body"/>
        </div>

      </form>

    <RaisedButton primary disabled={!valid? true:false} type="submit" label='submit' onClick={()=> {

      let input = {
        id: Math.random().toString(36).substr(-8),
        timestamp: Date.now(),
        body: this.refs.bodyInput.value,
        author: this.refs.authorInput.value,
        parentId: this.props.match.params.parentId
      }
      createComment(input)
      reset()
    }}/>
    </div>
  </div>
    )
  }
}

AddComment = reduxForm({
  form: 'addComment'
})(AddComment)
// Map state to props
const mapStateToProps = (state, ownProps) => {
    return {
      comments: state.comments
    }
}

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      createComment: item => dispatch(createComment(item))
    }
}
export default (connect(mapStateToProps, mapDispatchToProps)(AddComment));
