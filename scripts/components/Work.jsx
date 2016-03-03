import React from 'react';
import { Link } from 'react-router'
import {Header} from './Header.jsx'
import {Frame} from './Frame.jsx'
import SubNavLink from './SubNavLink';

export let Work = React.createClass({
  getDefaultProps () {
    return {
      color: '#E95973'
    };
  },
  render() {
    return (
      <div>
      <Header name='Work' color={ this.props.color }/>
      <div className='big-box'>
        <div className='header-spacer'></div>
        <div className='capsule'>
          <div className='column full'>
          <SubNavLink to="/work/projects">Projects</SubNavLink>
          <SubNavLink to="/work/process">Process</SubNavLink>
          <SubNavLink to="/work/brand">Brand</SubNavLink>
          </div>
        </div>
        <div className='capsule'>
          { this.props.children }
        </div>
      </div>
      <Frame color={ this.props.color }/>
      </div>
    );
  }
});
