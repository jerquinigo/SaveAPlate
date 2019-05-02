import React, { Component } from "react";
import ClientProfileEditForm from "./ClientProfileEditForm.js";
import DisplayClientFavorites from "./DisplayClientFavorites.js";
import ClientClaimedItemsContainer from "../../../containers/ClientClaimedItemsContainer.js";
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
      zoom: 18
    };
  }
  componentDidMount() {
    this.displayClientProfile();
    this.reloadUser();
    // geoFindMe().then(position => {
    //   // ;
    //   this.setState({
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude,
    //     gotdata: true
    //   });
    // });
  }

  displayClientProfile = () => {
    return (
      <div className="displayInfo">
        <p className="client-name">{this.props.currentUser.name}</p>
        <p>{this.props.currentUser.address_field}</p>
      </div>
    );
  };

  reloadUser = () => {
    if (!this.props.currentUser) {
      return this.props.checkAuthenticateStatus();
    }
  };

  render() {
    return (
      <div className="clientProfileWrapper profile">
        {this.displayClientProfile()}
        <ClientProfileEditForm id={this.props.currentUser.id} />

        <ClientClaimedItemsContainer />

        <DisplayClientFavorites currentUserName={this.props.currentUser.name} />

        <div className="mapDiv" style={{ height: "100vh", width: "100%" }}>
          {/* <DisplayMap
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            zoom={this.state.zoom}
          /> */}
        </div>
      </div>
    );
  }
}

export default ClientProfile;
