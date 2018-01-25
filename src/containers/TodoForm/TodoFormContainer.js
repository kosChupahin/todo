import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Form from '../../components/Form'
import {ADD_BTN, SAVE_BTN, SUBTITLE, TITLE} from "../../constants/locale";


class TodoFormContainer extends Component{
  state = {
    mainValue:'',
    subValue:''
  }

  componentWillReceiveProps(nextProps){
    const {displayedInfo} = nextProps

    if (displayedInfo) {
      this.setState({
        mainValue:displayedInfo ? displayedInfo.title : '',
        subValue: displayedInfo ? displayedInfo.subtitle: '',
      })
    }
  }

  render(){
    return (
      <Form
        submit={this.handleSubmit}
        mainChangeHandler={this.mainChangeHandler}
        subChangeHandler={this.subChangeHandler}
        {...this.state}
        {...this.prepareDescriptionInfo()}
      />
    )
  }

  prepareDescriptionInfo(){
    const {displayedInfo} = this.props

    return {
      mainPlaceholder: `${TITLE}`,
      subPlaceholder: `${SUBTITLE}`,
      buttonTitle: displayedInfo ? `${SAVE_BTN}` : `${ADD_BTN}`,
    }
  }

  mainChangeHandler = (e) => {
    this.setState({mainValue: e.target.value});
  }

  subChangeHandler = (e) => {
    this.setState({subValue: e.target.value});
  }

  handleSubmit = (e) => {
    const {displayedInfo} = this.props

    e.preventDefault()
    // //TODO validation

    displayedInfo ? this.editItem() : this.createItem()

    this.setState({
      mainValue:'',
      subValue:''
    })
  }

  createItem(){
    if (!this.isTitleValid(this.state.mainValue)) return

    const {createCB} = this.props

    const item = {
      id: Date.now(),
      title: this.state.mainValue,
      subtitle: this.state.subValue,
      isCompleted: false
    }

    createCB(item)
  }

  editItem(){
    if (!this.isTitleValid(this.state.mainValue)) return

    const {editCB, displayedInfo} = this.props

    const newTitles = {title: this.state.mainValue,subtitle: this.state.subValue,}
    const item = Object.assign({}, displayedInfo, newTitles)
    editCB(item)
  }

  isTitleValid(text){
    const clearText = text.replace(/^\s+/g, '');

    return clearText.length > 0
  }
}

export default TodoFormContainer

TodoFormContainer.proptypes = {
  createCB: PropTypes.func,
  editCB: PropTypes.func,
  displayInfo: PropTypes.object
}