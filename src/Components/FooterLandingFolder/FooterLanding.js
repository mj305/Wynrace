import React from "react";
import { BrowserRouter as Router/* , Switch, Route */, Link
  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import "./FooterLanding.css";

library.add(fab)

const Footer = () => {
    return (
        <>
        <Router>
        <div className="footer-container">
                <Link>Privacy</Link>
                <Link>Terms</Link> 
                <Link>Contact Us</Link>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                >
                    <FontAwesomeIcon icon= {['fab', 'twitter']} className="twitter-icon" />
                </a>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                >
                    <FontAwesomeIcon icon= {['fab', 'instagram']} className="instagram-icon" />
                </a>
            </p> 
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                >
                    <FontAwesomeIcon icon= {['fab', 'facebook']} className="facebook-icon" />
                </a>
            </p> 
        </div>
        </Router>
        </>
    );
}
export default Footer;