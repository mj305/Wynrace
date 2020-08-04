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
          <Link className="" to="/sign in">Log In</Link>
          <Link className="" to="/sign in"> Sign Up</Link>
          </Router>    
    </>
  )
}
export default NavBar;