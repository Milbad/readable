import React from 'react'
import  Home  from './Home'
import  AddPost  from './AddPost'
import  AddComment  from './AddComment'
import PostDetails from './PostDetails'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import EditPostForm from './EditPostForm'
import EditCommentForm from './EditCommentForm'
import { Route, Switch} from 'react-router-dom'

const App =() => (

      <div className='container'>
        <MuiThemeProvider>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route  path='/add' component={AddPost} />
        <Route  path='/addcomment/:parentId' component={AddComment} />
        <Route exact path='/:category' component={Home} />
        <Route   path='/edit/:post_id' component={EditPostForm } />
        <Route   path='/editcomment/:comment_id' component={EditCommentForm } />
        <Route  exact path='/:category/:post_id' component={PostDetails}/>
        </Switch>
        </MuiThemeProvider>
      </div>
)


export default App
