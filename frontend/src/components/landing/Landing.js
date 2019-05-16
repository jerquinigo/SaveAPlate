import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Carousel from "./Carousel.js";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./landingCSS/Landing.css";

const buttonColor = createMuiTheme({
  palette: {
    primary: { 500: "#FF4500" },
    secondary: {
      main: "#3b5998"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default function Landing() {
  return (
    <div className="landing-wrapper">
      <div className="carousel-wrapper">
        <Carousel />
      </div>
      <div id="line" />
      <div id="food-background-container" />
      <div id="landing-container">
        <div id="mission-statement-container">
          <div>
            <h1 id="mission-statement">Our Mission</h1>
          </div>
          <p id="mission-statement-text">
            At Save a Plate, our mission is to reduce food waste and hunger in
            New York City. We do this is by creating a platform where vendors
            can sign up and donate food while clients can claim those food items
            and add their favorite vendors to their favorites. Check out our{" "}
            {""}
            <NavLink to="/resources" id="resources-link">
              resources
            </NavLink>{" "}
            to find information about SNAP, nearby food pantries & soup kitchens
            and how you can help.
          </p>
        </div>
      </div>
      <div id="line" />
      <div id="info-container">
        <div id="info-vendor-volunteer-client">
          <h1 id="info-container-header">Get Involved</h1>
          <div id="info-vendor">
            <img
              src={require("./images/vendor.png")}
              alt="icon for vendor"
              id="vendor-logo"
            />
            <h3 id="user-type">Food Vendors</h3>
            <div>
              <div id="get-involved-info">
                Vendors include restaurants, catering halls, nursing homes, etc.
                Sign up or log in using the links below and you will be eligible
                for tax deductions if you donate food.
              </div>
            </div>
          </div>
          <div id="info-volunteer">
            <img
              src={require("./images/client.png")}
              alt="icon for vendor"
              id="volunteer-logo"
            />
            <h3 id="user-type">Volunteers</h3>
            <div>
              <div id="get-involved-info">
                When you volunteer your time with Save A Plate, you’re playing a
                key role in fighting hunger & poverty. Your dedication as a
                volunteer will create life-changing experiences for your city.
              </div>
            </div>
          </div>
          <div id="info-client">
            <img
              src={require("./images/npo-solid-black.png")}
              alt="icon for client"
              id="client-logo"
            />
            <h3 id="user-type">Non-profit Organizations</h3>
            <div>
              <div id="get-involved-info">
                Non-profit organizations such as YMCA, PBS, World Wildlife Fund
                (WWF), and Pursuit can register to claim donated food items.
                Sign up or log in using the links below.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="line" />
      <div id="login-container">
        <div className="login-sub-container-1">
          <NavLink to="/user/signup" id="nav-link">
            <MuiThemeProvider theme={buttonColor}>
              <Button
                variant="contained"
                color="primary"
                disableunderline="true"
                type="submit"
                id="signup-button">
                Get Started
              </Button>
            </MuiThemeProvider>
          </NavLink>
        </div>
        <div className="login-sub-container-2">
          <NavLink to="/user/login" id="nav-link">
            <MuiThemeProvider theme={buttonColor}>
              <Button
                variant="contained"
                color="secondary"
                disableunderline="true"
                type="submit"
                id="login-button">
                Log In
              </Button>
            </MuiThemeProvider>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
