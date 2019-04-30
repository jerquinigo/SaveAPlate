import React from "react";
import "./AboutUs.css";

export default function About() {
  return (
    <div>
      <br />
      <img src={require("./food_is_love.jpg")} alt="food is love logo" />
      <br />
      <div className="about-text">
        <h2>Our Mission</h2>
        <div id="our-mission-text">
          At Save a Plate, our mission is to reduce food waste in New York City.
          The main way in which we do this is by creating a food rescue
          ecosystem. Our other initiatives include providing resources about
          SNAP and learning about food/hunger through statistics and articles.
        </div>
      </div>
      <br />
      <div className="about-text" id="our-mission-text">
        Save a Plate was formed in 2019 by four Full Stack Web Developers with
        the goal of helping the food rescue movement in NYC.
      </div>
      <h2>Meet Our Team</h2>
      <div id="about-us-container">
        <div>
          <img
            src="https://avatars3.githubusercontent.com/u/43793502?s=400&v=4https://avatars3.githubusercontent.com/u/43793502?s=400&v=4"
            width="100"
            alt="wynter"
            className="team-member-photo"
          />
          <br />
          <h3>Wynter Reid</h3>
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
          <h3>Jonathan Erquinigo</h3>
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
          <h3>Deyvi Ortiz</h3>
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
          <h3>Andrew Kil</h3>
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
    </div>
  );
}
