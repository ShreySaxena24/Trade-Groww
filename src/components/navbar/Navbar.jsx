/*eslint-disable*/
import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About Us</a></p>
          <p><a href="#features">Learning</a></p>
          <p><a href="#possibility">Investing</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>
        <Link to="/login">Sign In</Link>
        </p>
        <button type="button">
        <Link to="/signup">Sign up</Link>
        </button>
      </div>
      <div className="gpt3__navbar-menu">
      </div>
    </div>
  );
};

export default Navbar;
