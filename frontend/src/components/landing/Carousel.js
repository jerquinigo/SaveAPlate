import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./landingCSS/Carousel.css";

export default () => (
  <Carousel
    className="carousel-container"
    width="100vw"
    showThumbs={false}
    axis="horizontal"
    useKeyboardArrows
    infiniteLoop
    autoPlay
    swipeable={true}
    transitionTime={500}
    centerMode
    centerSlidePercentage={65}
    emulateTouch
  >
    <div>
      <img
        src={require("./images/carousel-1-cropped-v1.jpg")}
        alt="carousel-1"
        className="carousel-image"
      />
    </div>
    <div>
      <img
        src={require("./images/carousel-2-cropped-v1.jpg")}
        alt="carousel-1"
      />
    </div>
    <div>
      <img
        src={require("./images/carousel-3-cropped-v1.jpg")}
        alt="carousel-1"
      />
    </div>
    <div>
      <img
        src={require("./images/carousel-4-cropped-v1.jpg")}
        alt="carousel-1"
      />
    </div>
    <div>
      <img
        src={require("./images/carousel-5-cropped-v1.jpg")}
        alt="carousel-1"
      />
    </div>
  </Carousel>
);
