import React from "react";
import { NavLink } from "react-router-dom";
import "./navBarCSS/NavBar.css";
import Logout from "./navComponents/logout/Logout.js";

export default function LoggedInNavBar(props) {
  let type;
  if (props.currentUser.type === 1){
    type = "vendor"
  } else {
    type = "client"
  }

let profileLink = `/${type}/${props.currentUser.name}`
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
          <NavLink to="/aboutus" className="nav-link">
            About Us
          </NavLink>
          <NavLink to="/resources" className="nav-link">
            Resources
          </NavLink>
          <NavLink to="/donate" className="nav-link">
            Donate
          </NavLink>
          <NavLink to={profileLink} className="nav-link">
          My Profile
          </NavLink>
          <Logout className="nav-link" />
        </div>
      </nav>
    </div>
  );
}
