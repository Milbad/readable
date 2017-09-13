import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import * as filtersActions from '../Actions/filtersActions'
import  CatPage from './CatPage'
import RaisedButton from 'material-ui/RaisedButton'


class Home extends React.Component{

  render(){
    return(
      <div>
        <CatPage />
        <RaisedButton className='btn-add' style={{width:'120px'}} label='Add a post' primary containerElement={<Link to={`/add`}/>}/>
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
