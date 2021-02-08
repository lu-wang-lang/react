import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class AntTodoListUI extends Component {
  render () {
    return (
      <Fragment>
        <div className="main-container">
          <Input placeholder="todo info" style={{ width: '100%', marginRight: '10px' }} value={this.props.inputValue} onChange={this.props.handleChangeInputVal} />
          <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        </div>
        <List
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => { this.props.deleteItem(index) }}>
              {item}-delete不可以直接传参，必须通过函数形式来调用
            </List.Item>
          )}
          style={{ padding: '10px' }}
        />
      </Fragment>
    )
  }
}

export default AntTodoListUI