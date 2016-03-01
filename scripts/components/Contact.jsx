import React from 'react';
import {Header} from './Header.jsx'
import {Frame} from './Frame.jsx'
import NavLink from './NavLink';

export let Contact = React.createClass({
  getDefaultProps () {
    return {
      color: '#01BB8B'
    };
  },
  render() {
    return (
      <div>
        <div className='content-container'>
          <Header name='Contact' color={ this.props.color }/>
          <div className='header-spacer'></div>
          <div className='content fade-in'>
            <h2>Sure, coffee sounds great!</h2>
            <div className='give-me-some-space'></div>
            <img src="../img/contact.jpg" width="350px"/>
            <div className='give-me-some-space'></div>
            <div className='capsule underscore'></div>
            <div className='give-me-some-space'></div>
            <h2>Or connect with me on the internet:</h2>
            <div className='give-me-some-space'></div>
            <div className='give-me-some-space'></div>
            <div className='capsule'>
              <div className='column one-fourth'>
                <a href='https://github.com/johnapaolino' target='_blank'>
                  <img src="../img/contact_github.png" width="75px"/>
                  <div>github</div>
                </a>
              </div>
              <div className='column one-fourth'>
                <a href='https://www.linkedin.com/in/johnapaolino' target='_blank'>
                  <img src="../img/contact_linkedin.png" width="75px"/>
                  <div>linkedin</div>
                </a>
              </div>
              <div className='column one-fourth'>
                <a href='https://www.twitter.com/johnapao' target='_blank'>
                  <img src="../img/contact_twitter.png" width="75px"/>
                  <div>twitter</div>
                </a>
              </div>
              <div className='column one-fourth'>
                <a href='mailto:johna.paolino@gmail.com' target='_blank'>
                  <img src="../img/contact_gmail.png" width="75px"/>
                  <div>email</div>
                </a>
              </div>
            </div>
            <div className='give-me-some-serious-space'></div>
          </div>
        </div>
        <Frame color={ this.props.color }/>
      </div>
    );
  }
});
