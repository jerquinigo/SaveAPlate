import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllFeedItemsDisplayVendorName extends Component {
  getAllAddress = (foodDataObj, vendorName) => {
    let newArr = [];

    if (foodDataObj[vendorName].length > 1) {
      foodDataObj[vendorName].map((name, i) => {
        newArr.push(foodDataObj[vendorName][0].address_field);
        newArr.slice(0, 0);
        console.log(newArr, "thew nwefeoi");
      });
    } else {
      foodDataObj[vendorName].map((name, i) => {
        newArr.push(name.address_field);
      });
    }

    // foodDataObj[vendorName].map((name, i) => {
    // if (name.address_field.length === name.address_field.length) {

    // if (foodDataObj[vendorName].length > 1) {
    //   newArr.push(foodDataObj[vendorName].slice(0, 1));
    // } else {
    //   newArr.push(name.address_field);
    // }
    // });
    if (newArr.length > 1) {
      return <p>{newArr[0]}</p>;
    } else {
      return <p>{newArr}</p>;
    }
  };

  render() {
    return (
      <div className="display-vendor-name">
        <span>
          <Link to={"/clientview/" + this.props.vendorName}>
            <strong className="display-item-name">
              {this.props.vendorName}
            </strong>{" "}
          </Link>
          {this.getAllAddress(this.props.foodDataObj, this.props.vendorName)}
        </span>
      </div>
    );
  }
}

export default AllFeedItemsDisplayVendorName;
