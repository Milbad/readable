import React from 'react'
import { connect } from 'react-redux'
import  PostList  from './PostList'
import  CatList  from './CatList'
import * as filtersActions from '../Actions/filtersActions'
import  SortBy  from './SortBy'
import AppBar from 'material-ui/AppBar'

class CatPage extends React.Component {

  componentDidMount(){
    if (this.props.match) {
      this.props.setFilter(this.props.match.params.category)
    }
  }

  render(){
    return (
      <div>
        <AppBar title='CATEGORIES'  titleStyle={{height: '45px', lineHeight:'45px'}} showMenuIconButton={false} children={<CatList/>}/>
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
