import React, { Component, Fragment } from 'react'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'hello wanglu'
    }
  }

  render () {
    return (
      <Fragment>{this.state.name}</Fragment>
    )
  }
}

export default TodoList