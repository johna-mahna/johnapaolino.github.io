import React from 'react';
import {text} from '../text';

export let Process = React.createClass({
  scrollTop () {
    console.log('yay scroll');
    window.scroll(0,0);
  },
  render() {
    let nextLink = { position: 'fixed', top: '40px', right: '35px', zIndex: '200' };
    return (
      <div className='fade-in'>
        <div>
          <div className='give-me-some-space'></div>
          <h1 ref='myRefString'>UX Process</h1>
          <div>{ text.process.general }</div>
        </div>
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
          <div className='column one-third mobile-full' style={{ textAlign: 'left' }}>
            <h2>2. Rough Ideas</h2>
            <div>{ text.process.ideas }</div>
          </div>
          <img src="../img/ux_rough.png" className='column two-thirds mobile-full'/>
        </div>
        <div className='capsule underscore'></div>
        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <img src="../img/ux_collaborate_1.png" className='column two-thirds mobile-full'/>
          <div className='column one-third mobile-full' style={{ textAlign: 'left' }}>
            <h2>3. Collaborate</h2>
            <div>{ text.process.collaborate }</div>
          </div>
        </div>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <div className='column one-third mobile-full' style={{ textAlign: 'left' }}>
            <h2>4. Execute</h2>
            <div>{ text.process.execute }</div>
          </div>
          <img src="../img/ux_execute.png" className='column two-thirds mobile-full'/>
        </div>
        <div className='give-me-some-serious-space'></div>
      </div>
    );
  }
});
