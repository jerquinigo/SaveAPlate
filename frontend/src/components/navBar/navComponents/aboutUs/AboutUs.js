import React from "react";
import "./AboutUs.css";

export default function About() {
  return (
    <div id="about-container">
      <h1 id="meet-our-team">Meet Our Team</h1>

      <div id="about-us-container">
        <div>
          <img
            src="https://avatars3.githubusercontent.com/u/43793502?s=400&v=4https://avatars3.githubusercontent.com/u/43793502?s=400&v=4"
            width="100"
            alt="wynter"
            className="team-member-photo"
          />
          <br />
          <h3 className="team-member-name">Wynter Reid</h3>
          <a href="https://github.com/wynterreid" className="team-github-link">
            <img
              src={require("./github.png")}
              alt="github"
              className="github-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/wynter-reid-2608b9174/"
            className="team-linkedin-link">
            <img
              src={require("./linkedin.png")}
              alt="linked"
              className="linkedin-icon"
            />
          </a>
        </div>

        <div>
          <img
            src="https://avatars2.githubusercontent.com/u/43793569?s=460&v=4https://avatars2.githubusercontent.com/u/43793569?s=460&v=4"
            width="100"
            alt="jonathan"
            className="team-member-photo"
          />
          <br />
          <h3 className="team-member-name">Jonathan Erquinigo</h3>
          <a href="https://github.com/jerquinigo" className="team-github-link">
            <img
              src={require("./github.png")}
              alt="github"
              className="github-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-erquinigo-8072b881/"
            className="team-linkedin-link">
            <img
              src={require("./linkedin.png")}
              alt="linked"
              className="linkedin-icon"
            />
          </a>
        </div>

        <div>
          <img
            src="https://avatars1.githubusercontent.com/u/41707636?s=460&v=4https://avatars1.githubusercontent.com/u/41707636?s=460&v=4"
            width="100"
            alt="deyvi"
            className="team-member-photo"
          />
          <br />
          <h3 className="team-member-name">Deyvi Ortiz</h3>
          <a
            href="https://github.com/SurgamSurgam"
            className="team-github-link">
            <img
              src={require("./github.png")}
              alt="github"
              className="github-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/deyvio"
            className="team-linkedin-link">
            <img
              src={require("./linkedin.png")}
              alt="linked"
              className="linkedin-icon"
            />
          </a>
        </div>

        <div>
          <img
            src="https://avatars1.githubusercontent.com/u/22200791?s=460&v=4https://avatars1.githubusercontent.com/u/22200791?s=460&v=4"
            width="100"
            alt="andrew"
            className="team-member-photo"
          />
          <br />
          <h3 className="team-member-name">Andrew Kil</h3>
          <a href="https://github.com/Andrew-Kil" className="team-github-link">
            <img
              src={require("./github.png")}
              alt="github"
              className="github-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-kil/"
            className="team-linkedin-link">
            <img
              src={require("./linkedin.png")}
              alt="linked"
              className="linkedin-icon"
            />
          </a>
        </div>
      </div>
      <br />
      <br />
      <div className="about-text" id="our-mission-text">
        <a href="https://github.com/jerquinigo/SaveAPlate" id="save-a-plate">
          Save a Plate
        </a>{" "}
        was built in 2019 by four Full Stack Web Developers from
        <a href="https://www.pursuit.org/" id="pursuit-link">
          {" "}
          Pursuit
        </a>{" "}
        with the goal of creating an online platform that fights hunger and food
        waste in NYC.
      </div>

      <div className="about-text">
        <h2 id="our-mission">Our Mission</h2>
        <div id="our-mission-text">
          At Save a Plate, our mission is to reduce food waste in New York City.
          We do this is by creating a platform where vendors can sign-up and
          donate food while clients can claim those food items and favorite
          vendors. We also provide resources about SNAP, nearby food pantries &
          soup kitchens and how you can help.
        </div>
        <br />
        <div>Spin the wheel to reduce food waste!</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* ^ the BR tags are a temporary solution to styling :) */}

      <a href="http://localhost:3000/user/signup">
        <img
          src={require("./food-waste.jpg")}
          alt="food is love logo"
          id="food-waste-img"
        />
      </a>
    </div>
  );
}
