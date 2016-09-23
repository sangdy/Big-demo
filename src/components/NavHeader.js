import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
<<<<<<< HEAD
  handleBack(){
    this.context.router.goBack();
  }
  render () {
    return(
      <div className="nav-header">
        <p style={{fontSize:'18px'}} onClick={this.handleBack.bind(this)}><i className="glyphicon glyphicon-chevron-left" aria-hidden="true"></i>Back</p>
        <h3>Sangdy@{this.props.title}</h3>
        <p className="glyphicon glyphicon-apple" aria-hidden="true"></p>
=======
  render () {
    return(
      <div className="nav-header">
        <p><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></p>
        <h3>Sangdy.github.io</h3>
        <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
>>>>>>> 89aad3bf9487e0526676ba4ae28b0ba52f8ae7f7
      </div>
    )
  }
}
<<<<<<< HEAD
NavHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
}
=======

>>>>>>> 89aad3bf9487e0526676ba4ae28b0ba52f8ae7f7
export default NavHeader;
