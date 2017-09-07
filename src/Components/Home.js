import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import * as filtersActions from '../Actions/filtersActions'
import  PostList  from './PostList'
import  CatList  from './CatList'
import  SortBy  from './SortBy'


class Home extends React.Component{

  render(){

    return(
      <div className='row display-flex'>
        <div className='col-2 border-right'>
          <CatList />
        </div>
        <div className='col-10'>
          <SortBy />
          <PostList />
        </div>
          <button className='btn btn-add'>
            <Link  style={{textDecoration: 'none', color:'white' }} to={`/add`}>Add a post</Link>
          </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setFilter: cat => dispatch(filtersActions.setFilter(cat)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
