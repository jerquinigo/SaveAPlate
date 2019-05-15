import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./clientProfileCSS/DisplayClientFavorites.css";

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#272E48" },
    secondary: {
      main: "#D35348"
    }
  },
  typography: {
    useNextVariants: true
  }
});

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
          <div id="display-fav-vendor-name">
            <Link to={"/clientview/" + fav.vendor_name} id="fav-vendor-link">
              <span>{fav.vendor_name}</span>
            </Link>
          </div>
          <div id="display-fav-vendor-address">{fav.address_field}</div>
          <div id="display-fav-vendor-phone">{fav.telephone_number}</div>
          <div id="display-fav-vendor-button">
            <MuiThemeProvider theme={theme}>
              <Button
                id={fav.id}
                onClick={e => {
                  this.deleteFav(e, fav.favoriteId);
                  this.props.receivedOpenSnackbar();
                }}
                variant="contained"
                color="secondary"
                className="unclaimed-button"
              >
                Unfavorite
              </Button>
            </MuiThemeProvider>
          </div>
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
        <h2>No favorites to display. Please favorite a restaurant first.</h2>
      </div>
    );
  };

  render() {
    return (
      <div className="display-client-fav-container">
        {!!this.state.usersFavorites.length
          ? this.pairUpFavoritesWithVendors()
          : this.noFavsToDisplay()}
      </div>
    );
  }
}

export default DisplayClientFavorites;
