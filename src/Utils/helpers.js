import React from 'react'
import TextField from 'material-ui/TextField'

export function getdate(timestamp) {
  if (timestamp) {
    let day = new Date(timestamp).getDate()
    let month = new Date(timestamp).getMonth()
    let year = new Date(timestamp).getFullYear()
    let d = month + '/' + day + '/' + year;
    return d
  }
}

export const required = value => (value ? undefined : 'Required')

export function renderTextFieldBody ({ input, label, meta: { touched, error }}){
  return (
    <TextField hintText={label}
    floatingLabelText={label}
    fullWidth
    multiLine
    errorText={touched && error}
    {...input}
  />
  )
}

export function renderTextField ({ input, label, meta: { touched, error }}) {
  return (
    <TextField hintText={label}
    floatingLabelText={label}
    fullWidth
    errorText={touched && error}
    {...input}
  />
  )
}
