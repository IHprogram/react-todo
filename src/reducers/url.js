import { ADDURL } from '../actions'

const initialState = [
  { url: 'https://qiita.com/' }]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDURL:
      console.log('addURLです');
      console.log(state);
      console.log(action);
      return [...state, { url: action.payload.url }]
    default:
      console.log('defaultです');
      return state
  }
}