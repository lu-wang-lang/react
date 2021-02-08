import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST } from './actionTypes'
export const getChangeInputValueAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const getAddItemAction = () => {
  return {
    type: ADD_TODO_ITEM
  }
}


export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index
  }
}

export const getInitListAction = (data) => {
  return {
    type: INIT_LIST,
    data
  }
}