import React from "react";
import "./AboutUs.css";

export default function About() {
  return (
    <div>
      <br />
      <img src={require("./food_is_love.jpg")} alt="food is love logo" />
      <br />
      <br />
      <div className="about-text">
        Save a Plate was formed in 2019 by four Full Stack Web Developers with
        the goal of helping the food rescue movement in NYC.
      </div>
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
    </div>
  );
}
