import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav id="nav">
        <span id="nav-title">
          <NavLink to="/welcome" className="nav-link">
            Save a Plate
          </NavLink>
        </span>

        <div id="nav-links">
          <NavLink to="/aboutus" className="nav-link">
            About Us
          </NavLink>
          <NavLink to="/resources" className="nav-link">
            Resources
          </NavLink>
          <NavLink to="/donate" className="nav-link">
            Donate
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
