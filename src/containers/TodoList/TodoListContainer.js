import React, {Component} from 'react'
import PropTypes from 'prop-types'

import orderBy from 'lodash/orderBy'

import TodoList from '../../components/List'
import ButtonsPanel from '../../components/ButtonsPanel'

import TodoListWrapper from '../../components/Todo/TodoListWrapper'
import {DATE_BTN, SUBTITLE, TITLE} from "../../constants/locale";

const BUTTONS_PANEL_INFO = [
    { title:`${TITLE}`, key:'title'},
    // { title:`${SUBTITLE}`, key:'subtitle'},
    { title:`${DATE_BTN}`, key:'id'}
  ]

class TodoListContainer extends Component{
  state = {
    sortKey:'id', sortOrder: 'asc'
  }

  componentDidMount(){
    this.buttonsPanelInfo = this.prepareButtonsPanel()
  }

  render(){
    const {sortKey, sortOrder} = this.state

    return (
    <TodoListWrapper>
      {this.props.tasks.length > 0 && <ButtonsPanel parameters={this.buttonsPanelInfo} sortInfo={{sortKey, sortOrder}}/>}
      <TodoList {...Object.assign({}, this.props, {tasks: this.sortTasks(this.props.tasks)})}/>
    </TodoListWrapper>
    )
  }

  prepareButtonsPanel(){
    return BUTTONS_PANEL_INFO.map(buttonInfo => {
      return {
        key: buttonInfo.key,
        title: buttonInfo.title,
        handler: () => this.sortHandler(buttonInfo.key)
      }
    })
  }

  sortTasks(tasks){
    const {sortKey, sortOrder} = this.state

    return orderBy(tasks, sortKey, sortOrder)
  }

  sortHandler = (key) =>{
    const {sortKey, sortOrder} = this.state

    if (sortKey === key) {
      this.setState({sortOrder:sortOrder === 'asc' ? 'desc' : 'asc'})
    }
    else {
      this.setState({sortKey:key})
    }
  }
}

export default TodoListContainer

TodoListContainer.proptypes = {
  editCB: PropTypes.func,
  removeCB: PropTypes.func,
  selectedId:PropTypes.number,
  tasks: PropTypes.array,
  toggleCB: PropTypes.func
}
