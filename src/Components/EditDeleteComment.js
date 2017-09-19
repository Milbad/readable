import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Pencil from 'mui-icons/fontawesome/pencil'
import Trash from 'mui-icons/fontawesome/trash-o'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteComment} from '../Actions/commentsActions'



class EditDeleteComment extends React.Component{

  render(){
    const { deleteComment, comment} = this.props
    return(
      <div className='col-4'>
        {comment && (
        <div className='btn btn-margin'>
          <div className='btn-margin'>
            <RaisedButton style={{width:'120px'}} label='Edit' primary containerElement={<Link to={`/editcomment/${comment.id}`}/>}>
              <Pencil style={{height:'13px' ,textDecoration: 'none', color:'white' }}/>
            </RaisedButton>
          </div>
          <div className='btn-margin'>
            <RaisedButton  style={{width:'120px'}} label='Delete' primary onClick={e => {
              e.preventDefault()
              deleteComment(comment)
            }}>
              <Trash style={{height:'13px' ,textDecoration: 'none', color:'white' }}/>
            </RaisedButton>
          </div>
        </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    comment: props.comment,
  }
}




export default connect(mapStateToProps, {deleteComment})(EditDeleteComment)
