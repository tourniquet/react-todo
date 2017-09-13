import React from 'react'

const ListItem = props => (
  <li key={props.key} id={props.id} onClick={props.onClick}>
    {props.item}
  </li>
)

// ListItem.propTypes = {
//   item: React.PropTypes.string.isRequired
// }

// ListItem.defaultProps = {
//   item: 'New todo'
// }

export default ListItem
