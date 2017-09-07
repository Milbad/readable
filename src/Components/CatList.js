import React from 'react'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import * as filtersActions from '../Actions/filtersActions'

class CatList extends React.Component{

  render(){
    const { setFilter, categories } = this.props
    return(
        <div className='center'>
          <h2 className='title-cat'> Categories</h2>
          <Link className='btn' to={`/`} onClick={() => {
          setFilter('SHOW_ALL')
        }}>SHOW ALL</Link>
          {categories.map(cat => (
            <Link key={cat.name}  className='btn' to={`/${cat.name}`} onClick={() => {
            setFilter(cat.name)
          }}>{(cat.name).toUpperCase()}</Link>
            ))}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setFilter: cat => dispatch(filtersActions.setFilter(cat))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatList)
