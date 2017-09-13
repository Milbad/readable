import React from 'react'
import { connect } from 'react-redux'
import * as filtersActions from '../Actions/filtersActions'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

class SortBy extends React.Component{

  render(){
    const { setSortBy} = this.props
    return(
            <div style={{display: 'inline-flex', margin: '20px', float:'right'}}>
            <span style={{marginTop: '20px'}}>Sort by</span>
            <DropDownMenu  label='Sort by' onChange={(event, index, value) => {
              setSortBy(value)
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
