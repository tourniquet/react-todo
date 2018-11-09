import React from 'react'
import { connect } from 'react-redux'

// components
import ListItem from '../ListItem'

const mapStateToProps = state => ({
  items: state.items
})

const UnorderedList = props => {
  // set item as done with one click
  const switchStatus = el => ({
    type: 'DONE_TODO',
    id: el.target.id
  })

  // remove item with double click
  const removeItem = el => ({
    type: 'REMOVE_TODO',
    id: el.target.id
  })

  return (
    <ul>
      { props.items.map((item, i) => (
        <ListItem
          key={i}
          id={item.id}
          item={item}
          switchStatus={el => props.dispatch(switchStatus(el))}
          removeItem={el => props.dispatch(removeItem(el))}
        />
      ))}
    </ul>
  )
}

export default connect(mapStateToProps)(UnorderedList)
