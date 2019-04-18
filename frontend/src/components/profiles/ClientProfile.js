import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ClientProfileEditForm from "./ClientProfileEditForm.js";
import ClientClaimedItems from "./ClientClaimedItems.js";

class ClientProfile extends Component {
  componentDidMount() {
    this.displayClientProfile();
    this.reloadUser();
  }

  displayClientProfile = () => {
    return (
      <div className="displayInfo">
        <p>{this.props.currentUser.name}</p>
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
    console.log(this.props.currentUser, "the obj");
    return (
      <div className="clientProfileWrapper profile">
        <NavLink to="/feed">Feed</NavLink>
        {this.displayClientProfile()}
        <ClientProfileEditForm id={this.props.currentUser.id} />
        <ClientClaimedItems id={this.props.currentUser.id} />
      </div>
    );
  }
}

export default ClientProfile;
