import React from 'react'

const ListItem = ({ item, removeItem, switchStatus }) => (
  <li
    id={item.id}
    onClick={switchStatus}
    onDoubleClick={removeItem}
    className={item.done ? 'done' : null}
  >
    {item.name}
  </li>
)

export default ListItem
