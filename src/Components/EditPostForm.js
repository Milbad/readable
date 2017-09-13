import React from 'react'
import FontAwesome from 'react-fontawesome'
import * as PostsActions from '../Actions/postsActions'
import { withRouter  } from 'react-router'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import TextField from 'material-ui/TextField'
import Back from 'mui-icons/fontawesome/arrow-left'
import RaisedButton from 'material-ui/RaisedButton'

class EditPostForm extends React.Component {


render () {
  const { post, updatePost } = this.props

  return (
    <div>
      <FloatingActionButton mini children={<Back/>} onClick={() => {
      this.props.history.goBack()
    }}/>
    {post && (
    <div className='center'>
    <h2 className='row text-align-center'>Edit a Post</h2>
      <label htmlFor="title"><b>Title</b></label>
      <TextField name='titleInput' ref='titleInput' defaultValue={post.title} fullWidth={true}/>
      <br/>
      <label  htmlFor="body"><b>Body</b></label>
      <TextField multiLine={true}  name='bodyInput' ref='bodyInput' defaultValue={post.body} fullWidth={true}/>
    <RaisedButton primary type="submit" label='EDIT' onClick={()=> {
      let input = {
        id: post.id,
        title: this.refs.titleInput.input.value,
        body: this.refs.bodyInput.input.refs.input.value
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
  if(props.match.params.post_id) {
    return {
      post: state.posts.find(item =>item.id === props.match.params.post_id)
    }
  }
}
// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      updatePost: items => dispatch(PostsActions.updatePost(items))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostForm));
