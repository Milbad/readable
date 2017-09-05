import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import  PostList  from './PostList'
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
        <Link style={{fontSize: '30px' ,textDecoration: 'none', color:'dodgerblue' }} to='/'>
          <FontAwesome name='fa-arrow-circle-left' className='fa-arrow-circle-left' />
        </Link>
        <SortBy />
        <PostList />
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
