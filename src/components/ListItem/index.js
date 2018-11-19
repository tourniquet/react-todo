import React from 'react'
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

const ListItem = ({ item, removeItem, switchStatus }) => (
  <ListItemStyled
    id={item.id}
    onClick={switchStatus}
    onDoubleClick={removeItem}
    className={item.done ? 'done' : null}
  >
    {item.name}
  </ListItemStyled>
)

export default ListItem
