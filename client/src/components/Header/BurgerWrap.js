import React, { Component } from 'react';
import Menu from 'react-burger-menu/lib/menus/slide';

import './Burger.css';

class BurgerWrap extends Component {
  render() {
    return (
      <Menu right width={500}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    );
  }
}
export default BurgerWrap;