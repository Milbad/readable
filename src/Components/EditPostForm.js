import React from 'react'
import FontAwesome from 'react-fontawesome'
import * as PostsActions from '../Actions/postsActions'
import { withRouter  } from 'react-router'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'


class EditPostForm extends React.Component {


render () {
  const { post, updatePost } = this.props

  return (
    <div>
    <Link style={{fontSize: '30px' ,textDecoration: 'none', color:'dodgerblue' }} to='/'>
      <FontAwesome name='fa-arrow-circle-left' className='fa-arrow-circle-left' />
    </Link>
    {post && (
    <div className='center'>
    <h2 className='row text-align-center'>Edit a Post</h2>
    <form onSubmit={e => {
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
  console.log(props)
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
