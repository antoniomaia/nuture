import React from "react";
import logo from "./logo.png";
import "./styles.css";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>NUTURE.earth</p>
    </header>
  );
};

export default Header;
