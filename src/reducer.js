import initialState from './store'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return Object.assign({}, state, {
        value: action.value
      })
    case 'ADD_TODO':
      return Object.assign({}, state, {
        items: state.items.concat({
          id: state.items.length,
          name: action.name,
          done: false
        }),
        value: ''
      })
    case 'REMOVE_TODO':
      return Object.assign({}, state, {
        items: state.items.filter(item => item.id !== Number(action.id))
      })
    case 'DONE_TODO':
      return Object.assign({}, state, {
        items: state.items.map(item =>
          (item.id === Number(action.id)) ? {...item, done: !item.done} : item
        )
      })
    default:
      return state
  }
}

export default reducer
