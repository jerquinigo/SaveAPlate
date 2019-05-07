import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllFeedItemsDisplayVendorName extends Component {
  getAllAddress = (foodDataObj, vendorName) => {
    let newArr = [];

    foodDataObj[vendorName].length > 1
      ? foodDataObj[vendorName].map((name, i) => {
          newArr.push(foodDataObj[vendorName][0].address_field);
        })
      : foodDataObj[vendorName].map((name, i) => {
          newArr.push(name.address_field);
        });

    return newArr.length > 1 ? <p>{newArr[0]}</p> : <p>{newArr}</p>;
  };
  // }

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
