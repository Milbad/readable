import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class CatList extends React.Component{

  render(){
    return(
        <div className='center'>
          {this.props.categories.map(cat => (
          <Link key={cat.name} className='btn' href='#' to={`/${cat.name}`}
          >{(cat.name).toUpperCase()}
        </Link>
            ))}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}


export default connect(mapStateToProps)(CatList)
