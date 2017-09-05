import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteComment} from '../Actions/commentsActions'



class EditDeleteComment extends React.Component{

  render(){
    const { deleteComment, comment} = this.props
    console.log(comment)
    return(
          <div className='col-4 display-flex'>
            { comment && (
            <div className='display-flex'>
            <Link  className='btn' aria-label='edit' to={`/editcomment/${comment.id}`}>
              <FontAwesome
              name='fa-pencil-square-o'
              className='fa-pencil-square-o'
            /> Edit
          </Link>
          <a className='btn' aria-label='delete' onClick={e => {
            e.preventDefault()
            deleteComment(comment)
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
  console.log(props)
  return {
    comment: props.comment,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteComment: (comment) => dispatch(deleteComment(comment))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(EditDeleteComment)
