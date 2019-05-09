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

  // displayClientProfile = () => {
  //   return (
  //     <div className="displayInfo">
  //       <p className="client-name">{this.props.currentUser.name}</p>
  //       <div>
  //         <img
  //           id="profile-picture"
  //           alt="profile pic"
  //           src={this.state.profilePic}
  //         />
  //       </div>
  //       <p>{this.props.currentUser.address_field}</p>
  //     </div>
  //   );
  // };

  reloadUser = () => {
    if (!this.props.currentUser) {
      return this.props.checkAuthenticateStatus();
    }
  };

  render() {
    return (
      <div id="client-container">
        <MainSnackbarContainer />
        <div id="client-profile-container">
          <h1 id="client-name">{this.props.currentUser.name}</h1>
          <div>
            <img
              id="profile-picture"
              alt="profile pic"
              src={this.state.profilePic}
            />
          </div>
          <div id="vendor-info">
            <p>{this.props.currentUser.address_field}</p>
            <p>{this.props.currentUser.email}</p>
          </div>
          <div className="displayInfo">
            <p>{this.props.currentUser.address_field}</p>
          </div>
          <ClientProfileEditForm id={this.props.currentUser.id} />
        </div>

        <div id="client-info-container">
          <div>
            <h1 id="donation-list">Donation List</h1>
            <div id="display-unclaimed-items-container">
              <ClientClaimedItemsContainer
                receivedOpenSnackbar={this.props.receivedOpenSnackbar}
              />
            </div>
          </div>
        </div>

        {/* <h4> My Favorite Donors </h4>
        <DisplayClientFavorites
          currentUserName={this.props.currentUser.name}
          receivedOpenSnackbar={this.props.receivedOpenSnackbar}
        /> */}

        {/* <div className="mapDiv" style={{ height: "100vh", width: "100%" }}>
          <DisplayMap
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            zoom={this.state.zoom}
          />
        </div> */}
      </div>
    );
  }
}

export default ClientProfile;
