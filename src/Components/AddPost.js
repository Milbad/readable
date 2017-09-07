import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {createPost} from '../Actions/postsActions'


class AddPost extends React.Component {

  render(){
    const { categories, createPost } = this.props
    return (
      <div>

        <Link style={{fontSize: '30px' ,textDecoration: 'none', color:'dodgerblue' }} to='/'>
          <FontAwesome name='fa-arrow-circle-left' className='fa-arrow-circle-left' />
        </Link>
      <div className='center'>
      <h2 className='row text-align-center'>Add a Post</h2>
      <form id="formAddPost" onSubmit={e => {
            e.preventDefault();
            // Assemble data into object

            let input = {
              id: Math.random().toString(36).substr(-8),
              timestamp: Date.now(),
              title: this.refs.titleInput.value,
              body: this.refs.bodyInput.value,
              author: this.refs.authorInput.value,
              category: this.refs.categoryInput.value
            };
            // Call method from parent component
            // to handle submission
            createPost(input);

            // Reset form
            e.target.reset();
          }}
      >
          <label><b>Title</b></label>
          <input
            className='row'
            size='52'
            type="text"
            name="title"
            ref='titleInput'/>
          <br/>
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
          <label><b>Category </b></label>
            <select type="text"
            name="category"
            ref='categoryInput'>
              {categories.map(categorie => (
                <option key={categorie.name}>{categorie.name}</option>
              ))}
            </select>
      </form>
      <button  className='btn btn-form' type="submit" form="formAddPost" aria-label='edit'>
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
      categories: state.categories
    }
}

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      createPost: item => dispatch(createPost(item))
    }
}
export default (connect(mapStateToProps, mapDispatchToProps)(AddPost));
