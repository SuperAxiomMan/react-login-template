/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Nav = () => {
  return (
    <div>
      <nav>
  <div className="navbar">
    <div className="logo">Fucking Navbar</div>
    <div className="burger">
      <span className="material-icons icon">menu</span>
    </div>
    <ul className="navList">
      <li><a href="#">Chiotte</a></li>
      <li><a href="#">Cyprine</a></li>
      <li><a href="#">Sperme</a></li>
    </ul>
  </div>
  <div className="dropdown">
    <ul className="navList">
      <li><a href="#">Chiotte</a></li>
      <li><a href="#">Cyprine</a></li>
      <li><a href="#">Sperme</a></li>
    </ul>
  </div>
</nav>
    </div>
  );
};

export default Nav;