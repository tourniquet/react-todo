import React from 'react'

const ListItem = props => (
  <li
    key={props.key}
    id={props.id}
    onClick={props.switchStatus}
    onDoubleClick={props.removeItem}
    className={props.item.done ? 'done' : null}
  >
    {props.item.name}
  </li>
)

// ListItem.propTypes = {
//   item: React.PropTypes.string.isRequired
// }

// ListItem.defaultProps = {
//   item: 'New todo'
// }

export default ListItem
