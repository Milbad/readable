import React from 'react'
import { connect } from 'react-redux'
import * as filtersActions from '../Actions/filtersActions'

class SortBy extends React.Component{

  render(){
    return(
      <div className='sort-by-center'>
        <a  className='sort-by' aria-label='sort by'>
        Sort by
          <select onChange={e => {
          e.preventDefault()
          this.props.setSortBy(e.target.value)
        }} className='select-sort'>
            <option value='timestamp'>date (asc)</option>
            <option value='voteScore'>score (asc)</option>
          </select>
      </a>
  </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    sortBy: state.sortBy
  }
}

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      setSortBy: str => dispatch(filtersActions.setSortBy(str)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBy)
