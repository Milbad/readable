import React from 'react'
import FontAwesome from 'react-fontawesome'
import * as PostsActions from '../Actions/postsActions'
import { withRouter  } from 'react-router'
import { connect } from 'react-redux'


class EditPostForm extends React.Component {


render () {
  const { post, updatePost } = this.props

  return (
    <div>
      <a style={{fontSize: '30px' ,textDecoration: 'none', color:'dodgerblue' }} onClick={e => {
      e.preventDefault()
      this.props.history.goBack()
    }}>
        <FontAwesome name='fa-arrow-circle-left' className='fa-arrow-circle-left' />
      </a>
    {post && (
    <div className='center'>
    <h2 className='row text-align-center'>Edit a Post</h2>
    <form   id="formEditPost" onSubmit={e => {
          e.preventDefault();
          let input = {
            id: post.id,
            title: this.refs.titleInput.value,
            body: this.refs.bodyInput.value
          };
            updatePost(input);
            e.target.reset();

        }} >
      <label htmlFor="title"><b>Title</b></label>
      <div>
        <input className='row' ref='titleInput' type='text' defaultValue={post.title} size='52'/>
      </div>
      <br/>
      <label  htmlFor="body"><b>Body</b></label>
      <div>
        <textarea className='row'   rows="4" cols="50" ref='bodyInput' type='text' defaultValue={post.body}></textarea>
      </div>
    </form>
    <button  className='btn btn-form' type="submit" form="formEditPost" aria-label='edit'>
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
