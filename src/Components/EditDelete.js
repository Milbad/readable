import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteItem} from '../Actions/postsActions'



class EditDelete extends React.Component{

  render(){

    const {post, deleteItem} = this.props

    return(

          <div className='col-4 display-flex'>
            {post && (
            <div>
            <Link  className='btn' aria-label='edit' to={`/edit/${post.id}`}>
              <FontAwesome
              name='fa-pencil-square-o'
              className='fa-pencil-square-o'
            /> Edit
          </Link>
          <a className='btn' aria-label='delete' onClick={e => {
            e.preventDefault()
            deleteItem(post)
          }}> <FontAwesome
              name='trash-o'
          className='trash-o'
           /> Delete</a>
         </div>
           )}
          </div>

    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    post:props.post
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteItem: (post) => dispatch(deleteItem(post))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(EditDelete)
