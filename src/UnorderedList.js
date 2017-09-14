import React from 'react'
import ListItem from './ListItem'

const UnorderedList = props => {
  return (
    <ul>
      { props.items.map((item, i) => (
        <ListItem
          key={i}
          id={i}
          item={item}
          switchStatus={props.switchStatus}
          removeItem={props.removeItem} />
        ))
      }
    </ul>
  )
}

export default UnorderedList
