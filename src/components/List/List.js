import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import './List.css'

class List extends Component{
  render(){
    const {tasks, removeCB, toggleCB, editCB} = this.props

    return(
      <Fragment>
        {tasks.map(task =>
          <div className="list-row" key={task.id}>
            <div className="checkbox">
              <input type="checkbox" checked={task.isCompleted} onChange={() => toggleCB(task.id)}/>
            </div>
            <div className="titles-wrapper">
              <span className="title-text">{task.title}</span>
              <span className="subtitle-text">{task.subtitle}</span>
            </div>
            <div className="buttons-wrapper">
              <button className="btn clear-bg" onClick={() => editCB(task.id)} disabled={this.isButtonDisable(task.id)}><i className="fa fa-pencil" aria-hidden="true"/></button>
              <button className="btn clear-bg delete-btn" onClick={() => removeCB(task.id)} disabled={this.isButtonDisable(task.id)}><i className="fa fa-times" aria-hidden="true"/></button>
            </div>

          </div>
        )}
      </Fragment>
    )
  }

  isButtonDisable(currentId){
    const {selectedId} = this.props

    return selectedId && selectedId === currentId
  }
}

export default List

List.proptypes = {
  tasks: PropTypes.array,
  removeCB: PropTypes.func,
  toggleCB: PropTypes.func,
  editCB: PropTypes.func,
  selectedId: PropTypes.number
}