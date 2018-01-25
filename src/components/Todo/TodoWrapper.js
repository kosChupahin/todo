import React from 'react'

import './TodoWrapper.css'

const TodoWrapper = (props) => {
  return (
    <div className="todo-wrapper">{props.children}</div>
  )
}

export default TodoWrapper
