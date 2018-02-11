import React from 'react'
import { connect } from 'react-redux'

// components
import ListItem from './ListItem'

const mapStateToProps = state => {
  return { items: state.items }
}

const UnorderedList = props => {
  // set item as done with one click
  const switchStatus = el => {
    return {
      type: 'DONE_TODO',
      id: el.target.id
    }
  }

  // remove item with double click
  const removeItem = el => {
    return {
      type: 'REMOVE_TODO',
      id: el.target.id
    }
  }

  return (
    <ul>
      { props.items.map(item => (
        <ListItem
          key={item.id}
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
