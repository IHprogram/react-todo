import { ADDTASK, DELETETASK } from '../actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      console.log('僕だよ');
      console.log(action.payload);
      return [...state, action.payload]
    case DELETETASK:
      const newTodos = [...state]
      newTodos.splice(action.payload.index, 1)
      return [...newTodos]
    default:
      return state
  }
}