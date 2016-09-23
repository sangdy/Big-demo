import React from 'react';
<<<<<<< HEAD
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import LeftNav from './components/LeftNav';

class App extends React.Component {
  constructor () {
    super();
    this.state={
      showNav:false,
      title:'Home'
    }
  }
  setNavBarState(){
    this.setState({showNav: window.innerWidth > 760 ? true : false});
  }
  componentDidMount(){
    this.setNavBarState();
    window.onresize = this.setNavBarState.bind(this);
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title: this.context.router.isActive('/',true) ? 'Home' :
              this.context.router.isActive('/blog') ? 'Blog' :
              this.context.router.isActive('/work') ? 'Work' :
              this.context.router.isActive('/about') ? 'About' : 'Item'
    })
  }
  render () {
    return(
      <div className="content-wrap">
        {this.state.showNav ? <LeftNav title={this.state.title}/> : <NavHeader title={this.state.title}/> }
        <div className="content-main">
          {this.props.children}
        </div>
        {this.state.showNav ? null : <NavFooter /> }
=======
import NavHeader from './components/NavHeader.js';
import NavFooter from './components/NavFooter.js';
import LeftNav from './components/LeftNav.js';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      showNav:false
    }
  }
  setNavBarState(){
    this.setState({showNav:window.innerWidth > 760 ? true : false});
  }
  componentDidMont(){
    this.setNavBarState();
    window.onresize = this.setNavBarState.bind(this);
  }
  render () {
    return(
      <div className="content-wrap">

        {this.state.showNav ? null : <NavHeader /> }

        <div className="content-main">
          {this.props.children}
        </div>

        {this.state.showNav ? null : <NavFooter /> }

>>>>>>> 89aad3bf9487e0526676ba4ae28b0ba52f8ae7f7
      </div>
    )
  }
}

<<<<<<< HEAD
App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

=======
>>>>>>> 89aad3bf9487e0526676ba4ae28b0ba52f8ae7f7
export default App;
