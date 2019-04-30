import React from "react";
import "./Resources.css";

export default function Resources() {
  return (
    <div id="resources-container">
      <h1 id="hungry-header">Hungry?</h1>
      <p>
        Click here to learn/apply for SNAP: {""}
        <a href="http://foodhelp.nyc/snapfood-benefits-en/">Click</a>
      </p>
      <p>
        Click here to look for food pantries or soup kitchens near you: {""}
        <a href="https://www1.nyc.gov/apps/311utils/providerInformation.htm?serviceId=1083">
          Click
        </a>
      </p>
      <p>
        Not a vendor but you want to donate food in NYC? {""}
        <a href="https://www.amny.com/news/nyc-food-donation-1.14906516">
          Click
        </a>
      </p>
      <p>
        Calling all New York City food, beverage and hospitality professionals!{" "}
        {""}
        <a href="https://www.foodwastefair.nyc/"> Click</a>
      </p>
    </div>
  );
}
