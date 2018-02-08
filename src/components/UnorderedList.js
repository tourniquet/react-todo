import React from 'react'
import { connect } from 'react-redux'

// components
import ListItem from './ListItem'

const mapStateToProps = state => {
  return { items: state.items }
}

const UnorderedList = props => {
  console.log(props)
  return (
    <ul>
      { props.items.map((item, i) => (
        <ListItem
          key={i}
          id={i}
          item={item} />
        ))
      }
    </ul>
  )
}

export default connect(mapStateToProps)(UnorderedList)
