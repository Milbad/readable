import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {createPost} from '../Actions/postsActions'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Back from 'mui-icons/fontawesome/arrow-left'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import { renderSelectField, renderTextField, renderTextFieldBody, required} from '../Utils/helpers'
import { Field, reduxForm } from 'redux-form'


class AddPost extends React.Component {


  render(){
    const { valid, categories, createPost, reset } = this.props

    return (

      <div>
        <Link to='/'>
          <FloatingActionButton mini children={<Back/>}/>
        </Link>
        <div className='center'>
        <h2 className='row text-align-center'>Add a Post</h2>
        <form>
          <Field  validate={required} ref='titleInput' name="title" component={renderTextField} label="Title"/>
          <Field  validate={required} ref='authorInput' name="author" component={renderTextField} label="Author"/>
          <Field  validate={required} ref='bodyInput' name="body" component={renderTextFieldBody} label="Body"/>
          <Field  validate={required} ref='categoryInput' name="category" component={renderSelectField} label="Category">
           {categories.map(categorie => (
             <MenuItem  primaryText={categorie.name} value={categorie.name} key={categorie.name}/>
           ))}
         </Field>
        </form>
        <RaisedButton primary disabled={!valid? true:false} type="submit" label='submit' onClick={()=> {
          let input = {
            id: Math.random().toString(36).substr(-8),
            timestamp: Date.now(),
            title: this.refs.titleInput.value,
            body: this.refs.bodyInput.value,
            author: this.refs.authorInput.value,
            category: this.refs.categoryInput.value
          }
          createPost(input)
          reset()
        }}/>
      </div>
    </div>
    )
  }
}


AddPost = reduxForm({
  form: 'addPost'
})(AddPost)


// Map state to props
const mapStateToProps = (state) => {
    return {
      categories: state.categories
    }
}


export default connect(mapStateToProps, {createPost})(AddPost);
