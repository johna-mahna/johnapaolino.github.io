import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import NavLink from './components/NavLink';
import {Frame} from './components/Frame.jsx'
import { Link } from 'react-router';

export let App = React.createClass({
  getInitialState () {
    return {
      color: '#313538',
      screenWidth: window.innerWidth + 'px',
      screenHeight: window.innerHeight + 'px',
    }
  },
  updateColors (event) {
    let currentColor = event.target.attributes.getNamedItem('data-color').value;
    this.setState({
      color: currentColor
    })
  },
  returnColors () {
    this.setState({
      color: '#313538'
    })
  },
  handleResize: function(e) {
    this.setState({
      screenWidth: window.innerWidth + 'px',
      screenHeight: window.innerHeight + 'px'
    });
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
  render() {
    let fullScreen = {
      width: this.state.screenWidth,
      height: this.state.screenHeight
    };
    let skew = {
      transform: 'skew(-13deg, 49deg)',
      letterSpacing: '-5px',
      fontSize: '15px',
      color: '#313538',
      marginLeft: '52px',
      marginTop: '85px'
    }
    return (
      <div id='hero-image' style={ fullScreen }>
        <div className='big-box'>
          <div className='header-spacer'></div>
          <div className='pull-right'>
            <span onMouseEnter={ this.updateColors } onMouseLeave={ this.returnColors }><LinkWidget name="about" color="#FDC400"/></span>
            <span onMouseEnter={ this.updateColors } onMouseLeave={ this.returnColors }><LinkWidget name="work" color="#E95973"/></span>
            <span onMouseEnter={ this.updateColors } onMouseLeave={ this.returnColors }><LinkWidget name="repos" color="#4A90E2"/></span>
            <span onMouseEnter={ this.updateColors } onMouseLeave={ this.returnColors }><LinkWidget name="contact" color="#1BB8BB"/></span>
          </div>
          <div className='capsule'>
            <div className='column' style={ skew }>
              <div style={{ fontSize: '5.5em' }}>Johna</div>
              <div style={{ fontSize: '5.5em', marginTop: '-0.6em', paddingLeft: '1em' }}>Paolino</div>
            </div>
          </div>
          <Frame color={ this.state.color }/>
        </div>
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
      <span data-color={ this.props.color }>
        <span style={ bracketStyle } data-color={ this.props.color }>[</span>
        <NavLink to={ path } activeClassName='active' data-color={ this.props.color } style={{ color: '#ccc', textDecoration: 'none' }}>{ this.props.name }</NavLink>
        <span style={ bracketStyle } data-color={ this.props.color }>]</span>
      </span>
    );
  }
});
