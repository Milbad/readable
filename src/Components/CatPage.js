import React from 'react'
import { connect } from 'react-redux'
import  PostList  from './PostList'
import  CatList  from './CatList'
import * as filtersActions from '../Actions/filtersActions'
import  SortBy  from './SortBy'

class CatPage extends React.Component {

  componentDidMount(){
    if (this.props.match) {
      this.props.setFilter(this.props.match.params.category)
    }
  }

  render(){
    return (
      <div className='row  display-flex'>
        <div className='col-2 border-right'>
          <CatList />
        </div>
        <div className='col-10'>
          <SortBy />
          <PostList />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setFilter: cat => dispatch(filtersActions.setFilter(cat)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatPage)
