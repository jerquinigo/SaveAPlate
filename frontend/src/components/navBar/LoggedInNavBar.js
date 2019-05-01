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
            <NavLink to="/welcome" className="nav-link">
              <img
                src={require("../landing/images/sap-logo-name-black.png")}
                alt="logo for save a plate"
                id="logo"
              />
            </NavLink>
          </span>

          <div id="nav-links">
            <NavLink
              to="/aboutus"
              className="nav-link"
              activeClassName="nav-link--active"
            >
              About Us
            </NavLink>
            <NavLink
              to="/resources"
              className="nav-link"
              activeClassName="nav-link--active"
            >
              Resources
            </NavLink>
            {/*<NavLink
              to="/donate"
              className="nav-link"
              activeClassName="nav-link--active"
            >
              Donate
            </NavLink>*/}

            <NavLink
              to="/feed"
              className="nav-link"
              activeClassName="nav-link--active"
            >
              Feed
            </NavLink>
            <NavLink
              to={profileLink}
              className="nav-link"
              activeClassName="nav-link--active"
            >
              My Profile
            </NavLink>
            <button
              className="nav-link"
              id="logout-button"
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
            <NavLink
              to="/welcome"
              className="nav-link"
              activeClassName="nav-link--active"
            >
              <img
                src={require("../landing/images/sap-logo-name-black.png")}
                alt="logo for save a plate"
                id="logo"
              />
            </NavLink>
          </span>
          <div id="nav-links">
            <NavLink
              to="/aboutus"
              className="nav-link"
              activeClassName="nav-link--active"
            >
              About Us
            </NavLink>
            <NavLink
              to="/resources"
              className="nav-link"
              activeClassName="nav-link--active"
            >
              Resources
            </NavLink>
            {/*<NavLink
              to="/donate"
              className="nav-link"
              activeClassName="nav-link--active"
            >
              Donate
            </NavLink>*/}
            <NavLink
              to={profileLink}
              className="nav-link"
              activeClassName="nav-link--active"
            >
              My Profile
            </NavLink>
            <button
              className="nav-link"
              id="logout-button"
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
