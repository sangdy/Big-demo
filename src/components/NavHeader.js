import React, { PropTypes } from 'react'

class NavHeader extends React.Component {

  handleBack(){
    this.context.router.goBack();
  }
  render () {
    return(
      <div className="nav-header">
        <p onClick={this.handleBack.bind(this)}><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></p>
        <h3>Sangdy.github.io</h3>
        <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
      </div>
    )
  }
}
NavHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default NavHeader;
