import React, {Component} from 'react';
import NavLink from './components/NavLink'
import { Link } from 'react-router';

export let App = React.createClass({
  render() {
    return (
      <div>
        <h1>Johna Paolino</h1>
        <h3>Product Designer, Amateur Developer, Lego Enthusiast</h3>
        <LinkWidget name="about"/>
        <LinkWidget name="work"/>
        <LinkWidget name="repos"/>
      </div>
    );
  }
});

let LinkWidget = React.createClass({
  render(){
    let path = "/" + this.props.name;
    return(
      <NavLink to={ path } activeClassName='active'>{ this.props.name }</NavLink>
    );
  }
});
