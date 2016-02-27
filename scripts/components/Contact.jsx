import React from 'react';
import {Header} from './Header.jsx'
import {Frame} from './Frame.jsx'
import NavLink from './NavLink';

export let Contact = React.createClass({
  getDefaultProps () {
    return {
      color: '#1BB8BB'
    };
  },
  render() {
    return (
      <div>
        <div className='content-container'>
          <Header name='Contact' color={ this.props.color }/>
          <div className='header-spacer'></div>
          <div className='content fade-in'>
              Contact information is going to go here
          </div>
        </div>
        <Frame color={ this.props.color }/>
      </div>
    );
  }
});
