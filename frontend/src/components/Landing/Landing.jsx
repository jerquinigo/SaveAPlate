import React from "react";
import "./Landing.css";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div className="landing-container">
        <div>
          <h1>Mission Statement</h1>
        </div>
        <p className="mission-statement-p-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          modi dolorem debitis cum harum deserunt. Similique, inventore saepe
          doloremque, consequuntur minima magnam accusantium placeat
          necessitatibus, delectus quam accusamus. Assumenda, rem!
        </p>
      </div>
      <div className="login-container">
        <div className="login-sub-container-1">
          <NavLink to="/user/login">
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
