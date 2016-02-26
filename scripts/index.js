import React from 'react';
import {render} from 'react-dom';
import {App} from './App.jsx';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import {Home} from './components/Home';
import About from './components/About';
import Work from './components/Work';
import NoMatch from './components/NoMatch';

import Repos from './components/Repos';
import Repo from './components/Repo';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/work' component={Work}/>

      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>

      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))
