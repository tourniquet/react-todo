import initialState from './store'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action)
      // add new todo to items array
      return [
        ...state,
        {
          name: action.name,
          done: false
        }
      ]
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
