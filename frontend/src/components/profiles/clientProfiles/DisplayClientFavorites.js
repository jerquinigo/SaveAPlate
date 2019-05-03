import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./clientProfileCSS/DisplayClientFavorites.css";
import Button from "@material-ui/core/Button";

class DisplayClientFavorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersFavorites: [],
      vendorsList: [],
      sortedFavoritesToDisplay: []
    };
  }

  componentDidMount() {
    this.getAllFavoritesForClient(this.props.currentUserName);
    this.getAllVendorsList();
  }

  getAllFavoritesForClient = name => {
    axios.get(`/api/favorites/client/${name}`).then(res => {
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
      for (let j = 0; j < favorites.length; j++) {
        if (vendors[i].vendor_id === favorites[j].vendor_id) {
          displayObj[i] = { ...vendors[i], ...{ favoriteId: favorites[j].id } };
        }
      }
    }

    let favoriteArr = Object.values(displayObj);
    return favoriteArr.map(fav => {
      return (
        <div key={fav.vendor_id} className="display-fav-info">
          <Link to={"/clientview/" + fav.vendor_name}>
            <span>{fav.vendor_name}</span>
          </Link>
          <span>{fav.address_field}</span>
          <span>{fav.telephone_number}</span>
          <Button
              id={fav.id}
              onClick={e => {
                this.deleteFav(e, fav.favoriteId);
              }}
            variant="contained"
            color="secondary"
            className="unclaimed-button"
          >
            Unfavorite
          </Button>

        </div>
      );
    });
  };

  deleteFav = async (e, favoriteId) => {
    await axios.delete(`/api/favorites/${favoriteId}`);
    await this.getAllFavoritesForClient(this.props.currentUserName);
  };

  noFavsToDisplay = () => {
    return (
      <div className="display-fav-info">
        <h1>No favorites to display. Please favorite a restaurant first.</h1>
      </div>
    );
  };

  render() {
    return (
      <div className="displayClientFavPage">
        {!!this.state.usersFavorites.length
          ? this.pairUpFavoritesWithVendors()
          : this.noFavsToDisplay()}
      </div>
    );
  }
}

export default DisplayClientFavorites;
