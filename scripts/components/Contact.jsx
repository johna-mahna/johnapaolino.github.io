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
        <Header name='Contact' color={ this.props.color }/>
        <div className='big-box'>
          <div className='header-spacer'></div>

          <div className='capsule'>
            <div className='column full centered center-text underscore'>
              <h2>Sure, coffee sounds great!</h2>
              { detectMobile ?
                <img src="../img/contact.jpg" className='column full centered'/> :
                <img src="../img/contact.jpg" width='300px' className='column one-half centered'/>
              }

              <div className='give-me-some-space'></div>
            </div>
          </div>
          <div className='give-me-some-space'></div>
          <div className='capsule centered center-text'>
            <h3>Internet connections are also cool.</h3>
            <div  className={ (detectMobile) ? 'column full centered' : 'column one-fourth center-text'}>
              <a href='https://github.com/johnapaolino' target='_blank'>
                <img src="../img/contact_github.png" width={ (detectMobile) ? '240px' : '75px'}/>
                <div>github</div>
              </a>
            </div>
            <div  className={ (detectMobile) ? 'column full centered' : 'column one-fourth'}>
              <a href='https://www.linkedin.com/in/johnapaolino' target='_blank'>
                <img src="../img/contact_linkedin.png" width={ (detectMobile) ? '240px' : '75px'}/>
                <div>linkedin</div>
              </a>
            </div>
            <div  className={ (detectMobile) ? 'column full centered center-text' : 'column one-fourth center-text'}>
              <a href='https://www.twitter.com/johnapao' target='_blank'>
                <img src="../img/contact_twitter.png" width={ (detectMobile) ? '240px' : '75px'}/>
                <div>twitter</div>
              </a>
            </div>
            <div  className={ (detectMobile) ? 'column full centered' : 'column one-fourth center-text'}>
              <a href='mailto:johna.paolino@gmail.com' target='_blank'>
                <img src="../img/contact_gmail.png" width={ (detectMobile) ? '240px' : '75px'}/>
                <div>email</div>
              </a>
            </div>
          </div>
          <div className='give-me-some-serious-space'></div>
        </div>

        <Frame color={ this.props.color }/>

      </div>
    );
  }
});
