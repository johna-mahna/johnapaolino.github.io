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
              <div className='capsule underscore'>
                <img src="../img/about_timeline.png" width="400px"/>
              </div>
              <div className='capsule underscore'>
                <img src="../img/about_architecture.png" width="200px"/>
                <h2>Studied Architecture</h2>
                <div>{ text.about.architecture }</div>
              </div>
              <div className='capsule underscore'>
                <img src="../img/about_ramsa.png" width="250px"/>
                <h2>Was an Architect at R.A.M.S.A.</h2>
                <div><div>{ text.about.ramsa }</div></div>
              </div>
              <div className='capsule underscore'>
                <img src="../img/about_yb.png" width="250px"/>
                <h2>Work at Yieldbot</h2>
                <div><div>{ text.about.yieldbot }</div></div>
              </div>
              <div className='capsule'>
                <img src="../img/about_code.png" width="250px"/>
                <h2>Learned to Code</h2>
                <div><div>{ text.about.yieldbot }</div></div>
              </div>
            </div>
          </div>
        </div>
         <Frame color={ this.props.color }/>
      </div>
    );
  }
});
