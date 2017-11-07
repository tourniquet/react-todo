import React from 'react'

const ListItem = props => (
  <li
    id={props.id}
    onClick={props.switchStatus}
    onDoubleClick={props.removeItem}
    className={props.item.done ? 'done' : null}
  >
    {props.item.name}
  </li>
)

export default ListItem
