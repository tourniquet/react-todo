import React from 'react'

const NewItem = props => (
  <input
    type='text'
    placeholder='add new todo'
    onKeyDown={props.addItem} />
)

export default NewItem
