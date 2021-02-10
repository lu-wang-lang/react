import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes'
export const getChangeInputValueAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const getAddItemAction = () => {
  return {
    type: ADD_ITEM
  }
}


export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_ITEM,
    index
  }
}