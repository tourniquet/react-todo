import React from 'react'
import { render } from 'react-dom'
import UnorderedList from './UnorderedList'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = ({ arr: ['first', 'second', 'third', 'fourth', 'fifth'] })

    this.removeItem = this.removeItem.bind(this)
  }

  removeItem (el) {
    this.setState(this.state.arr.splice(el.target.id, 1))
  }

  render () {
    return (
      <div>
        <UnorderedList items={this.state.arr} removeItem={this.removeItem} />
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
