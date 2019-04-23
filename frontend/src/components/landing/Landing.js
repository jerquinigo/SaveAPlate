import React from "react";
import { NavLink } from "react-router-dom";
import DemoLogin from "../../containers/DemoLoginContainer.js";
import Button from "@material-ui/core/Button";
import "./landingCSS/Landing.css";

export default function Landing() {
  return (
    <div>
      <DemoLogin />
      <img
        src={require("./images/sap-logo.svg")}
        alt="Save a Plate logo"
        id="sap-logo"
      />
      <div id="food-background-container">
        {/* <h1 id="save-a-plate-text">Save a Plate</h1> */}
        {/* <img
          src={require("./images/food-background.jpeg")}
          alt="food background"
          id="food-background"
        /> */}
      </div>
      <div id="landing-container">
        <div>
          <h1 id="mission-statement">Mission Statement</h1>
        </div>
        <p id="mission-statement-text">
          To provide food service businesses with a way to reduce food waste and
          become resourceful for organizations that demonstrates a need in their
          surrounding community. To feed New Yorkers that lack funds for the
          basic necessity of food. A way for donating business will receive
          tax-deductions along with decreased garbage disposal charges. We know
          we’ve succeeded when the yearly rate of New Yorkers that face hunger
          declines.
        </p>
      </div>
      <div id="info-container">
        <h1 id="info-container-header">Get Involved</h1>
        <div id="info-vendor-client">
          <div id="info-vendor">
            <img
              src={require("./images/vendor.png")}
              alt="icon for vendor"
              id="vendor-logo"
            />
            <h3 id="user-type">Vendors</h3>
            <div className="tooltip">
              <span id="more-info">More Info</span>
              <span className="tooltip-text">
                Vendors include restaurants, catering halls, nursing homes, etc.
                Sign up or log in using the links below and you will be eligible
                for tax deductions if you donate food.
              </span>
            </div>
          </div>
          <div id="info-client">
            <img
              src={require("./images/client.png")}
              alt="icon for client"
              id="client-logo"
            />
            <h3 id="user-type">Clients</h3>
            <div className="tooltip">
              <span id="more-info">More Info</span>
              <span className="tooltip-text">
                Clients are non-profit organizations such as the YMCA, PBS,
                World Wildlife Fund (WWF), Pursuit, among many others. Sign up
                or log in using the links below.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="login-container">
        <div className="login-sub-container-1">
          <NavLink to="/user/signup" id="nav-link">
            <Button
              variant="contained"
              color="primary"
              disableunderline="true"
              type="submit"
              id="signup-button">
              Sign Up
            </Button>
          </NavLink>
        </div>
        <div className="login-sub-container-2">
          <NavLink to="/user/login" id="nav-link">
            <Button
              variant="contained"
              color="secondary"
              disableunderline="true"
              type="submit"
              id="login-button">
              Log In
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
