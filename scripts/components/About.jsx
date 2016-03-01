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
  render() {
    return (
      <div>
        <div className='content-container'>
          <Header name='About' color={ this.props.color }/>
          <div className='header-spacer'></div>
          <div className='content fade-in'>
            <div className='big-box'>
              {/* TODO get funny timeline in that links down to sections */}
              <div className='capsule underscore'>
                <div className='give-me-some-space'></div>
                <img src='../img/about_architecture.png' width='200px'/>
                <h2>All-Nighters @ Architecture Studio</h2>
                <div className='column four-fifths centered'>{ text.about.architecture }</div>
                <div className='give-me-some-space'></div>
              </div>
              <div className='capsule underscore'>
                <img src='../img/about_ramsa.png' width='250px'/>
                <h2>What is this? A Center for Ants?</h2>
                <div className='column four-fifths centered'>{ text.about.ramsa }</div>
                <div className='give-me-some-space'></div>
              </div>
              <div className='capsule underscore'>
                <div className='give-me-some-space'></div>
                <img src='../img/about_yb.png' width='250px'/>
                <h2>Transitioning to Tech</h2>
                <div className='column four-fifths centered'>{ text.about.yieldbot }</div>
                <div className='give-me-some-space'></div>
              </div>
              <div className='capsule'>
                <div className='give-me-some-space'></div>
                <img src='../img/about_code.png' width='250px'/>
                <h2>Code + Design</h2>
                <div className='column four-fifths centered'>{ text.about.yieldbot }</div>
              </div>
              <div className='capsule underscore'></div>
              <div className='give-me-some-space'></div>
              <div className='capsule'>
                <div className='give-me-some-space'></div>
                <h2>Up Next?</h2>
                <div className='column four-fifths centered'>{ text.about.nextUp }</div>
                <div className='give-me-some-space'></div>
                <NavLink to='/contact'>
                  <button className='mobile-button'>Visit my Contact Page</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='give-me-some-serious-space'></div>
        </div>
         <Frame color={ this.props.color }/>
      </div>
    );
  }
});
