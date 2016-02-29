import React from 'react';
import NavLink from './NavLink';
import {Header} from './Header.jsx'
import {Frame} from './Frame.jsx';


export default React.createClass({
  render() {
    return (
      <div>
        <Header name='Code Lab' color={ this.props.color }/>
        <div className='header-spacer'></div>
        <div className='big-box fade-in'>
          <h2>Coming Soon...</h2>
        </div>
       { /* this.props.children
         <ul>
           <li><NavLink to="/repos/rackt/react-router">React Router</NavLink></li>
           <li><NavLink to="/repos/facebook/react">React</NavLink></li>
         </ul>
         */ }
       <Frame color={ this.props.color }/>
      </div>
    );
  }
})
