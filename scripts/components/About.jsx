import React from 'react';
import {Header} from './Header.jsx'
import {Frame} from './Frame.jsx'
import NavLink from './NavLink';

export let About = React.createClass({
  getDefaultProps () {
    return {
      color: '#FDC400'
    };
  },
  render() {
    return (
      <div>
        <div className='content-container fade-in'>
        <Header name='About' color={ this.props.color }/>
          <div className='fade-in'>
            Tell them about you
          </div>
        </div>
         <Frame color={ this.props.color }/>
      </div>
    );
  }
});
