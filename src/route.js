import React from 'react';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';

import App from './App';
<<<<<<< HEAD
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Work from './Work/Work';
import About from './About/About';
import Item from './Item/Item';

export default class Routers extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/item/:url" component={Item} />
=======
import Home from './Home/Home.js';
import Blog from './Blog/Blog.js';
import Work from './Work/Work.js';
import About from './About/About.js';

class route extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={About} />
            <Route path="/home" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/blog" component={Blog} />
>>>>>>> 89aad3bf9487e0526676ba4ae28b0ba52f8ae7f7
        </Route>
      </Router>
    )
  }
}
<<<<<<< HEAD
=======

export default route;
>>>>>>> 89aad3bf9487e0526676ba4ae28b0ba52f8ae7f7
