import React from 'react'

const NewItem = props => (
  <input
    type='text'
    placeholder='...'
    onKeyDown={props.addItem}
    onChange={props.setValue}
    value={props.value} />
)

export default NewItem
