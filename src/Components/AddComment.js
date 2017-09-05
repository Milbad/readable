import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {createComment} from '../Actions/commentsActions'

class AddComment extends React.Component {

  render(){
    const { comments, createComment } = this.props
    return (
      <div>
        <Link style={{fontSize: '30px' ,textDecoration: 'none', color:'dodgerblue' }} to='/'>
          <FontAwesome name='fa-arrow-circle-left' className='fa-arrow-circle-left' />
        </Link>
      <div className='center'>
      <h2 className='row text-align-center'>Add a comment</h2>
      <form onSubmit={e => {
            e.preventDefault();
            // Assemble data into object
            let input = {
              id: Math.random().toString(36).substr(-8),
              timestamp: Date.now(),
              body: this.refs.bodyInput.value,
              author: this.refs.authorInput.value,
              parentId: this.props.match.params.parentId
            };
            console.log(input)
            // Call method from parent component
            // to handle submission
            createComment(input);
          //  props.submitPost(input);
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
        <br/>
            <input type="submit" className="btn"/>
      </form>
    </div>
  </div>
    )
  }
}
// Map state to props
const mapStateToProps = (state, ownProps) => {
    return {
      comments: state.comments,
    }
}

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      createComment: item => dispatch(createComment(item)),
    }
}
export default (connect(mapStateToProps, mapDispatchToProps)(AddComment));
