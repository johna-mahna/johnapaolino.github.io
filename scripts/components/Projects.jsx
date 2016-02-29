import React from 'react';
import NavLink from './NavLink';
import {text} from '../text';

export let Projects = React.createClass({
  render() {
    return (
      <div className='fade-in'>
        <div>
          <div className='give-me-some-space'></div>
          <h1>Recent Projects</h1>
          <div>blah blah blah</div>
        </div>
        <NavLink to="/work/brand" className='pull-left'>&#60;&#60;&#32;Brand</NavLink>
        <NavLink to="/work/process" className='pull-right'>Process&#32;&#62;&#62;</NavLink>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <div style={{ textAlign: 'left' }}>
            <h2>Publisher Account Management</h2>
            <div>{ text.projects.reporting }</div>
          </div>
          <div className='give-me-some-space'></div>
          <img src="../img/pub_code.png" className='column one-third'/>
          <img src="../img/pub_gif.gif" className='column two-thirds'/>
        </div>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='capsule' style={{ textAlign: 'left' }}>
          <div className='give-me-some-space'></div>
          <h2>Ad Hoc Reporting Tool</h2>
          <div>{ text.projects.pub }</div>
          <div className='give-me-some-space'></div>
            <img src="../img/reporting.gif" className='column two-thirds'/>
            <img src="../img/reporting_code.png" className='column one-third'/>
        </div>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <h2>Ad Builder</h2>
          <div>{ text.projects.builder }</div>
          <div className='give-me-some-space'></div>
          <img src="../img/builder.gif" className='column two-thirds centered'/>
        </div>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='give-me-some-space'></div>
        <button>
          <NavLink to="/work/process">Next Up: Process</NavLink>
        </button>
        <div className='give-me-some-serious-space'></div>
      </div>
    );
  }
});
