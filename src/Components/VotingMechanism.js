import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import {votePost} from '../Actions/postsActions'


class VotingMechanism extends React.Component{

  render(){
    const { post, votePost } = this.props
    return(

          <span className= 'col-2 margin-top text-align-center'>
              <a aria-label='vote plus'>
                <FontAwesome
                  name='fa-plus'
                  className='fa-plus'
                  style={{ padding: '5px' , cursor:'pointer'}}
                  onClick={e => {
                    e.preventDefault()
                    votePost(post, 'upVote')
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
                    votePost(post, 'downVote')
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




export default connect(mapStateToProps, {votePost})(VotingMechanism)
