import React from 'react';
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        Hm, not found.
        <div>
          <NavLink to="/" activeClassName="active" onlyActiveOnIndex>Go home</NavLink>
        </div>
      </div>
    );
  }
})
