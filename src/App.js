import React from 'react';
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

      </div>
    )
  }
}

export default App;
