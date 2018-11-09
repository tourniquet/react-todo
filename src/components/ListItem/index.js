import React from 'react'
import styled from 'styled-components'

const StyledListItem = styled.li`
  display: block;
  line-height: 63px;
  margin: 0 auto;
  width: 80%;

  ${({ done }) => done && `
    color: #BDC0CA;
    text-decoration: line-through;
  `}
`

const ListItem = ({ item, removeItem, switchStatus }) => (
  <StyledListItem
    id={item.id}
    onClick={switchStatus}
    onDoubleClick={removeItem}
    done={item.done}
  >
    {item.name}
  </StyledListItem>
)

export default ListItem
