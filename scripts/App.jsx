import React, {Component} from 'react';
import NavLink from './components/NavLink'
import { Link } from 'react-router';

export let App = React.createClass({
  render() {
    return (
      <div>
        <h1>Johna Paolino</h1>
        <h3>Product Designer, Amateur Developer, Lego Enthusiast</h3>
        <LinkWidget name="about" color="#FDC400"/>
        <LinkWidget name="work" color="#E95973"/>
        <LinkWidget name="repos" color="#4A90E2"/>
      </div>
    );
  }
});

let LinkWidget = React.createClass({
  render(){
    let path = "/" + this.props.name;
    let bracketStyle = {
      color: this.props.color,
      padding: '0 10px'
    };
    return(
      <span>
        <span style={ bracketStyle }>[</span>
        <NavLink to={ path } activeClassName='active'>{ this.props.name }</NavLink>
        <span style={ bracketStyle }>]</span>
      </span>
    );
  }
});
