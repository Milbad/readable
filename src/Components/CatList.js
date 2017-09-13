import React from 'react'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Tabs from 'material-ui/Tabs'
import Tab from 'material-ui/Tabs/Tab'
import * as filtersActions from '../Actions/filtersActions'

class CatList extends React.Component{


  render(){
    const { setFilter, categories } = this.props
    return(
        <AppBar style={{position:'fixed', top:'0', left:'0'}} title='CATEGORIES'  titleStyle={{height: '45px', lineHeight:'45px'}} showMenuIconButton={false} >
          <Tabs  style={{width: '70%'}} onChange={(value, index, index2) => {
            setFilter(value)
          }}>
              <Tab  key='SHOW_ALL'
                    label='show all'
                    value='SHOW_ALL'
                    containerElement={<Link to={`/`}/>}
                    />
          {categories.map(cat => (
              <Tab  key={cat.name}
                    label={cat.name}
                    containerElement={<Link to={`/${cat.name}`}/>}
                    value= {cat.name} />
            ))}
            </Tabs>
        </AppBar>

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
