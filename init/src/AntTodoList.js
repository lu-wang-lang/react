import React, { Component } from 'react'
import './todo.css'
import store from './store/index'
import { getChangeInputValueAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import AntTodoListUI from './AntTodoListUI'

class AntTodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()

    this.handleChangeInputVal = this.handleChangeInputVal.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)

    store.subscribe(this.handleStoreChange)
  }

  render () {
    return (
      <AntTodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChangeInputVal={this.handleChangeInputVal}
        handleBtnClick={this.handleBtnClick}
        deleteItem={this.deleteItem}
      />
    )
  }

  handleChangeInputVal (e) {
    const action = getChangeInputValueAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick () {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  deleteItem (index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange () {
    this.setState(store.getState())
  }
}

export default AntTodoList