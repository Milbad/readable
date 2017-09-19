import React from 'react'
import {Link} from 'react-router-dom'
import  CatPage from './CatPage'
import RaisedButton from 'material-ui/RaisedButton'

export default function Home () {
    return(
      <div>
        <CatPage />
        <RaisedButton fullWidth={true} label='Add a post' primary containerElement={<Link to={`/add`}/>}/>
      </div>
    )
}
