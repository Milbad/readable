import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import * as filtersActions from '../Actions/filtersActions'
import {fetchCommentsOld}  from '../Actions/commentsActions'
import  PostList  from './PostList'
import  CatList  from './CatList'
import  SortBy  from './SortBy'


class Home extends React.Component{

  componentDidMount(){
      this.props.setFilter('SHOW_ALL')
  }

  render(){

    return(
      <div>
          <CatList />
          <SortBy />
          <PostList />
          <div className='open-add'>
            <Link to={`/add`}>Add a post</Link>
          </div>
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
