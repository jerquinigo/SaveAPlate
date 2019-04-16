import React from "react";
import "./landingCSS/Landing.css";
import { NavLink } from "react-router-dom";
import DemoLogin from "../../containers/DemoLoginContainer.js";
import Map from "../map/Map.js";

const TOKEN =
  "pk.eyJ1Ijoic3VyZ2FtIiwiYSI6ImNqdWlqYmZ5cjFiM3M0NHA0d253eXFldmMifQ.bhSlMrFx_78e90gmylryKQ";
const LONG = 40.743273;
const LAT = -73.9417729;
const ZOOM = 14.26;

export default function Landing() {
  return (
    <div>
      <DemoLogin />
      <Map token={TOKEN} longitude={LONG} latitude={LAT} />
      <div className="landing-container">
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
      <div className="login-container">
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
