import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const mapStateToProps = state => ({
  items: state.items,
  value: state.value
})

const Input = styled.input`
  border: 1px solid #bdc0ca;
  display: block;
  height: 40px;
  margin: 0 auto;
  padding: 0 44px;
`

const NewItem = props => {
  const addTodo = el => ({
    type: 'ADD_TODO',
    name: el.target.value
  })

  const setValue = el => ({
    type: 'SET_VALUE',
    value: el.target.value
  })

  return (
    <Input
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
