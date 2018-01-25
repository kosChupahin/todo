import React from 'react'
import PropTypes from 'prop-types'

import './Form.css'

const Form = (props) => {
  const {mainChangeHandler, mainValue, mainPlaceholder} = props
  const {subChangeHandler, subValue, subPlaceholder} = props
  const {buttonTitle, submit} = props

  return (
    <form className="form-group" onSubmit={submit}>
      <input value={mainValue} onChange={mainChangeHandler} placeholder={mainPlaceholder}/>
      <input value={subValue} onChange={subChangeHandler} placeholder={subPlaceholder}/>
      <button className="btn form-btn" type="submit">{buttonTitle}</button>
    </form>
  )
}

export default Form

Form.proptypes = {
  buttonTitle: PropTypes.string,
  mainChangeHandler: PropTypes.func,
  mainPlaceholder: PropTypes.string,
  mainValue: PropTypes.string,
  subChangeHandler: PropTypes.func,
  subValue: PropTypes.string,
  subPlaceholder: PropTypes.func,
  submit: PropTypes.func
}