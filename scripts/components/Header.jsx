import React from 'react';
import NavLink from './NavLink'

export let Header = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    name: React.PropTypes.string
  },
  getDefaultProps () {
    return {
      color: '#4BA8FF',
      name: ''
    }
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
    let mobileWidth = this.detectMobile();
    let leftX = {
      backgroundColor: this.props.color,
      transform: 'rotate(45deg)',
      WebkitTransform: 'rotate(45deg)',
      marginLeft: (mobileWidth ? '55px' : ''),
      marginTop: (mobileWidth ? '25px' : '')
    };
    let rightX = {
      backgroundColor: this.props.color,
      transform: 'rotate(-45deg)',
      WebkitTransform: 'rotate(-45deg)',
      marginLeft: (mobileWidth ? '55px' : '-4px'),
      marginTop: (mobileWidth ? '-105px' : '')
    };
    return (
      <div className='header'>
        <NavLink to="/" activeClassName="active" onlyActiveOnIndex className='fade-in'>
          <div style={{ display: 'inline-block', width: '30px', marginLeft: '18px', marginRight: '18px' }}>
            <span style={{ display: 'inline-block', width: '10px'}}></span>
            <span className='x-icon' style={ leftX }></span>
            <span className='x-icon' style={ rightX }></span>
          </div>
        </NavLink>
        <span className='fade-in' style={ (mobileWidth) ? { marginLeft: '125px', verticalAlign: 'super', } : { verticalAlign: 'super' }}>{ this.props.name }</span>
      </div>
    );
  }
});
