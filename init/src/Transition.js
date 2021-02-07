import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// github  --  react-transition-group
import "./todo.css"

class Transition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render () {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  onEntered={(el) => { el.style.color = 'blue' }}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>)
            })
          }
        </TransitionGroup>
        <button onClick={this.handleClick}>toggle</button>
      </Fragment >
    )
  }

  handleClick () {
    this.setState((prevState) => ({
      list: [...prevState.list, 'item']
    }))
  }
}

export default Transition