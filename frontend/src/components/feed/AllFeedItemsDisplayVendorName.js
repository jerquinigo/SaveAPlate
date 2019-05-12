import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./feedCSS/AllFeedItemsDisplayVendorName.css";

class AllFeedItemsDisplayVendorName extends Component {
  displayVendorPhoto = newArr => {
    if (this.props.profilePicture) {
      let addressArr = Object.keys(this.props.profilePicture);
      return addressArr.map((data, i) => {
        if (data === newArr[0]) {
          return (
            <img
              className="feed-profile-pic"
              src={this.props.profilePicture[data]}
              alt=""
            />
          );
        }
        return null;
      });
    }
  };
  getAllAddress = (foodDataObj, vendorName) => {
    let newArr = [];

    if (foodDataObj[vendorName].length > 1) {
      foodDataObj[vendorName].forEach((name, i) => {
        newArr.push(foodDataObj[vendorName][0].address_field);
        newArr.slice(0, 0);
      });
    } else {
      foodDataObj[vendorName].forEach((name, i) => {
        newArr.push(name.address_field);
      });
    }

    if (newArr.length > 1) {
      return (
        <>
          <div className="vendor-address-field">
            <p className="address-text">{newArr[0]}</p>
          </div>
          <div className="vendor-account-profile-pic">
            {this.displayVendorPhoto(newArr)}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="vendor-address-field">
            <p className="address-text">{newArr}</p>
          </div>
          <div className="vendor-account-profile-pic">
            {this.displayVendorPhoto(newArr)}
          </div>
        </>
      );
    }
  };

  render() {
    return (
      <div className="display-vendor-name-feed">
        <span className="vendor-span-container">
          <Link
            to={"/clientview/" + this.props.vendorName}
            className="display-item-name">
            {this.props.vendorName}
          </Link>
          {this.getAllAddress(this.props.foodDataObj, this.props.vendorName)}
        </span>
      </div>
    );
  }
}

export default AllFeedItemsDisplayVendorName;
