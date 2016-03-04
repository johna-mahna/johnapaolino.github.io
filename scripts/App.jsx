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
      textAlign: 'left',
      fontSize: '1.1em',
      margin: '55px 0'
    };
    let detectMobile = this.detectMobile();
    return (
      <div>
        <div className='big-box'>
          {detectMobile ?
            <div className='give-me-some-space'></div> :
            <div className='header-spacer'></div>
          }
          <div className='capsule'>
            <div className={detectMobile ? 'column full centered center-text' : 'column full'}>
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
            </div>

            <div className='capsule'>
              <div className='column full'>
                <div className='give-me-some-space'></div>
                { detectMobile ?
                <div>
                  <img src="./img/name-first.png" className='column' width='65%'/>
                  <img src="./img/name-last.png" className='column' width='65%'/>
                </div>
                :
                <img src="./img/name.png" className='column one-third'/>
                }
              </div>
            </div>

            <div className='capsule'>
              <div className='column full'>
                { detectMobile ?
                  <div>
                    <div className='give-me-some-serious-space'></div>
                    <img src="./img/name-desc.png" width='70%' className='column'/>
                  </div>:
                  <img src="./img/name-desc.png" width='200px' className='column'/>
                }
              </div>
            </div>

            { detectMobile ?
              '' :
              <div>
                <div className='capsule'>
                  <div className='give-me-some-space'></div>
                  <div className='column full' style={{fontSize: '0.8em', marginLeft: '20px'}}>
                    This website was built using react and react-router.&#32;&#32;
                    <span>&#32;&#32;[ <a href='https://github.com/johnapaolino/johnapaolino.github.io' target='_blank' style={{fontSize: '0.8em'}}>see the source code</a> ]</span>
                  </div>
                </div>
                <img src="./img/empire.png" width='200px' className='column pull-right' style={{ position: 'absolute', right: '35', bottom: '0' }}/>
              </div>
            }
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
