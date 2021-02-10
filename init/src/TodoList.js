import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChangeInputValueAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreators'

class TodoList extends Component {
  render () {
    let { inputValue, list, handleChangeInputValue, handleClickBtn, handleDeleteItem } = this.props
    return (
      <div>
        <div>
          <input value={inputValue} onChange={handleChangeInputValue} />
          <button onClick={handleClickBtn}> 提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index} onClick={() => { handleDeleteItem(index) }}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  componentDidMount () {
    this.props.initList()
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
    },
    initList () {
      const action = getInitList()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)