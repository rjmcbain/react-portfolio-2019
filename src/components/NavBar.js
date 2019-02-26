import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="menu-btn">
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>
          <nav className="menu">
            <div className="menu-branding">
              <div className="portrait" />
            </div>
            <ul className="menu-nav">
              <li className="nav-item current">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              {/* <!-- <li className="nav-item">
                    <Link to="resume.html" target="_blank" className="nav-link">Resume</Link>
                </li> --> */}
              <li className="nav-item">
                <Link to="/work" className="nav-link">
                  My Work
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
