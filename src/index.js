import React from 'react'
import { render } from 'react-dom'
// components
import UnorderedList from './UnorderedList'
import NewItem from './NewItem'
// styles
import './styles.scss'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = ({
      items: [
        { name: 'Buy new sweatshirt', done: false },
        { name: 'Begin promotional phase', done: false },
        { name: 'Read an article', done: false },
        { name: 'Try not to fall asleep', done: true },
        { name: 'Watch "Sherlock"', done: true },
        { name: 'Begin QA for the product', done: true },
        { name: 'Go for a walk', done: true }
      ],
      value: ''
    })

    this.setValue = this.setValue.bind(this)
    this.addItem = this.addItem.bind(this)
    this.switchStatus = this.switchStatus.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  setValue (el) {
    this.setState({ value: el.target.value })
  }

  addItem (el) {
    // add new todo only when user press Enter
    // if input value is empty, don't add new todo
    if (el.keyCode !== 13 || !el.target.value) return
    // add new todo to items array
    this.setState({
      items: [...this.state.items, { name: el.target.value, done: false }],
      // and clear input value
      value: ''
    })
  }

  // set item as done with one click
  switchStatus (el) {
    const items = this.state.items
    items[el.target.id].done = !items[el.target.id].done

    this.setState({ items })
  }

  // remove item with double click
  removeItem (el) {
    this.setState(this.state.items.splice(el.target.id, 1))
  }

  render () {
    return (
      <div className='container'>
        <h2>12 January, Tuesday</h2>

        <hr />

        <UnorderedList
          items={this.state.items}
          removeItem={this.removeItem}
          switchStatus={this.switchStatus} />
        <NewItem
          addItem={this.addItem}
          setValue={this.setValue}
          value={this.state.value} />
      </div>
    )
  }
}

render(
  <App />,
  document.querySelector('#container')
)
