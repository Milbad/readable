import React from 'react'
import { connect } from 'react-redux'
import { renderTextField, renderTextFieldBody, required} from '../Utils/helpers'
import { createComment } from '../Actions/commentsActions'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Back from 'mui-icons/fontawesome/arrow-left'
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm } from 'redux-form'


//const required = value => (value ? undefined : 'Required')

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
          <Field  validate={required} ref='authorInput' name="author" component={renderTextField} label="Author"/>
          <Field  validate={required} ref='bodyInput' name="body" component={renderTextFieldBody} label="Body"/>
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
const mapStateToProps = ({commentsReducer}) => {
    return {commentsReducer}
}


export default connect(mapStateToProps, {createComment})(AddComment);
