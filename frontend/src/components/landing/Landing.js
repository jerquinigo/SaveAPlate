import React from "react";
import "./landingCSS/Landing.css";
import { NavLink } from "react-router-dom";
import DemoLogin from "../../containers/DemoLoginContainer.js";

export default function Landing() {
  return (
    <div>
      <DemoLogin />
      <div id="landing-container">
        <div>
          <h1 id="mission-statement">Mission Statement</h1>
        </div>
        <p className="mission-statement-p-text">
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
              src={require("./icons/vendor.png")}
              alt="icon for vendor"
              id="vendor-logo"
            />
            <h3>Vendor</h3>
            <div className="tooltip">
              More Info
              <span className="tooltip-text">
                Vendors include restaurants, catering halls, nursing homes, etc.
                Sign up or log in using the links below and you will be eligible
                for tax deductions if you donate food.
              </span>
            </div>
          </div>
          <div id="info-client">
            <img
              src={require("./icons/client.png")}
              alt="icon for client"
              id="client-logo"
            />
            <h3>Client</h3>
            <div className="tooltip">
              More Info
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
          <NavLink to="/user/signup">
            <button type="submit" id="signup-button">
              Sign Up
            </button>
          </NavLink>
        </div>
        <div className="login-sub-container-2">
          <NavLink to="/user/login">
            <button type="submit" id="login-button">
              Log In
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
