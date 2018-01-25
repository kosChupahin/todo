import React, {Component} from 'react'
import PropTypes from 'prop-types'

import withTodosData from "../../hoc/Data/withTodosData";

import TodoFormContainer from '../../containers/TodoForm'
import TodoListContainer from '../../containers/TodoList'

import TodoWrapper from '../../components/Todo/TodoWrapper'

class TodoContainer extends Component{
  state = {
    selectedItem:null
  }

  render() {
    const {data, create, remove} = this.props
    const {selectedItem} = this.state

    return (
      <TodoWrapper>
        <TodoFormContainer
          displayedInfo={selectedItem}
          editCB={this.formEditHandler}
          createCB={create}/>
        <TodoListContainer
          selectedId={selectedItem ? selectedItem.id : null}
          tasks={data}
          removeCB={remove}
          toggleCB={this.listToggleHandler}
          editCB={this.listEditHandler}/>
      </TodoWrapper>
    )
  }

  listToggleHandler = id => {
    const {data, update} = this.props

    const originalTask = data.find(task => task.id === id)
    if (!originalTask) return

    const newTask = Object.assign({}, originalTask, {isCompleted: !originalTask.isCompleted})

    update(newTask)
  }

  listEditHandler = id => {
    const {data} = this.props

    const task = data.find(task => task.id === id)
    if (task) {
      this.setState({selectedItem:task})
    }
  }

  formEditHandler = item => {
    const {update} = this.props

    this.setState({selectedItem : null},() => update(item) )
  }
}

export default withTodosData(TodoContainer)

TodoContainer.proptypes = {
  data: PropTypes.array,
  create: PropTypes.func,
  remove: PropTypes.func,
  update: PropTypes.func
}