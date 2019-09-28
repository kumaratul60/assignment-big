import React from "react";
// import Font Awesome package and icon(s) 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
    <footer className="page-footer">
        <a href="https://linkedin.com/in/jonathansmithies" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faExternalLinkAlt } />&nbsp;&nbsp;View on LinkedIn</a>
        <a href="https://github.com/elev8now/Ping-Pong-React-App" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faExternalLinkAlt } />&nbsp;&nbsp;View code on GitHub</a>
    </footer>
)

export default Footer;