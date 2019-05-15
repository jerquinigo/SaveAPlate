import React from "react";
import "./Resources.css";

export default function Resources() {
  return (
    <div className="resources-wrapper">
      <div id="resources-container">
        <h1 id="hungry-header">Hungry?</h1>
        <div className="resources-all-text">
          <div className="hungry-one">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Supplemental_Nutrition_Assistance_Program_logo.svg/1200px-Supplemental_Nutrition_Assistance_Program_logo.svg.png"
              alt=""
              height="175px"
            />
            <p> Click here to learn/apply for SNAP: {""}</p>
            <a href="http://foodhelp.nyc/snapfood-benefits-en/">Click</a>
          </div>

          <div className="hungry-two">
            <img
              src="https://www.dmarcunited.org/wp-content/uploads/2016/04/4Family3Day.png"
              alt=""
              height="175px"
              width="264px"
            />
            <p>
              Click here to look for food pantries or soup kitchens near you:{" "}
              {""}
            </p>
            <a href="https://www1.nyc.gov/apps/311utils/providerInformation.htm?serviceId=1083">
              Click
            </a>
          </div>

          <div className="hungry-three">
            <img
              src="http://www.hawaiifoodbank.org/websites/foodbank/photogallery/5809684/donate%20food.jpg"
              alt=""
              height="175px"
            />
            <p> Not a vendor but you want to donate food in NYC? {""} </p>
            <a href="https://www.amny.com/news/nyc-food-donation-1.14906516">
              Click
            </a>
          </div>

          <div className="hungry-four">
            <img
              src="https://foodtank.com/wp-content/uploads/2017/07/1498853730083.png"
              alt=""
              height="175px"
            />
            <p>
              Calling all New York City food, beverage and hospitality
              professionals! {""}{" "}
            </p>
            <a href="https://www.foodwastefair.nyc/"> Click</a>
          </div>
        </div>
      </div>
    </div>
  );
}
