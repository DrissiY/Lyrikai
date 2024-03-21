import React from 'react'
import './NavBar.scss';
import logo from "../../assets/lirikai-white.png"

const NavBar = () => {
  return (
      <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar__logo" />
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/socials">Socials</a></li>
      </ul>


      <button className="btn-primary">Sign In</button>
  </nav>


  )
}

export default NavBar