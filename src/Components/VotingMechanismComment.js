import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import {voteComment} from '../Actions/commentsActions'


class VotingMechanismComment extends React.Component{

  render(){
    const { comment, voteComment } = this.props
    return(

          <span className= 'col-2 margin-top text-align-center'>
              <a aria-label='vote plus'>
                <FontAwesome
                  name='fa-plus'
                  className='fa-plus'
                  style={{ padding: '5px' , cursor:'pointer'}}
                  onClick={e => {
                    e.preventDefault()
                    voteComment(comment, 'upVote')
                  }}
                />
              </a>{comment.voteScore}
              <a aria-label='vote minus'>
                <FontAwesome
                  name='fa-minus'
                  className='fa-minus'
                  style={{ padding: '5px', cursor:'pointer' }}
                  onClick={e => {
                    e.preventDefault()
                    voteComment(comment, 'downVote')
                  }}
                />
              </a>
          </span>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
      comment: props.comment
    }
}





export default connect(mapStateToProps, {voteComment})(VotingMechanismComment)
