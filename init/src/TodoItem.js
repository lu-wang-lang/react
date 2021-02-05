import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    let { content } = this.props
    return (
      <div onClick={this.handleClick}>{content}</div>
    )
  }

  handleClick () {
    let { deleteItem, index } = this.props
    deleteItem(index)
  }
}

export default TodoItem