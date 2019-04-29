import React from "react";
import { NavLink } from "react-router-dom";
import "./navBarCSS/NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav id="nav">
        <span id="nav-title">
          <NavLink to="/welcome" className="nav-link">
            <img
              src={require("./logo.png")}
              alt="logo for save a plate"
              id="logo"
            />
          </NavLink>
        </span>

        <div id="nav-links">
          <NavLink
            to="/aboutus"
            className="nav-link"
            activeClassName="nav-link--active">
            About Us
          </NavLink>
          <NavLink
            to="/resources"
            className="nav-link"
            activeClassName="nav-link--active">
            Resources
          </NavLink>
          <NavLink
            to="/donate"
            className="nav-link"
            activeClassName="nav-link--active">
            Donate
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
