// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// components
import ListItem from '../ListItem/ListItem'

const mapStateToProps = state => ({
  items: state.items
})

const UnorderedListStyled = styled.ul`
  font-size: 18px;
  list-style: none;
  padding: 0 24px;
`

type Props = {
  dispatch: Function,
  items: Array<Object>
}

const UnorderedList = ({dispatch, items}: Props) => {
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
    <UnorderedListStyled>
      {items.map((item, i) => (
        <ListItem
          id={item.id}
          item={item}
          key={i}
          removeItem={el => dispatch(removeItem(el))}
          switchStatus={el => dispatch(switchStatus(el))}
        />
      ))}
    </UnorderedListStyled>
  )
}

export default connect(mapStateToProps)(UnorderedList)
