import React from "react";
import "./Resources.css";

export default function Resources() {
  return (
    <div className="resources-wrapper">
      <div id="resources-container">
        <h1 id="hungry-header">Resources</h1>
        <div className="resources-all-text">
          <a
            className="hungry-one"
            target="_blank"
            rel="noopener noreferrer"
            href="http://foodhelp.nyc/snapfood-benefits-en/"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Supplemental_Nutrition_Assistance_Program_logo.svg/1200px-Supplemental_Nutrition_Assistance_Program_logo.svg.png"
              alt=""
              height="175px"
            />
            <p> To learn/apply for SNAP: {""}</p>
          </a>

          <a
            className="hungry-two"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www1.nyc.gov/apps/311utils/providerInformation.htm?serviceId=1083"
          >
            <img
              src="https://i.ya-webdesign.com/images/food-pantry-png-4.png"
              alt=""
              height="175px"
            />
            <p>For food pantries or soup kitchens near you: {""}</p>
          </a>

          <a
            className="hungry-three"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amny.com/news/nyc-food-donation-1.14906516"
          >
            <img
              src="http://www.hawaiifoodbank.org/websites/foodbank/photogallery/5809684/donate%20food.jpg"
              alt=""
              height="175px"
            />
            <p> Not a vendor but want to donate food? {""} </p>
          </a>

          <a
            className="hungry-four"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.foodwastefair.nyc/"
          >
            <img
              src="https://foodtank.com/wp-content/uploads/2017/07/1498853730083.png"
              alt=""
              height="175px"
            />
            <p>
              Calling all New York City food, beverage and hospitality
              professionals! {""}{" "}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
