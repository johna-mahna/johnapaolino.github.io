import React from 'react';
import NavLink from './NavLink';
import {Header} from './Header.jsx'
import {Frame} from './Frame.jsx';


export default React.createClass({
  render() {
    return (
      <div>
        <Header name='Repos' color={ this.props.color }/>
        <div className='header-spacer'></div>
       <ul>
         <li><NavLink to="/repos/rackt/react-router">React Router</NavLink></li>
         <li><NavLink to="/repos/facebook/react">React</NavLink></li>
       </ul>
       { this.props.children }
       <Frame color={ this.props.color }/>
      </div>
    );
  }
})
