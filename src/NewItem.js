import React from 'react'

const NewItem = props => (
  <input
    type='text'
    placeholder='...'
    onKeyDown={props.addItem} />
)

export default NewItem
