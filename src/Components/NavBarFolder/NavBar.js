import React from 'react';
import './NavBar.css';

const NavBar = () => {

  return (
    <>
      <div className="navbar">
        <nav><a id="log-in" className="btn" href="log in">Log In</a></nav>
        <nav><a id="sign-up" className="btn" href="sign up">Sign Up</a></nav>
      </div>
    </>
  )
}

export default NavBar;