import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes'
import axios from 'axios'
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

export const getInitListAction = (data) => {
  return {
    type: INIT_LIST,
    data
  }
}

export const getInitList = () => {
  return (dispatch) => {
    axios.get('/api/todoList').then(res => {
      const action = getInitListAction(res.data)
      dispatch(action)
    })
  }
}