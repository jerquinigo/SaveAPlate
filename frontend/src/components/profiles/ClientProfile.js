import React, { Component } from "react";
import ClientProfileEditForm from "./ClientProfileEditForm.js";


class ClientProfile extends Component {

  componentDidMount() {
    this.displayClientProfile();
    this.reloadUser()
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
  if(!this.props.currentUser){
    return this.props.checkAuthenticateStatus()
  }
  }



  render() {
    console.log(this.props.currentUser, "the obj");
    return (
      <div className="clientProfileWrapper profile">

        {this.displayClientProfile()}
        <ClientProfileEditForm />
      </div>
    );
  }
}

export default ClientProfile;
