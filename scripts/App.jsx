import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import NavLink from './components/NavLink';
import {Frame} from './components/Frame.jsx'
import { Link } from 'react-router';

export let App = React.createClass({
  getInitialState () {
    return {
      color: '#313538',
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
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
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
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
      width: this.state.screenWidth + 'px',
      height: this.state.screenHeight + 'px',
    };
    let mobileLink = {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      backgroundColor: 'rgba(255,255,255,0.85)',
      padding: '10px',
      borderRadius: '5px',
      margin: '10px 0'
    };
    let mobileWidth = (this.state.screenWidth < 480);
    return (
      <div id='hero-image' style={ fullScreen }>
        <div className='big-box'>
          <div className='capsule'>
            <div className='give-me-some-space'></div>
            <div className='link-container' className={mobileWidth ? '' : 'pull-right'} style={ mobileWidth ? {position: 'absolute', bottom: '15', width: '90%' } : {}}>
              <span onMouseEnter={ this.updateColors }
                onTouchStart={ this.updateColors }
                onMouseLeave={ this.returnColors }
                style={ mobileWidth ? mobileLink : {}}>
                <LinkWidget name="work" path='work' color="#E95973"/>
              </span>
              <span onMouseEnter={ this.updateColors }
                onTouchStart={ this.updateColors }
                onMouseLeave={ this.returnColors }
                style={ mobileWidth ? mobileLink : {}}>
                <LinkWidget name="about" path='about' color="#FDC400"/>
              </span>
              <span onMouseEnter={ this.updateColors }
                onTouchStart={ this.updateColors }
                onMouseLeave={ this.returnColors }
                style={ mobileWidth ? {display: 'none'} : {}}>
                <LinkWidget name="code lab" path='repos' color="#4A90E2"/>
              </span>
              <span onMouseEnter={ this.updateColors }
                onTouchStart={ this.updateColors }
                onMouseLeave={ this.returnColors }
                style={ mobileWidth ? mobileLink : {}}>
                <LinkWidget name="contact" path='contact' color="#01BB8B"/>
              </span>
            </div>
            <div className='give-me-some-space'></div>
            <div className='column pull-right' style={mobileWidth ? { display: 'none' } : { marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.65)', fontSize: '0.8em', textAlign: 'right' }}>
              This website was built using react and react-router.&#32;&#32;
              <div>[ <a href='https://github.com/johnapaolino/johnapaolino.github.io' target='_blank'>source code</a> ]</div>
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
    let path = "/" + this.props.path;
    let bracketStyle = {
      color: this.props.color,
      padding: '0 10px'
    };
    return(
      <NavLink className='hover' to={ path } activeClassName='active' data-color={ this.props.color } style={{ color: '#000', textDecoration: 'none' }}>
        <span style={ bracketStyle } data-color={ this.props.color }>[</span>
        <span data-color={ this.props.color }>{ this.props.name }</span>
        <span style={ bracketStyle } data-color={ this.props.color }>]</span>
      </NavLink>
    );
  }
});
