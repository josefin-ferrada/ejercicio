import React from 'react';
import logo from '../bitcoin.png';
import '../App.css';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Valor Bitcoin</h3>
      </header>
  );
}

export default Header;
