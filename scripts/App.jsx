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
    let fullScreen = {
      width: this.state.screenWidth + 'px',
      height: this.state.screenHeight + 'px',
    };
    let mobileLink = {
      display: 'block',
      textAlign: 'center',
      fontSize: '1.2em',
      margin: '55px 0'
    };
    let svgStyle = {
      fill: "none",
      stroke: "black",
      strokeWidth: "5"
    }
    let detectMobile = this.detectMobile();
    return (
      <div>
        <div className='big-box'>
          <div className='give-me-some-space'></div>
          <div className='give-me-some-space'></div>
          <div className={detectMobile ? 'column full centered center-text' : 'capsule three-fourths centered'}>
            <div className={detectMobile ? 'column full centered center-text' : 'column full centered center-text'}>
              <span onMouseEnter={ this.updateColors }
                onTouchStart={ this.updateColors }
                onMouseLeave={ this.returnColors }
                style={ detectMobile ? mobileLink : {}}>
                <LinkWidget name="work" path='work' color="#E95973"/>
              </span>
              <span onMouseEnter={ this.updateColors }
                onTouchStart={ this.updateColors }
                onMouseLeave={ this.returnColors }
                style={ detectMobile ? mobileLink : {}}>
                <LinkWidget name="about" path='about' color="#FDC400"/>
              </span>
              <span onMouseEnter={ this.updateColors }
                onTouchStart={ this.updateColors }
                onMouseLeave={ this.returnColors }
                style={ detectMobile ? {display: 'none'} : {}}>
                <LinkWidget name="code lab" path='repos' color="#4A90E2"/>
              </span>
              <span onMouseEnter={ this.updateColors }
                onTouchStart={ this.updateColors }
                onMouseLeave={ this.returnColors }
                style={ detectMobile ? mobileLink : {}}>
                <LinkWidget name="contact" path='contact' color="#01BB8B"/>
              </span>
              <div className='scribble'>
                <div className='stroke_1'></div>
                <div className='stroke_2'></div>
                <div className='stroke_3'></div>
                <div className='stroke_4'></div>
              </div>
            </div>

            <div className={detectMobile ? '' : 'column full centered center-text'} style={{ marginLeft: '5%'}}>
              <div className='give-me-some-space'></div>
              <svg id="svg-test" className='centered-text' data-name="Layer 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396.12 234.86" width='100%' height='350px' style={ svgStyle }>
                <path className="cls-1" style={{ stroke: this.state.color }} d="M49,241.67c38.06,18.59,228.21-14.62,257-6C328.62,242.44,19.46,347,36.88,349.29c37.46,5,436.84-87.36,347.21-53.2C310.21,324.24,56.44,432,32.3,423.25c-22.84-8.3,326-52.48,389-38.68" transform="translate(-26.23 -219.68)"/>
                <path className="cls-2" style={{ strokeWidth: '3' }} d="M53,258.56C91.06,277.15,271.65,214.38,300.43,223c22.62,6.78-283.2,139-265.79,141.33,37.46,5,436.84-87.36,347.21-53.2C308,339.28,54.21,447.06,30.07,438.29c-22.84-8.3,326-52.48,389-38.68" transform="translate(-26.23 -219.68)"/>
                <path className="cls-3" d="M75.67,277c28.89,14.84,185.33-9.85,207-16.68,43-13.53-193.68,54-196.37,99-1.71,28.64,308.69-94.82,239.5-55.67C268.79,335.91,108.2,437.52,90.64,429s228.86-93.4,277.7-63.14" transform="translate(-26.23 -219.68)"/>
                <path className="cls-5" d="M160.58,282.56l14.65,46.08S172,305.76,178.85,301c8.06-5.63,13.35,1.15,16.85,23.29" transform="translate(-26.23 -219.68)"/>
                <path className="cls-5" d="M201.5,292.94l7.36,26.8s-3.18-22.88,3.62-27.63c8.06-5.63,13.35,1.15,16.85,23.29" transform="translate(-26.23 -219.68)"/>
                <path className="cls-5" d="M237.21,289.74c3.39-6.92,6.64-10.81,13.76-8.87,14.51,4,9.53,28.76,13.1,25.75,2.41-2-14.23-2.53-22.84,4.81a13.55,13.55,0,0,1-.53-14.22c6.13-10.7,21.77-7.11,24.75-3.57" transform="translate(-26.23 -219.68)"/>
                <path className="cls-5" d="M164.21,376.54c2.6-7.25,5.41-11.48,12.69-10.34,14.86,2.32,12.65,27.53,15.87,24.14,2.17-2.29-14.42-.95-22.17,7.31a13.55,13.55,0,0,1-2.1-14.07c4.91-11.31,20.85-9.48,24.2-6.28" transform="translate(-26.23 -219.68)"/>
                <path className="cls-5" d="M115.88,279.29c2.21,6.7,3.81,10.78,5.54,16.2,3.85,12,7.21,20.25,8.23,33.09,0.36,4.51.92,10.77-4,12-3.78.95-6.69,2.08-13.53-1.67-6.66-3.64-10.75-12-10.63-14.62" transform="translate(-26.23 -219.68)"/>
                <path className="cls-6" d="M138.55,319.19a17.37,17.37,0,0,1-.6-3.72c0.43-3.21-.39-3,1.47-6.15a8.34,8.34,0,0,1,5.14-3.91c2.33-.75,4.22.09,5.81,1,8.62,4.68,11.36,16.47,5.36,23.36-1.47,1.68-3.84,2.2-6.38,1.43a10.69,10.69,0,0,1-3.61-1.78C142,326.25,140.51,322.44,138.55,319.19Z" transform="translate(-26.23 -219.68)"/>
                <path className="cls-5" d="M300.76,325.1a8.35,8.35,0,0,1,5-4.86c2.32-.94,4.29.11,5.95,1.19,9,5.84,12.49,20.54,6.81,29.11-1.39,2.1-3.76,2.74-6.38,1.78a10.87,10.87,0,0,1-3.76-2.22C304.37,346.2,299.06,329,300.76,325.1Z" transform="translate(-26.23 -219.68)"/>
                <path className="cls-5" d="M199.2,357.62a8.35,8.35,0,0,1,5-4.86c2.32-.94,4.29.11,5.95,1.19,9,5.84,12.49,20.54,6.81,29.11-1.39,2.1-3.76,2.74-6.38,1.78a10.87,10.87,0,0,1-3.76-2.22C202.81,378.72,197.5,361.49,199.2,357.62Z" transform="translate(-26.23 -219.68)"/>
                <path className="cls-5" d="M148.55,411.28L131.8,360S150.6,342,159,349s-15.07,35-22.17,44.41" transform="translate(-26.23 -219.68)"/>
                <path className="cls-5" d="M227,342c2,5.59,7.61,31.83,8.34,36.56,0.15,1,11.77-10.7,14.68-6.13" transform="translate(-26.23 -219.68)"/>
                <path className="cls-5" d="M278,365.41s-4.9-26.54-9.93-30.89S292.84,353,292.84,353s-8.42-25.37-5.54-27.82" transform="translate(-26.23 -219.68)"/>
                <path className="cls-5" d="M263.3,371.46s-5.65-29.14-11-35" transform="translate(-26.23 -219.68)"/>
              </svg>
            </div>

            <div className={detectMobile ? 'center-text' : 'column full centered center-text'} style={detectMobile ? {fontSize: '.8em'} : {}}>
              <div className={detectMobile ? 'give-me-some-serious-space' : 'give-me-some-space'}></div>
              <div>Johna is currently a <strong>Senior Product Designer @ Yieldbot</strong>.
              She has experience as a Front-End Developer and Architect.
              She built this website using react & react-router.
              She hates talking about herself in the third-person.
              <span>&#32;&#32;[ <a href='https://github.com/johnapaolino/johnapaolino.github.io' target='_blank' style={{fontSize: '0.8em'}}>see the source code</a> ]</span>
              </div>
              <div className={detectMobile ? 'give-me-some-serious-space' : 'give-me-some-space'}></div>
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
