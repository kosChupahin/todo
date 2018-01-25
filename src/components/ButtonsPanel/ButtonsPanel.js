import React from 'react'
import PropTypes from 'prop-types'

import './ButtonsPanel.css'

const ButtonsPanel = ({parameters, sortInfo}) => {
  return (
    <div className="buttons-panel">
      {parameters && parameters.map(buttonInfo =>
        <div key={buttonInfo.title} className="sort-item">
          <div className="arrows-wrapper">
            <i className={`fa fa-sort-asc sort-arrow ${(buttonInfo.key === sortInfo.sortKey && sortInfo.sortOrder === 'asc') ? 'active-arrow' : ''}`} aria-hidden="true"/>
            <i className={`fa fa-sort-desc sort-arrow ${(buttonInfo.key === sortInfo.sortKey && sortInfo.sortOrder === 'desc') ? 'active-arrow' : ''}`} aria-hidden="true"/>
          </div>
          <button className="btn" key={buttonInfo.title} type="submit" onClick={buttonInfo.handler}>{buttonInfo.title}</button>
        </div>
      )}
    </div>
  )
}

export default ButtonsPanel

ButtonsPanel.proptypes = {
  parameters: PropTypes.object,
  sortInfo: PropTypes.object
}