import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import {upVoteComment, downVoteComment} from '../Actions/commentsActions'


class VotingMechanismComment extends React.Component{

  render(){
    const { comment, upVote, downVote } = this.props
    return(

          <span className= 'col-2 margin-top text-align-center'>
              <a aria-label='vote plus'>
                <FontAwesome
                  name='fa-plus'
                  className='fa-plus'
                  style={{ padding: '5px' , cursor:'pointer'}}
                  onClick={e => {
                    e.preventDefault()
                    upVoteComment(comment)
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
                    downVoteComment(comment)
                  }}
                />
              </a>
          </span>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(state)
    return {
      comment: props.comment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      upVoteComment: (comment) => dispatch(upVoteComment(comment)),
      downVoteComment: (comment) => dispatch(downVoteComment(comment))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(VotingMechanismComment)
