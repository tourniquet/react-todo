// remove item with double click
export const removeItem = el => {
  this.setState(this.state.items.splice(el.target.id, 1))
}
