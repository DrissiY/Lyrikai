import React from 'react'
import './NavBar.scss';
import logo from "../../assets/lirikai-white.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <nav className="navbar">
        <div>
        <img src={logo} alt="Logo" className="navbar__logo" />
        </div>
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/socials">Socials</a></li>
      </ul>
      <Link to="/signup" className="btn-primary">
      Sign In
    </Link>
  </nav>


  )
}

export default NavBar