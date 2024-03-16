import React from 'react'
import './NavBar.scss';
import logo from "../../assets/lirikai.png"

const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="navbar__left">
      <img src={logo} alt="Logo" className="navbar__logo" />
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/socials">Socials</a></li>
      </ul>
    </div>
    <div className="navbar__right">
      <button className="btn-primary">Sign In</button>
    </div>
  </nav>
  )
}

export default NavBar