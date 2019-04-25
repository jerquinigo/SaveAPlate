import React, { Component } from "react";
import axios from "axios";

class DisplayClientFavorites extends Component {
  constructor() {
    super();
    this.state = {
      usersFavorites: [],
      vendorsList: [],
      sortedFavoritesToDisplay: []
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
          displayObj[i] = vendors[i];
        }
      }
    }
    console.log(displayObj, "obj");

    let favoriteArr = Object.values(displayObj);
    return favoriteArr.map(fav => {
      return (
        <div key={fav.vendor_id} class="display-vendor-name">
          <span class="display-location-vendor-name">{fav.vendor_name}</span>
          <span>{fav.address_field}</span>
          <span>{fav.telephone_number}</span>
        </div>
      );
    });
  };

  render() {
    console.log(this.state.sortedFavoritesToDisplay, "favvvess");
    return (
      <div class="displayClientFavPage">
        {this.pairUpFavoritesWithVendors()}
      </div>
    );
  }
}

export default DisplayClientFavorites;
