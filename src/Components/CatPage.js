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
      <div>
        <CatList/>
        <div className='row'>
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
