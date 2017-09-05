import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import {upVote, downVote} from '../Actions/postsActions'


class VotingMechanism extends React.Component{

  render(){
    const { post, upVote, downVote } = this.props
    return(

          <span className= 'col-2 margin-top text-align-center'>
              <a aria-label='vote plus'>
                <FontAwesome
                  name='fa-plus'
                  className='fa-plus'
                  style={{ padding: '5px' , cursor:'pointer'}}
                  onClick={e => {
                    e.preventDefault()
                    upVote(post)
                  }}
                />
              </a>{post.voteScore}
              <a aria-label='vote minus'>
                <FontAwesome
                  name='fa-minus'
                  className='fa-minus'
                  style={{ padding: '5px', cursor:'pointer' }}
                  onClick={e => {
                    e.preventDefault()
                    downVote(post)
                  }}
                />
              </a>
          </span>
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
      upVote: (post) => dispatch(upVote(post)),
      downVote: (post) => dispatch(downVote(post))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(VotingMechanism)
