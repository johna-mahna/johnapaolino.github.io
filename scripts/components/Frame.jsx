import React from 'react';

export let Frame = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    borderSize: React.PropTypes.number
  },
  getInitialState () {
    return {
      screenWidth: window.innerWidth + 'px',
      screenHeight: window.innerHeight + 'px'
    };
  },
  getDefaultProps () {
    return {
      color: '#4BA8FF',
      borderSize: 8
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
    let leftFrame = {
      width: this.props.borderSize + 'px',
      height: this.state.screenHeight,
      display: 'inline-block',
      backgroundColor: this.props.color,
      position: 'absolute',
      top: '0',
      left: '0'
    };
    let rightFrame = {
      width: this.props.borderSize + 'px',
      height: this.state.screenHeight,
      display: 'inline-block',
      backgroundColor: this.props.color,
      position: 'absolute',
      top: '0',
      right: '0'
    };
    let topFrame = {
      width: this.state.screenWidth,
      height: this.props.borderSize + 'px',
      display: 'inline-block',
      backgroundColor: this.props.color,
      position: 'absolute',
      top: '0',
      left: '0'
    };
    let bottomFrame = {
      width: this.state.screenWidth,
      height: this.props.borderSize + 'px',
      display: 'inline-block',
      backgroundColor: this.props.color,
      position: 'absolute',
      bottom: '0',
      left: '0'
    };
    return (
      <div className='fade-in'>
        <span style={ leftFrame }></span>
        <span style={ topFrame }></span>
        <span style={ bottomFrame }></span>
        <span style={ rightFrame }></span>
      </div>
    );
  }
});
