import React from 'react';
import {Frame} from './Frame.jsx'
import NavLink from './NavLink';

export let Work = React.createClass({
  render() {
    return (
      <div>
        <div className='content-container fade-in'>
          <h2><NavLink to="/" activeClassName="active" onlyActiveOnIndex>X</NavLink> Work</h2>
           <ul>
             <li><NavLink to="/work/ux">UX</NavLink></li>
             <li><NavLink to="/work/dev">Dev</NavLink></li>
             <li><NavLink to="/work/brand">Brand</NavLink></li>
           </ul>
           { this.props.children }
        </div>
         <Frame color='#E95973'/>
      </div>
    );
  }
});
