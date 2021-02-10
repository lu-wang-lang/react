import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChangeInputValueAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

class TodoList extends Component {
  render () {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.handleChangeInputValue} />
          <button onClick={this.props.handleClickBtn}> 提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li key={index} onClick={() => { this.props.handleDeleteItem(index) }}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChangeInputValue (e) {
      const action = getChangeInputValueAction(e.target.value)
      dispatch(action)
    },
    handleClickBtn () {
      const action = getAddItemAction()
      dispatch(action)
    },
    handleDeleteItem (index) {
      const action = getDeleteItemAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)