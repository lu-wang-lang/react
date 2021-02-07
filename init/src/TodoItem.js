import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    let { content } = this.props
    return (
      <div onClick={this.handleClick}>{this.props.test}-{content}</div>
    )
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  handleClick () {
    let { deleteItem, index } = this.props
    deleteItem(index)
  }
}
TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello'
}
export default TodoItem