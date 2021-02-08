import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

function reducer (state = defaultState, action) {
  const newState = JSON.parse(JSON.stringify(state))

  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value
  }
  if (action.type === ADD_TODO_ITEM) {
    newState.list.push(newState.inputValue)
    newState.inputValue = ""
  }
  if (action.type === DELETE_TODO_ITEM) {
    newState.list.splice(action.value, 1)
  }

  return newState
}

export default reducer