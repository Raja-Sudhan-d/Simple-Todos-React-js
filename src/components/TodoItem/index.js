import './index.css'

import {Component} from 'react'

class TodoItem extends Component {
  onClickDeleteButton = () => {
    const {todoInfo, deleteTodo} = this.props
    const {id} = todoInfo
    deleteTodo(id)
  }

  render() {
    const {todoInfo} = this.props
    const {title} = todoInfo

    return (
      <li className="todo-item">
        <p className="todo-info">{title}</p>
        <button
          className="delete-button"
          type="button"
          onClick={this.onClickDeleteButton}
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
