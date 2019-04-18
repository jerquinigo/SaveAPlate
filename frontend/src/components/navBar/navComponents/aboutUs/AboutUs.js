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
        <div>
          At Save a Plate, our mission is to reduce food waste in New York City.
          The main way in which we do this is by creating a food rescue
          ecosystem. Our other initiatives include providing resources about
          SNAP and learning about food/hunger through statistics and articles.
        </div>
      </div>
      <br />
      <div className="about-text">
        Save a Plate was formed in 2019 by four Full Stack Web Developers with
        the goal of helping the food rescue movement in NYC.
      </div>
      <div>
        <h2>Our Team</h2>
        <img
          src="https://avatars3.githubusercontent.com/u/43793502?s=400&v=4
https://avatars3.githubusercontent.com/u/43793502?s=400&v=4
"
          width="100"
          alt="wynter"
        />
        <br />
        <a href="https://github.com/wynterreid">Wynter Reid</a>
        <br />
        <br />
        <img
          src="https://avatars2.githubusercontent.com/u/43793569?s=460&v=4
https://avatars2.githubusercontent.com/u/43793569?s=460&v=4
"
          width="100"
          alt="jonathan"
        />
        <br />
        <a href="https://github.com/jerquinigo">Jonathan Erquinigo</a>
        <br />
        <br />
        <img
          src="https://avatars1.githubusercontent.com/u/41707636?s=460&v=4
https://avatars1.githubusercontent.com/u/41707636?s=460&v=4
"
          width="100"
          alt="deyvi"
        />
        <br />
        <a href="https://github.com/SurgamSurgam">Deyvi Ortiz</a>
        <br />
        <br />
        <img
          src="https://avatars1.githubusercontent.com/u/22200791?s=460&v=4
https://avatars1.githubusercontent.com/u/22200791?s=460&v=4
"
          width="100"
          alt="andrew"
        />
        <br />
        <a href="https://github.com/Andrew-Kil">Andrew Kil</a>
      </div>
      <br />
    </div>
  );
}
