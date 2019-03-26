// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'text'
})`
  border: 1px solid #bdc0ca;
  display: block;
  height: 40px;
  margin: 0 auto;
  padding: 0 44px;
`

const mapStateToProps = state => ({
  items: state.items,
  value: state.value
})

type Props = {
  dispatch: Function,
  onChange: Function,
  onKeyDown: Function,
  placeholder: string,
  type: string,
  value: string
}

const NewItem = (props: Props) => {
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
      onChange={el => props.dispatch(setValue(el))}
      onKeyDown={el => {
        // add new todo only when user press Enter
        // if input value is empty, don't add new todo
        if (el.keyCode === 13 && el.target.value) props.dispatch(addTodo(el))
      }}
      placeholder='...'
      value={props.value}
      type='text'
    />
  )
}

export default connect(mapStateToProps)(NewItem)
