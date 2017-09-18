import React from 'react'
import { connect } from 'react-redux'
import { setSortByComment } from '../Actions/filtersActions'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

class SortByComment extends React.Component{

  render(){
    const { setSortByComment } = this.props
    return(
      <div style={{height: '40px', textAlign:'right'}}>
      <span style={{verticalAlign: '20px'}}>Sort by</span>
      <DropDownMenu  label='Sort by' onChange={(event, index, value) => {
        setSortByComment(value)
      }}>
        <MenuItem key='0' primaryText='score (desc)' value='voteScore'/>
        <MenuItem key='1' primaryText='date (desc)' value='timestamp'/>
      </DropDownMenu>
    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    sortByComment: state.sortByComment
  }
}



export default connect(mapStateToProps, {setSortByComment})(SortByComment)
