import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import './todo.css'
import store from './store/index'
import { getChangeInputValueAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

class AntTodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()

    this.handleChangeInputVal = this.handleChangeInputVal.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // this.deleteItem = this.deleteItem.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)

    store.subscribe(this.handleStoreChange)
  }

  render () {
    return (
      <Fragment>
        <div className="main-container">
          <Input placeholder="todo info" style={{ width: '100%', marginRight: '10px' }} value={this.state.inputValue} onChange={this.handleChangeInputVal} />
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.deleteItem.bind(this, index)}>
              {item}
            </List.Item>
          )}
          style={{ padding: '10px' }}
        />
      </Fragment>
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