import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {setFilter} from '../Actions/filtersActions'
import  CatPage from './CatPage'
import RaisedButton from 'material-ui/RaisedButton'


class Home extends React.Component{

  render(){
    return(
      <div>
        <CatPage />
        <RaisedButton fullWidth={true} label='Add a post' primary containerElement={<Link to={`/add`}/>}/>
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




export default connect(mapStateToProps, {setFilter})(Home)
