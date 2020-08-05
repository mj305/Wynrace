import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import "./FooterLanding.css";

library.add(fab)

const Footer = () => {
    return (
        <div>
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
    );
}
export default Footer;