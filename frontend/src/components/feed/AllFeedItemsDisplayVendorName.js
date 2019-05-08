import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllFeedItemsDisplayVendorName extends Component {
  displayPhotos = () => {
    if (this.props.profilePicture) {
      let profileArr = Object.keys(this.props.profilePicture);
      let firstKey = Object.keys(this.props.profilePicture)[0];
      debugger;
      if (profileArr.length > 1) {
        return (
          <div>
            <img src={this.props.profilePicture[firstKey]} alt="" />
          </div>
        );
      } else {
        profileArr.map(img => {
          return <img src={this.props.profilePicture[img]} alt="" />;
        });
      }
    }
  };
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
    // debugger;

    // if (foodDataObj[vendorName].length > 1) {
    //   newArr.push(foodDataObj[vendorName].slice(0, 1));
    // } else {
    //   newArr.push(name.address_field);
    // }
    // });
    if (newArr.length > 1) {
      return (
        <div>
          <p>{newArr[0]}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{newArr}</p>
        </div>
      );
    }
  };

  render() {
    console.log(this.props.allVendorsPic, "all the final vendors in the comp");
    console.log(this.props.profilePicture, "the profile pic");
    return (
      <div className="display-vendor-name">
        <span>
          <Link to={"/clientview/" + this.props.vendorName}>
            <strong className="display-item-name">
              {this.props.vendorName}
            </strong>{" "}
          </Link>
          {this.getAllAddress(this.props.foodDataObj, this.props.vendorName)}
          {this.props.profilePicture ? this.displayPhotos() : null}
        </span>
      </div>
    );
  }
}

export default AllFeedItemsDisplayVendorName;
