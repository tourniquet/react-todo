import initialState from './store'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return Object.assign({}, state, {
        value: action.value
      })
    case 'ADD_TODO':
      // add new todo to items array
      return Object.assign({}, state, {
        items: state.items.concat({
          name: action.name,
          done: false
        }),
        value: ''
      })
    case 'DONE_TODO':
      return Object.assign({}, state, {
        done: true
      })
    case 'UNDONE_TODO':
      return
    default:
      return state
  }
}

export default reducer
