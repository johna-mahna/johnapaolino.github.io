import React from 'react';
import {Header} from './Header.jsx'
import {Frame} from './Frame.jsx'
import NavLink from './NavLink';

export let Work = React.createClass({
  getDefaultProps () {
    return {
      color: '#E95973'
    };
  },
  render() {
    return (
      <div>
        <div className='content-container'>
          <Header name='Work' color={ this.props.color }/>
          <div className='header-spacer'></div>
          <div className='content fade-in'>
            { this.props.children }
          </div>
        </div>
        <Frame color={ this.props.color }/>
      </div>
    );
  }
});
