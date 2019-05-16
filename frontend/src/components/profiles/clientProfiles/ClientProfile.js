import React, { Component } from "react";
import ClientProfileEditForm from "./ClientProfileEditForm.js";
import DisplayClientFavorites from "./DisplayClientFavorites.js";
import MainSnackbarContainer from "../../../containers/MainSnackbarContainer.js";
import ClientClaimedItemsContainer from "../../../containers/ClientClaimedItemsContainer.js";
import axios from "axios";
import "./clientProfileCSS/ClientProfile.css";
// import { geoFindMe } from "../../googleMapLoc/Geolocation.js";
// import { DisplayMap } from "../../googleMapLoc/DisplayMap.js";

class ClientProfile extends Component {
  constructor() {
    super();
    this.state = {
      latitude: "",
      longitude: "",
      gotdata: false,
      zoom: 18,
      profilePic: ""
    };
  }
  componentDidMount() {
    // this.displayClientProfile();
    this.reloadUser();
    this.getProfilePic();
    // geoFindMe().then(position => {
    //   // ;
    //   this.setState({
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude,
    //     gotdata: true
    //   });
    // });
  }

  getProfilePic = () => {
    axios.get(`/api/users/${this.props.currentUser.id}`).then(pic => {
      this.setState({
        profilePic: pic.data.data[0].profile_picture
      });
    });
  };

  reloadUser = () => {
    if (!this.props.currentUser) {
      return this.props.checkAuthenticateStatus();
    }
  };

  render() {
    return (
      <div id="client-container">
        <MainSnackbarContainer />
        <div className="main-div-displaying-detail-vendor-view-through-profile">
          <div className="profile-picture-container-div">
            <img
              className="profile-picture-through-client-page"
              alt="profile pic"
              src={this.state.profilePic}
            />
          </div>
          <div className="vendorNameDiv">
            <h2 className="vendor-name">{this.props.currentUser.name}</h2>
          </div>
          <div className="contactUsDiv">
            <h3> Contact Us </h3>
            <p className="vendorDeets">
              <span className="addressSpan">
                {this.props.currentUser.address_field}
              </span>
              <br />
              <span className="emailSpan">{this.props.currentUser.email}</span>
              <br />
            </p>
          </div>
          <br />
          <ClientProfileEditForm id={this.props.currentUser.id} />
          <br />
        </div>

        <div id="client-info-container">
          <h1 id="claimed-items-list-client">Claimed Items</h1>

          <ClientClaimedItemsContainer
            receivedOpenSnackbar={this.props.receivedOpenSnackbar}
          />
          <div id="favorites-wrapper">
            <h1 id="favorite-vendors-list-client"> Favorite Vendors </h1>

            <div id="favorites-container">
              <div id="favorite-vendors-client">
                <h4 id="favorite-vendor-name">Name </h4>
                <h4 id="favorite-vendor-address">Address </h4>
                <h4 id="favorite-vendor-phone">Phone Number </h4>
                <div id="favorite-spacing" />
              </div>
              <DisplayClientFavorites
                currentUserName={this.props.currentUser.name}
                receivedOpenSnackbar={this.props.receivedOpenSnackbar}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientProfile;
