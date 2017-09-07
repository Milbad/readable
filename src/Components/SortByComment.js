import React from 'react'
import { connect } from 'react-redux'
import * as filtersActions from '../Actions/filtersActions'

class SortByComment extends React.Component{

  render(){
    const { setSortByComment } = this.props
    return(
      <div className='sort-by-center'>
        <a  className='sort-by' aria-label='sort by'>
        Sort by
          <select onChange={e => {
          e.preventDefault()
          setSortByComment(e.target.value)
        }} className='select-sort'>
            <option value='voteScore'>score (desc)</option>
            <option value='timestamp'>date (desc)</option>
          </select>
      </a>
  </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    sortByComment: state.sortByComment
  }
}

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      setSortByComment: str => dispatch(filtersActions.setSortByComment(str))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortByComment)
