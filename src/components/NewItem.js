import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    items: state.items,
    value: state.value
  }
}

const NewItem = props => {
  const addTodo = el => {
    return {
      type: 'ADD_TODO',
      name: el.target.value
    }
  }

  const setValue = el => {
    return {
      type: 'SET_VALUE',
      value: el.target.value
    }
  }

  return (
    <input
      type='text'
      placeholder='...'
      value={props.value}
      onChange={el => props.dispatch(setValue(el))}
      onKeyDown={el => {
        // add new todo only when user press Enter
        // if input value is empty, don't add new todo
        if (el.keyCode === 13 && el.target.value) props.dispatch(addTodo(el))
      }}
    />
  )
}

export default connect(mapStateToProps)(NewItem)
