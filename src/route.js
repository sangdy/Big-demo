import React from 'react';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';

import App from './App';
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
        </Route>
      </Router>
    )
  }
}

export default route;
