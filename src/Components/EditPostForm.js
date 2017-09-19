import React from 'react'
import {updatePost} from '../Actions/postsActions'
import { withRouter  } from 'react-router'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { getBody, getTitle, renderTextField, renderTextFieldBody, required} from '../Utils/helpers'
import Back from 'mui-icons/fontawesome/arrow-left'
import RaisedButton from 'material-ui/RaisedButton'


class EditPostForm extends React.Component {

render () {
  const { valid, post, updatePost } = this.props

  return (
    <div>
      <FloatingActionButton mini children={<Back/>} onClick={() => {
      this.props.history.goBack()
    }}/>
    {post && (
    <div className='center'>
    <h2 className='row text-align-center'>Edit a Post</h2>
    <form >
      <Field validate={required}
        ref='titleInput' name="title" component={renderTextField} label="Title" />
      <Field validate={required}
        ref='bodyInput' name="body" component={renderTextFieldBody} label="Body" />
    </form>
    <RaisedButton disabled={!valid? true:false} primary type="submit" label='submit' onClick={()=> {
      let input = {
        id: post.id,
        title: this.refs.titleInput.value,
        body: this.refs.bodyInput.value
      };
      updatePost(input);
    }}/>
    </div>
    )}
  </div>

  )
}
}

// Map state to props
const mapStateToProps = (state, props) => {
  let body = getBody(state.posts, props.match.params.post_id)
  let title = getTitle(state.posts, props.match.params.post_id)
  if(props.match.params.post_id && title) {
    return {
      post: state.posts.find(item =>item.id === props.match.params.post_id),
      initialValues: {title,body}
    }
  }
  else {
    return {
     posts: state.posts.find(item =>item.id === props.match.params.post_id),
   }
  }
}
EditPostForm = reduxForm({
  form: 'editPostForm'
})(EditPostForm)



export default withRouter(connect(mapStateToProps, {updatePost})(EditPostForm));
