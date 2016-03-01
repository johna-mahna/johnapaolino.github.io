import React from 'react';
import {text} from '../text';

export let Brand = React.createClass({
  render() {
    let nextLink = { position: 'fixed', top: '40px', right: '35px', zIndex: '200' };
    return (
      <div className='fade-in' ref='top'>
        <div>
          <div className='give-me-some-space'></div>
          <h1>Brand</h1>
          <div>{ text.brand.general }</div>
        </div>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <h2>Brand Identity</h2>
          <div className='column one-half centered mobile-full'>{ text.brand.collateral }</div>
          <div className='give-me-some-space'></div>
          <img src='../img/brand_deck.jpg' width='200px' className='column one-fourth mobile-hide'/>
          <img src='../img/brand_case-study.jpg' width='200px' className='column one-fourth mobile-hide'/>
          <img src='../img/brand_styleguide.png' width='200px' className='column one-half mobile-full'/>
        </div>
        <div className='capsule underscore'></div>
        <div className='give-me-some-space'></div>
        <div className='capsule'>
          <h2>Corporate Website</h2>
          <div className='column two-thirds centered mobile-full'>{ text.brand.website }</div>
          <div className='give-me-some-space'></div>
          <div className='capsule'>
            <img src='../img/brand_website-home.png' width='200px' className='column one-half mobile-full'/>
            <img src='../img/brand_website-engineering.png' width='200px' className='column one-half mobile-hide'/>
          </div>
          <div className='give-me-some-space'></div>
          <a href='https://www.yieldbot.com' target='_blank'>Visit the Live Website</a>
          <div className='give-me-some-space'></div>
        </div>
        <div className='capsule underscore'></div>
        <div className='give-me-some-space'></div>
          <div className='capsule'>
          <img src='../img/brand_gaston.png' width='200px' className='column two-thirds mobile-full'/>
          <div className='column one-third mobile-full' style={{ textAlign: 'left' }}>
            <div className='give-me-some-space'></div>
            <h2>UI Style Guide</h2>
            <div>{ text.brand.guide }</div>
          </div>
        </div>
        <div className='give-me-some-serious-space'></div>
      </div>
    );
  }
});
