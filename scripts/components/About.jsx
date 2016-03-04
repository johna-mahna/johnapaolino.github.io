import React from 'react';
import {Header} from './Header.jsx'
import {Frame} from './Frame.jsx'
import NavLink from './NavLink';
import {text} from '../text';

export let About = React.createClass({
  getDefaultProps () {
    return {
      color: '#FDC400'
    };
  },
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
        <Header name='About' color={ this.props.color }/>
        <div className='big-box'>
          <div className='header-spacer'></div>

          <div className='capsule'>
            <div className='column four-fifths centered center-text underscore'>
              <div className='give-me-some-space'></div>
              { detectMobile ?
                <img src='../img/about_architecture.png' className='mobile-full'/> :
                <img src='../img/about_architecture.png' width='200px'/>
              }
              <h2>All-Nighters @ Architecture Studio</h2>
              <div>{ text.about.architecture }</div>
              <div className='give-me-some-space'></div>
            </div>
          </div>

          <div className='capsule'>
            <div className='column four-fifths centered center-text underscore'>
              <div className='give-me-some-space'></div>
              { detectMobile ?
                <img src='../img/about_ramsa.png' className='mobile-full'/> :
                <img src='../img/about_ramsa.png' width='200px'/>
              }
              <h2>What is this? A Center for Ants?</h2>
              <div>{ text.about.ramsa }</div>
              <div className='give-me-some-space'></div>
            </div>
          </div>

          <div className='capsule'>
            <div className='column four-fifths centered center-text underscore'>
              <div className='give-me-some-space'></div>
              { detectMobile ?
                <img src='../img/about_yb.png' className='mobile-full'/> :
                <img src='../img/about_yb.png' width='200px'/>
              }
              <h2>Transitioning to Tech</h2>
              <div>{ text.about.yieldbot }</div>
              <div className='give-me-some-space'></div>
            </div>
          </div>

          <div className='capsule'>
            <div className='column four-fifths centered center-text underscore'>
              <div className='give-me-some-space'></div>
              { detectMobile ?
                <img src='../img/about_code.png' className='mobile-full'/> :
                <img src='../img/about_code.png' width='200px'/>
              }
              <h2>Code + Design</h2>
              <div>{ text.about.code }</div>
              <div className='give-me-some-space'></div>
            </div>
          </div>

          <div className='capsule'>
            <div className='column four-fifths centered center-text'>
              <div className='give-me-some-space'></div>
              <h2>Up Next?</h2>
              <div>{ text.about.nextUp }</div>
              <div className='give-me-some-space'></div>
              <NavLink to='/contact'>
                <button className='mobile-button'>Visit my Contact Page</button>
              </NavLink>
            </div>
            <div className='give-me-some-space'></div>
            <div className='give-me-some-space'></div>
          </div>

        </div>

        <Frame color={ this.props.color }/>

      </div>
    );
  }
});
