import { ADDTASK, DELETETASK } from '../actions'

const initialState = [
  { title: '概要作成' },
  { title: '画面設計作成' },
  { title: '詳細設計作成' },
  { title: 'コーディング' },
  { title: 'テスト' }]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      console.log('addTaskです');
      console.log(state);
      console.log(action);
      return [...state, { title: action.payload.title }]
    case DELETETASK:
      console.log('deletetask');
      const newTodos = [...state]
      newTodos.splice(action.payload.index, 1)
      return [...newTodos]
      break;
    default:
      console.log('defaultです');
      return state
  }
}