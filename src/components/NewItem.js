import React from 'react'
import { connect } from 'react-redux'

// actions
import { addTodo } from '../actions'

const mapDispatchToProps = {
  addTodo
}

const NewItem = dispatch => {
  console.log(dispatch)

  return (
    <input
      type='text'
      placeholder='...'
      onKeyDown={dispatch(addTodo())}
      // onChange={props.setValue}
      // value={props.value}
    />
  )
}

export default connect(null, mapDispatchToProps)(NewItem)
