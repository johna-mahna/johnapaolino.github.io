import React from 'react';

export let Frame = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
  },
  getInitialState () {
    return {
      screenWidth: window.innerWidth + 'px',
      screenHeight: window.innerHeight + 'px',
      borderSize: 8
    };
  },
  getDefaultProps () {
    return {
      color: '#4BA8FF'
    };
  },
  // TODO handle fade on homescreen frame
  handleResize: function(e) {
    this.setState({
      screenWidth: window.innerWidth + 'px',
      screenHeight: window.innerHeight + 'px',

    });
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
    let mobileWidth = this.detectMobile() || (this.state.screenWidth < 620);
    if (mobileWidth) {
      this.setState({
        borderSize: 30
      });
    }
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
    let mobileWidth = this.detectMobile() || (this.state.screenWidth < 620);
    let leftFrame = {
      width: this.state.borderSize + 'px',
      height: this.state.screenHeight,
      display: 'inline-block',
      backgroundColor: this.props.color,
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '20'
    };
    let rightFrame = {
      width: this.state.borderSize + 'px',
      height: this.state.screenHeight,
      display: 'inline-block',
      backgroundColor: this.props.color,
      position: 'absolute',
      top: '0',
      right: '0',
      zIndex: '20'
    };
    let topFrame = {
      width: this.state.screenWidth,
      height: this.state.borderSize + 'px',
      display: 'inline-block',
      backgroundColor: this.props.color,
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '20'
    };
    let bottomFrame = {
      width: this.state.screenWidth,
      height: this.state.borderSize + 'px',
      display: 'inline-block',
      backgroundColor: this.props.color,
      position: 'absolute',
      bottom: '0',
      left: '0',
      zIndex: '20'
    };
    return (
      <div>
        <span style={ leftFrame }></span>
        <span style={ topFrame }></span>
        <span style={ bottomFrame }></span>
        <span style={ rightFrame }></span>
      </div>
    );
  }
});
