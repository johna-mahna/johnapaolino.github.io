import React, {Component} from 'react';
import NavLink from './components/NavLink';
import {Frame} from './components/Frame.jsx'
import { Link } from 'react-router';

export let App = React.createClass({
  getInitialState () {
    return {
      color: '#fff'
    }
  },
  updateColors () {
    console.log('i work');
  },
  render() {
    return (
      <div className='big-box'>
        <div className='header-spacer'></div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/7/74/Animated_construction_of_Sierpinski_Triangle.gif' width='10px'/>
        <span onMouseEnter={ this.updateColors }><LinkWidget name="about" color="#FDC400"/></span>
        <span onMouseEnter={ this.updateColors }><LinkWidget name="work" color="#E95973"/></span>
        <span onMouseEnter={ this.updateColors }><LinkWidget name="repos" color="#4A90E2"/></span>
        <span onMouseEnter={ this.updateColors }><LinkWidget name="contact" color="#1BB8BB"/></span>
        <div className='capsule'>
          <div className='column'>
            <div style={{ fontSize: '5.5em' }}>Johna</div>
            <div style={{ fontSize: '5.5em', marginTop: '-0.6em', paddingLeft: '1em' }}>Paolino</div>
          </div>
        </div>
        <div className='capsule'>
          <div className='column'>Product Designer, Amateur Developer, Lego Enthusiast</div>
        </div>
        <Frame color={ this.state.color }/>
      </div>
    );
  }
});

let LinkWidget = React.createClass({
  render(){
    let path = "/" + this.props.name;
    let bracketStyle = {
      color: this.props.color,
      padding: '0 10px'
    };
    return(
      <span>
        <span style={ bracketStyle }>[</span>
        <NavLink to={ path } activeClassName='active'>{ this.props.name }</NavLink>
        <span style={ bracketStyle }>]</span>
      </span>
    );
  }
});
