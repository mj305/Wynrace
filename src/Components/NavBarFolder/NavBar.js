import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> 184ca0fc89090253f5ee4a603f46f5a7e8db166c
import './NavBar.css';

import logo from './logo.png';

const NavBar = () => {
  return (
    <>
    <Router>
<<<<<<< HEAD
      <div className="nav-bar-container" >
        <img className="nav-bar-logo" src={logo} />
        <div className="nav-bar-group" >
          <Link className="nav-bar-item1" to="/sign in">Log In</Link>
          <Link className="nav-bar-item2" to="/sign in"> Sign Up</Link>
        </div>
=======
      <div className="navbar-container">
        <Link className="navbar-logo" to="#">Logo</Link>
        <Link className="navbar-log-in navbar" to="/log in">Log In</Link>
        <Link className="navbar-sign-up navbar" to="/sign up"> Sign Up</Link>
>>>>>>> 184ca0fc89090253f5ee4a603f46f5a7e8db166c
      </div>
    </Router>    
    </>
  )
}
export default NavBar;