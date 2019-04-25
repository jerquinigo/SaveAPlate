import React, { Component } from "react";
import axios from "axios";

class DisplayClientFavorites extends Component {
  constructor() {
    super();
    this.state = {
      usersFavorites: [],
      vendorsList: []
    };
  }

  componentDidMount() {
    this.getAllFavoritesForClient("clienttester");
    this.getAllVendorsList();
  }

  getAllFavoritesForClient = name => {
    axios.get(`/api/favorites/${name}`).then(res => {
      this.setState({
        usersFavorites: res.data.favorites
      });
    });
  };

  getAllVendorsList = () => {
    axios.get(`/api/users/vendors`).then(res => {
      this.setState({
        vendorsList: res.data.vendors
      });
    });
  };

  pairUpFavoritesWithVendors = () => {
    let favorites = this.state.usersFavorites;
    let vendors = this.state.vendorsList;
    let displayObj = {};

    for (let i = 0; i < vendors.length; i++) {
      for (let j = 1; j < favorites.length; j++) {
        console.log(favorites[j].vendor_id);
        if (vendors[i].vendor_id === favorites[j].vendor_id) {
        }
      }
    }
  };

  // example for how to organize favorites and with the food item
  // organizeFoodItems = () => {
  //   const { claimedFoodItems = [] } = this.state;
  //   let claimedList = {};
  //
  //   for (let i = 0; i < claimedFoodItems.length; i++) {
  //     if (claimedList[claimedFoodItems[i].vendor_id]) {
  //       claimedList[claimedFoodItems[i].vendor_id].push(claimedFoodItems[i]);
  //     } else {
  //       claimedList[claimedFoodItems[i].vendor_id] = [claimedFoodItems[i]];
  //     }
  //     // console.log("claimed", claimedList);
  //   }

  //   console.log("CLAIMED LIST", claimedList);
  //
  //   return claimedList;
  // };

  render() {
    console.log(this.state.vendorsList, "favvvess");
    return (
      <div class="displayClientFavPage">
        hello world
        {this.pairUpFavoritesWithVendors()}
      </div>
    );
  }
}

export default DisplayClientFavorites;
