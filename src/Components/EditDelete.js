import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import Pencil from 'mui-icons/fontawesome/pencil'
import Trash from 'mui-icons/fontawesome/trash-o'
import {deleteItem} from '../Actions/postsActions'


class EditDelete extends React.Component{

  render(){

    const {post, deleteItem} = this.props

    return(
        <div className='col-4'>
          {post && (
          <div className='margin display-flex'>
            <div className='margin'>
              <RaisedButton style={{width:'120px'}} label='Edit' primary containerElement={<Link to={`/edit/${post.id}`}/>}>
                <Pencil style={{height:'13px' ,textDecoration: 'none', color:'white' }}/>
              </RaisedButton>
            </div>
            <div className='margin'>
              <RaisedButton style={{width:'120px'}} label='Delete' primary onClick={e => {
                e.preventDefault()
                deleteItem(post)
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
    post:props.post
  }
}




export default connect(mapStateToProps, {deleteItem})(EditDelete)
