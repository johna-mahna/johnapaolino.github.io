import React from 'react';
import NavLink from './NavLink';
import {text} from '../text';

export let Brand = React.createClass({
  render() {
    return (
      <div className='fade-in'>
        <div>
          <div className='give-me-some-space'></div>
          <h1>Brand</h1>
          <div>blah blah blah</div>
        </div>
        <NavLink to="/work/process" className='pull-left'>&#60;&#60;&#32;Process</NavLink>
        <NavLink to="/work/projects" className='pull-right'>Projects&#32;&#62;&#62;</NavLink>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='column two-thirds centered'>{ text.brand.guide }</div>
        <div className='capsule'>

        </div>
        <img src="http://placehold.it/350x200"/>
      </div>
    );
  }
});
