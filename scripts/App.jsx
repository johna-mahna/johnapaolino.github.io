import React, {Component} from 'react';
import NavLink from './components/NavLink'
import { Link } from 'react-router';

export let App = React.createClass({
  getInitialState () {
    return {
      loading: true,
      screenWidth: window.innerWidth + 'px',
      screenHeight: window.innerHeight + 'px',
    };
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
    }
    return (
      <div>
        {/*
          <h3>Johna</h3>
          <NavLink to="/" activeClassName="active" onlyActiveOnIndex>Home</NavLink>
          <NavLink to='/about' activeClassName='active'>About</NavLink>
          <NavLink to='/work' activeClassName='active'>Work</NavLink>
          <NavLink to='/repos' activeClassName='active'>Repos</NavLink>
        */}
        {/* activeClassName='active' */}
        <div id="home" style={ fullScreen }>
          <div className='spacer'></div>
          <div className='thick-box'>
            <span> Better website coming soon. </span>
            <div className="big">Designer &amp; Developer at <a target="_blank" href="http://www.yieldbot.com">Yieldbot.</a></div>
            <div>
              <br/>
              <span className="twitter"></span>
              <span><a href="https://twitter.com/johnapao" target="_blank">@johnapao</a></span>
            </div>
          </div>
        </div>
        <code>
          Below the fold Testing:
          <NavLink to="/" activeClassName="active" onlyActiveOnIndex>Home</NavLink>
          <NavLink to='/about' activeClassName='active'>About</NavLink>
        </code>
        { this.props.children }
      </div>
    );
  }
});
