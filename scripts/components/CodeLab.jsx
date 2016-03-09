import React from 'react';
import { Link } from 'react-router'
import {Header} from './Header.jsx'
import {Frame} from './Frame.jsx'
import SubNavLink from './SubNavLink';

export let CodeLab = React.createClass({
  render() {
    console.log(this.props.children);
    return (
      <div>
      <Header name='Code Lab' color={ this.props.color }/>
      <div className='big-box'>
        <div className='header-spacer'></div>
        <div className='capsule'>
          { this.props.children }
        </div>
      </div>
      <Frame color={ this.props.color }/>
      </div>
    );
  }
})
