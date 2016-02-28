import React from 'react';
import NavLink from './NavLink';
import {text} from '../text';

export let Process = React.createClass({
  render() {
    return (
      <div className='fade-in'>
        <div>
          <div className='give-me-some-space'></div>
          <h1>UX Process</h1>
          <div>blah blah blah</div>
        </div>
        <NavLink to="/work/brand" className='pull-left'>&#60;&#60;&#32;Brand</NavLink>
        <NavLink to="/work/projects" className='pull-right'>Projects&#32;&#62;&#62;</NavLink>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='capsule' style={{ textAlign: 'left' }}>
          <div className='give-me-some-space'></div>
          <h2>1. Research</h2>
          <div>{ text.process.research }</div>
          <div className='give-me-some-space'></div>
          <img src="../img/ux_research_3.jpg" width="200px" className='column one-third'/>
          <img src="../img/ux_research_2.jpg" width="200px" className='column one-third'/>
          <img src="../img/ux_research_1.jpg" width="200px" className='column one-third'/>
        </div>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <div className='column one-third' style={{ textAlign: 'left' }}>
            <h2>2. Rough Ideas</h2>
            <div>{ text.process.ideas }</div>
          </div>
          <img src="../img/ux_rough.png" className='column two-thirds'/>
        </div>
        <div className='capsule underscore'></div>
        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <img src="../img/ux_collaborate_1.png" className='column two-thirds'/>
          <div className='column one-third' style={{ textAlign: 'left' }}>
            <h2>3. Collaborate</h2>
            <div>{ text.process.collaborate }</div>
          </div>
        </div>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <div className='column one-third' style={{ textAlign: 'left' }}>
            <h2>4. Execute</h2>
            <div>{ text.process.execute }</div>
          </div>
          <img src="../img/ux_execute.png" className='column two-thirds'/>
        </div>
        <div className='capsule underscore'></div>
        <div className='give-me-some-space'></div>
        <button>
          <NavLink to="/work/projects">Next Up: Projects</NavLink>
        </button>
        <div className='give-me-some-serious-space'></div>
      </div>
    );
  }
});
