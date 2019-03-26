// @flow

import * as React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import styled from 'styled-components'

// components
import UnorderedList from './components/UnorderedList/UnorderedList'
import NewItem from './components/NewItem/NewItem'

// reducer
import reducer from './reducer'

const Container = styled.div`
  padding-bottom: 64px;
`

const H2 = styled.h2`
  padding-top: 34px;
  padding-left: 24px;
  color: #ababab;
`

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => (
  <Provider store={store}>
    <Container>
      <H2>12 January, Tuesday</H2>

      <hr />

      <UnorderedList />
      <NewItem />
    </Container>
  </Provider>
)

const root = document.querySelector('#container')
if (!root) throw new Error('Could not find element with id #root')

render(
  <App />,
  root  
)
