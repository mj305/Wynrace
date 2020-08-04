import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <Router>
      <div className="navbar-container">
        <Link className="navbar-logo" to="#">Logo</Link>
        <Link className="navbar-log-in navbar" to="/log in">Log In</Link>
        <Link className="navbar-sign-up navbar" to="/sign up"> Sign Up</Link>
      </div>
    </Router>    
    </>
  )
}
export default NavBar;