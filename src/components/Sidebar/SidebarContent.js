import React from "react";
import PropTypes from "prop-types";

import "./SidebarContent.css";
//import logo from './logo.png';

const SidebarContent = ({ title, logo, mainContent }) => {
  return (
    <div className="sidebarContent">
      <header>
        <img className="logo" src={logo} alt="Logo" />
        <p>{title}</p>
      </header>
      <article>{mainContent}</article>
      <footer>
        Crafted with
        <i className="fa fa-heart" />
        by InFlow-IT
        <span className="blinking-cursor">|</span>
      </footer>
    </div>
  );
};

SidebarContent.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  mainContent: PropTypes.string
};

export default SidebarContent;
