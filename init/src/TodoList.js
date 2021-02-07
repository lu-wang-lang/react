import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'
import "./todo.css"

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
      list: ['learn vue', 'learn react']
    }
    this.handleChangeInputVal = this.handleChangeInputVal.bind(this)
    this.handleButton = this.handleButton.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  render () {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputVal} onChange={this.handleChangeInputVal} className="input" />
          <button onClick={this.handleButton}>提交</button>
        </div>
        <div ref={(divr) => { this.ulRef = divr }}> {this.initItem()} </div>
      </Fragment >
    )
  }

  componentDidMount () {   //charlse最新版必须使用ip，不可以使用localhost
    axios.get('/api/todoList').then(res => {
      this.setState(() => ({ list: [...res.data] }))
    }).catch(() => {
      console.log('error');
    })
  }

  initItem () {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem index={index} content={item} key={index} deleteItem={this.handleDelete} />
        )
      })
    )
  }

  handleChangeInputVal (e) {
    let inputVal = e.target.value
    this.setState(() => ({
      inputVal
    }))
  }

  handleButton () {
    if (this.state.inputVal) {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputVal],
        inputVal: ''
      }), () => {
        console.log(this.ulRef.children.length);
      })
    }
  }

  handleDelete (index) {
    if (index > -1) {
      this.setState((prevState) => {
        let list = [...prevState.list]
        list.splice(index, 1)
        return {
          list
        }
      })
    }
  }
}

export default TodoList