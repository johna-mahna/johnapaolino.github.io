import React from 'react';
import NavLink from './NavLink'

export let Header = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    name: React.PropTypes.string
  },
  getDefaultProps () {
    return {
      color: '#000',
      name: ''
    }
  },
  render() {
    let leftX = {
      backgroundColor: this.props.color,
      transform: 'rotate(45deg)',
      WebkitTransform: 'rotate(45deg)',
    };
    let rightX = {
      backgroundColor: this.props.color,
      transform: 'rotate(-45deg)',
      WebkitTransform: 'rotate(-45deg)',
      marginLeft: '-4px'
    };
    return (
      <div className='fade-in'>
        <h2>
        <NavLink to="/" activeClassName="active" onlyActiveOnIndex>
          <div style={{ display: 'inline-block', width: '30px', marginLeft: '18px', marginRight: '18px' }}>
            <span style={{ display: 'inline-block', width: '10px'}}></span>
            <span className='x-icon' style={ leftX }></span>
            <span className='x-icon' style={ rightX }></span>
          </div>
        </NavLink>
          <span style={{ verticalAlign: 'super' }}>{ this.props.name }</span>
        </h2>
      </div>
    );
  }
});
