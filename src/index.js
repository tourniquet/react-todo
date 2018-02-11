import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// components
import UnorderedList from './components/UnorderedList'
import NewItem from './components/NewItem'

// reducer
import reducer from './reducer'

// styles
import './styles.scss'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends React.Component {
  render () {
    // console.log(store)
    return (
      <Provider store={store}>
        <div className='container'>
          <h2>12 January, Tuesday</h2>

          <hr />

          <UnorderedList />
          <NewItem />
        </div>
      </Provider>
    )
  }
}

render(
  <App />,
  document.querySelector('#container')
)
