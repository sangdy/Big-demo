import React, { PropTypes } from 'react'
import {Link } from 'react-router'
class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link activeStyle={{color:"#F44336"}} onlyActiveOnIndex={true} to="/"><span className="glyphicon glyphicon-home"></span><br/>Home</Link>
<<<<<<< HEAD
        <Link activeStyle={{color:"#F44336"}} onlyActiveOnIndex={true} to="/Blog"><span className="glyphicon glyphicon-envelope"></span><br/>Blog</Link>
        <Link activeStyle={{color:"#F44336"}} onlyActiveOnIndex={true} to="/Work"><span className="glyphicon glyphicon-book"></span><br/>Work</Link>
        <Link activeStyle={{color:"#F44336"}} onlyActiveOnIndex={true} to="/About"><span className="glyphicon glyphicon-user"></span><br/>Me</Link>
=======
        <Link activeStyle={{color:"#F44336"}} onlyActiveOnIndex={true} to="/Home"><span className="glyphicon glyphicon-envelope"></span><br/>Blog</Link>
        <Link activeStyle={{color:"#F44336"}} onlyActiveOnIndex={true} to="/Work"><span className="glyphicon glyphicon-book"></span><br/>Work</Link>
        <Link activeStyle={{color:"#F44336"}} onlyActiveOnIndex={true} to="/Blog"><span className="glyphicon glyphicon-user"></span><br/>Me</Link>
>>>>>>> 89aad3bf9487e0526676ba4ae28b0ba52f8ae7f7
      </div>
    )
  }
}

export default NavFooter;
