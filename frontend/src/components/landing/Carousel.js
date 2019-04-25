import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./landingCSS/Carousel.css";

export default () => (
  <Carousel autoPlay>
    <div>
      <img
        src={require("./images/sap-logo.svg")}
        alt="Save a Plate logo"
        className="carousel-image"
      />
      <p className="legend">Legend 0</p>
    </div>
    <div>
      <img
        src={require("./images/carousel-1.jpeg")}
        alt="carousel-1"
        className="carousel-image"
      />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={require("./images/carousel-2.jpg")} alt="carousel-1" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src={require("./images/carousel-3.png")} alt="carousel-1" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src={require("./images/carousel-4.jpg")} alt="carousel-1" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img src={require("./images/carousel-5.png")} alt="carousel-1" />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img src={require("./images/carousel-6.png")} alt="carousel-1" />
      <p className="legend">Legend 6</p>
    </div>
  </Carousel>
);
