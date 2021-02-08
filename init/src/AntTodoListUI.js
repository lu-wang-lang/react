import React, { Fragment } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

//当一个组件只含有render函数时，使用一个函数来替换，则为无状态组件 --更优
const AntTodoListUI = (props) => {
  return (
    <Fragment>
      <div className="main-container">
        <Input placeholder="todo info" style={{ width: '100%', marginRight: '10px' }} value={props.inputValue} onChange={props.handleChangeInputVal} />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => { props.deleteItem(index) }}>
            {item}-delete不可以直接传参，必须通过函数形式来调用
          </List.Item>
        )}
        style={{ padding: '10px' }}
      />
    </Fragment>
  )
}

// class AntTodoListUI extends Component {
//   render () {
//     return (
//       <Fragment>
//         <div className="main-container">
//           <Input placeholder="todo info" style={{ width: '100%', marginRight: '10px' }} value={this.props.inputValue} onChange={this.props.handleChangeInputVal} />
//           <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         </div>
//         <List
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={() => { this.props.deleteItem(index) }}>
//               {item}-delete不可以直接传参，必须通过函数形式来调用
//             </List.Item>
//           )}
//           style={{ padding: '10px' }}
//         />
//       </Fragment>
//     )
//   }
// }

export default AntTodoListUI