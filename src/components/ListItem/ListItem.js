// @flow

import * as React from 'react'
import styled from 'styled-components'

const ListItemStyled = styled.li`
  display: block;
  line-height: 63px;
  margin: 0 auto;
  width: 80%;

  &.done {
    color: #bdc0ca;
    text-decoration: line-through;
  }
`

type Props = {
  item: Object,
  removeItem: Function,
  switchStatus: Function
}

const ListItem = ({ item, removeItem, switchStatus }: Props) => (
  <ListItemStyled
    className={item.done ? 'done' : null}
    id={item.id}
    onClick={switchStatus}
    onDoubleClick={removeItem}
  >
    {item.name}
  </ListItemStyled>
)

export default ListItem
