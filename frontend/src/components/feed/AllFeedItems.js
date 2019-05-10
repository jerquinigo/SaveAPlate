import React, { Component } from "react";
import AllFeedItemsDisplayed from "./AllFeedItemsDisplayed.js";
import AllFeedItemsDisplayVendorName from "./AllFeedItemsDisplayVendorName.js";
import "./feedCSS/AllFeedItems.css";

class AllFeedItems extends Component {
  constructor() {
    super();
    this.state = {
      pictureObj: []
    };
  }

  allVendorsMapped = foodDataObj => {
    if (!foodDataObj) return null;
    let newObj = {};
    let vendorNameArr = Object.keys(foodDataObj);
    vendorNameArr.forEach((vendorName, i) => {
      foodDataObj[vendorName].forEach(vendor => {
        this.props.allVendors.forEach(pics => {
          if (vendor.vendor_id === pics.vendor_id) {
            newObj[vendor.address_field] = pics.profile_picture;
          }
        });
      });
    });

    return newObj;
  };

  allFoodItemsMapped = () => {
    if (this.props.allFoodItems) {
      let foodDataObj = {};
      let converted_time;
      // eslint-disable-next-line
      this.props.allFoodItems.map((food, i) => {
        converted_time = Number(food.set_time.slice(0, 2));
        if (!foodDataObj[food.vendor_name] && food.is_claimed === false) {
          foodDataObj[food.vendor_name] = [food];
        } else if (foodDataObj[food.vendor_name] && food.is_claimed === false) {
          foodDataObj[food.vendor_name].push(food);
        }
      });
      // this.allVendorsMapped(foodDataObj);

      let vendorNameArr = Object.keys(foodDataObj);

      let vendorName = vendorNameArr.map((vendorName, i) => {
        return (
          <div key={i}>
            <AllFeedItemsDisplayVendorName
              vendorName={vendorName}
              foodDataObj={foodDataObj}
              profilePicture={this.allVendorsMapped(foodDataObj)}
            />
            <AllFeedItemsDisplayed
              foodDataObj={foodDataObj}
              claimItem={this.props.claimItem}
              converted_time={converted_time}
              vendorName={vendorName}
              receivedOpenSnackbar={this.props.receivedOpenSnackbar}
            />
          </div>
        );
      });
      return vendorName;
    }
  };
  render() {
    return <>{this.allFoodItemsMapped()}</>;
  }
}

export default AllFeedItems;
