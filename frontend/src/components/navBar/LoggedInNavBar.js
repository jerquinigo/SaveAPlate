import React from "react";
import { NavLink } from "react-router-dom";
import "./navBarCSS/NavBar.css";

export const LoggedInNavBar = props => {
  let type;
  if (props.currentUser.type === 1) {
    type = "vendor";
  } else {
    type = "client";
  }

  let profileLink = `/${type}/${props.currentUser.name}`;

  if (type === "client") {
    return (
      <div>
        <nav id="nav">
          <span id="nav-title">
            <img
              src={require("./logo.png")}
              alt="logo for save a plate"
              id="logo"
            />
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
            <NavLink to="/feed" className="nav-link">
              Feed
            </NavLink>
            <button
              className="nav-link"
              onClick={async () => {
                await props.logoutUser();
                await props.history.push("/welcome");
              }}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav id="nav">
          <span id="nav-title">
            <img
              src={require("./logo.png")}
              alt="logo for save a plate"
              id="logo"
            />
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
            <button
              className="nav-link"
              onClick={async () => {
                await props.logoutUser();
                await props.history.push("/welcome");
              }}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    );
  }
};
