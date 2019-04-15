import React, { Component } from "react";
import ClientProfileEditForm from "./ClientProfileEditForm.js";

class ClientProfile extends Component {
  state = {
    editProfileButton: false,
    name: "",
    email: "",
    address_field: "",
    body: "",
    telephone_number: "",
    client_certificate: ""
  };

  componentDidMount() {
    this.displayClientProfile();
  }

  displayClientProfile = () => {
    return (
      <div className="displayInfo">
        <p>{this.props.currentUser.name}</p>
        <p>{this.props.currentUser.address_field}</p>
      </div>
    );
  };



  render() {
    console.log(this.state, "in the webpage");
    return (
      <div className="clientProfileWrapper profile">
        this is the clients page
        {this.displayClientProfile()}
        <ClientProfileEditForm />
      </div>
    );
  }
}

export default ClientProfile;
