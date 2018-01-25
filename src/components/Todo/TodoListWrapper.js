import React from 'react'

import './TodoListWrapper.css'

const TodoListWrapper = (props) => {
  return (
    <div className="todolist-wrapper">{props.children}</div>
  )
}

export default TodoListWrapper