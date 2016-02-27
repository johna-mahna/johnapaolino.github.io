import React from 'react';
import {render} from 'react-dom';
import {App} from './App.jsx';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// Fuck it, going to decide not to care about getting clean URLs right now

import {Home} from './components/Home';
import {About} from './components/About.jsx';
import {Contact} from './components/Contact.jsx';
import {Work} from './components/Work.jsx';
import Ux from './components/Ux';
import Dev from './components/Dev';
import Brand from './components/Brand';
import NoMatch from './components/NoMatch';

import Repos from './components/Repos';
import Repo from './components/Repo';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/work' component={Work}>
      <Route path="/work/ux" component={Ux}/>
      <Route path="/work/dev" component={Dev}/>
      <Route path="/work/brand" component={Brand}/>
    </Route>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('root'))
