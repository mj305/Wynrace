import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './NavBar.css';

import logo from './logo.png';

const NavBar = () => {
  return (
    <>
    <Router>
      <div className="nav-bar-container" >
        <img className="nav-bar-logo" src={logo} />
        <div className="nav-bar-group" >
          <Link className="nav-bar-item1" to="/sign in">Log In</Link>
          <Link className="nav-bar-item2" to="/sign in"> Sign Up</Link>
        </div>
      </div>
    </Router>    
    </>
  )
}
export default NavBar;