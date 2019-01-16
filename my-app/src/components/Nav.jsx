import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import '../styles/Nav.css';
import reactLogo from '../logo.svg';


class Nav extends Component {
  render () {
    const navLogo = <div id="NavLogoContainer"><img src={reactLogo} className="Nav-logo" /></div>;

    return (
      <Navbar className="nav-default" brand={navLogo}>
        <div className="nav-centered"><h1 id="nav-title">React Sandbox</h1></div>
      </Navbar>
    );
  }
}

export default Nav;
