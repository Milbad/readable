import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import {createComment} from '../Actions/commentsActions'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Back from 'mui-icons/fontawesome/arrow-left'

class AddComment extends React.Component {

  render(){
    const { createComment, history } = this.props
    return (
      <div>
        <FloatingActionButton mini children={<Back/>} onClick={() => {
        history.goBack()
      }}/>
      <div className='center'>
      <h2 className='row text-align-center'>Add a comment</h2>
      <form id="formAddComment" onSubmit={e => {
            e.preventDefault();
            // Assemble data into object
            let input = {
              id: Math.random().toString(36).substr(-8),
              timestamp: Date.now(),
              body: this.refs.bodyInput.value,
              author: this.refs.authorInput.value,
              parentId: this.props.match.params.parentId
            };
            // Call method from parent component
            // to handle submission
            createComment(input);
            // Reset form
            e.target.reset();
          }}
      >

          <label><b>Author</b></label>
          <input
              className='row'
              size='52'
              type="text"
              name="author"
              ref='authorInput'/>
        <br/>
          <label><b>Body</b></label>
            <textarea
              className='row'
              rows="4" cols="50"
              type="text"
              name="body"
              ref='bodyInput' />
      </form>
      <button  className='btn btn-form' type="submit" form="formAddComment" aria-label='edit'>
        <FontAwesome
          name='fa-pencil-square-o'
          className='fa-pencil-square-o'
      /> Submit
    </button>
    </div>
  </div>
    )
  }
}
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
