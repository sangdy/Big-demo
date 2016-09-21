import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
    return(
      <div className="nav-header">
        <p><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></p>
        <h3>Sangdy.github.io</h3>
        <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
      </div>
    )
  }
}

export default NavHeader;
