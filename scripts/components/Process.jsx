import React from 'react';
import {text} from '../text';

export let Process = React.createClass({
  detectMobile() {
       if ( navigator.userAgent.match(/Android/i)
       || navigator.userAgent.match(/webOS/i)
       || navigator.userAgent.match(/iPhone/i)
       || navigator.userAgent.match(/iPad/i)
       || navigator.userAgent.match(/iPod/i)
       || navigator.userAgent.match(/BlackBerry/i)
       || navigator.userAgent.match(/Windows Phone/i)
       ){
          return true;
        }
       else {
          return false;
        }
  },
  render() {
    let detectMobile = this.detectMobile();
    return (
      <div>
        <div className='capsule'>
          <div className='column full centered underscore'>
            <h1>Design Development Process</h1>
            <div>{ text.process.general }</div>
            <div className='give-me-some-space'></div>
          </div>
        </div>

        <div className='capsule'>
          <div className='column full centered'>
            <h2>1. Research</h2>
            <div>{ text.process.research }</div>
            <div className='give-me-some-space'></div>
            { detectMobile ?
              <img src="../img/ux_research_1.jpg" width='90%' style={{ textAlign: 'center' }}/> :
              <div>
                <div className='capsule underscore'>
                  <img src='../img/ux_research_3.jpg' className='column one-third'/>
                  <img src='../img/ux_research_1.jpg' className='column one-third'/>
                  <img src='../img/ux_research_2.jpg' className='column one-third'/>
                </div>
                <div className='give-me-some-space'></div>
              </div>
            }
          </div>
        </div>

        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <div className='column full centered'>
            <div className='capsule'>
              <div className='column one-third mobile-full' style={{ textAlign: 'left' }}>
                <h2>2. Rough Ideas</h2>
                <div>{ text.process.ideas }</div>
              </div>
              <img src='../img/ux_rough.png' className='column two-thirds mobile-full'/>
            </div>
          </div>
        </div>



        <div className='fade-in'>



          <div className='capsule'>
            <div className='give-me-some-space'></div>
            <img src='../img/ux_collaborate_1.png' className='column two-thirds mobile-full'/>
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
            <img src='../img/ux_execute.png' className='column two-thirds mobile-full'/>
          </div>
          <div className='give-me-some-serious-space'></div>
        </div>


      </div>
    );
  }
});
