import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
//import {createPost} from '../Actions/postsActions'
import * as actions from '../Actions/postsActions'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Back from 'mui-icons/fontawesome/arrow-left'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import { Field, reduxForm, formValueSelector } from 'redux-form'


const required = value => (value ? undefined : 'Required')



const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const renderSelectField = ({ input, ref, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    ref= {ref}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}/>
)

class AddPost extends React.Component {


  render(){
    const { valid, categories, createPost,reset, submitting } = this.props

    return (

      <div>
        <Link to='/'>
          <FloatingActionButton mini children={<Back/>}/>
        </Link>
        <div className='center'>
        <h2 className='row text-align-center'>Add a Post</h2>
        <form >
          <div>
          <Field  validate={required} ref='titleInput' name="title" component={renderTextField} label="Title"/>
        </div>
        <div>
         <Field  validate={required} ref='authorInput' name="author" component={renderTextField} label="Author"/>
       </div>
       <div>
        <Field  validate={required} ref='bodyInput' name="body" component={renderTextField} label="Body"/>
      </div>
      <div>
         <Field  validate={required} ref='categoryInput' name="category" component={renderSelectField} label="Category">
           {categories.map(categorie => (
             <MenuItem  primaryText={categorie.name} value={categorie.name} key={categorie.name}/>
           ))}
       </Field>

       </div>
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
const mapStateToProps = (state, ownProps) => {
    return {
      categories: state.categories
    }
}

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      createPost: item => dispatch(actions.createPost(item)),
    }
}
export default (connect(mapStateToProps, mapDispatchToProps )(AddPost));
