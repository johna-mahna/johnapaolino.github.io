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
        <div className='content-container'>
          <Header name='Work' color={ this.props.color }/>
          <div className='header-spacer'></div>
          <div className='content fade-in'>
            <div style={{ display: 'block', textAlign: 'left', margin: '10px'}}>
              <SubNavLink to="/work/projects">Projects</SubNavLink>
              <SubNavLink to="/work/process">Process</SubNavLink>
              <SubNavLink to="/work/brand">Brand</SubNavLink>
            </div>
            { this.props.children }
          </div>
        </div>
        <Frame color={ this.props.color }/>
      </div>
    );
  }
});
