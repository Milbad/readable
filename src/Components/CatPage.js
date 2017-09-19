import React from 'react'
import { connect } from 'react-redux'
import  PostList  from './PostList'
import  CatList  from './CatList'
import { setFilter } from '../Actions/filtersActions'
import  SortBy  from './SortBy'


class CatPage extends React.Component {

  componentDidMount(){
    this.props.match ?
    this.props.setFilter(this.props.match.params.category):
    this.props.setFilter('SHOW_ALL');
  }

  render(){
    return (
      <div>
        <CatList/>
        <SortBy />
        <PostList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}


export default connect(mapStateToProps, {setFilter})(CatPage);
