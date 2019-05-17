import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./clientProfileCSS/ClientProfileEditForm.css";

class ClientProfileEditForm extends Component {
  constructor() {
    super();
    this.state = {
      editProfileButton: false,
      name: "",
      email: "",
      address_field: "",
      body: "",
      telephone_number: "",
      client_certificate: ""
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  toggleEditFormLogic = () => {
    this.setState({
      editProfileButton: !this.state.editProfileButton
    });
  };

  editProfile = () => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={this.toggleEditFormLogic}
      >
        Edit Profile
      </Button>
    );
  };

  displayEditForm = () => {
    return (
      <div id="display-edit-form-container">
        <form
          id="display-edit-form"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="icon-input-field">
            <img
              src={require("../../auth/icons/name.png")}
              alt="name"
              className="icons"
              id="edit-profile-icons"
            />
            <TextField
              label="Name"
              margin="normal"
              onChange={this.handleChange("name")}
              value={this.state.name}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="icon-input-field">
            <img
              src={require("../../auth/icons/email.png")}
              alt="email"
              className="icons"
              id="edit-profile-icons"
            />
            <TextField
              label="Email"
              margin="normal"
              onChange={this.handleChange("email")}
              value={this.state.email}
              type="text"
              placeholder="Enter email"
            />
          </div>
          <div className="icon-input-field">
            <img
              src={require("../../auth/icons/address.png")}
              alt="address"
              className="icons"
              id="edit-profile-icons"
            />
            <TextField
              label="Address Field"
              margin="normal"
              onChange={this.handleChange("address_field")}
              value={this.state.address_field}
              type="text"
              placeholder="Enter address"
            />
          </div>
          <div className="icon-input-field">
            <img
              src={require("../../auth/icons/info.png")}
              alt="info"
              className="icons"
              id="edit-profile-icons"
            />
            <TextField
              label="Description"
              margin="normal"
              onChange={this.handleChange("body")}
              value={this.state.body}
              type="text"
              placeholder="Enter description"
            />
          </div>
          <div className="icon-input-field">
            <img
              src={require("../../auth/icons/phone.png")}
              alt="phone"
              className="icons"
              id="edit-profile-icons"
            />
            <TextField
              label="Telephone Number"
              margin="normal"
              onChange={this.handleChange("telephone_number")}
              value={this.state.telephone_number}
              type="text"
              placeholder="Enter telephone number"
            />
          </div>
          <div className="icon-input-field">
            <img
              src={require("../../auth/icons/certificate.png")}
              alt="certificate"
              className="icons"
              id="edit-profile-icons"
            />
            <TextField
              label="Client Certificate"
              margin="normal"
              onChange={this.handleChange("client_certificate")}
              value={this.state.client_certificate}
              type="text"
              placeholder="Enter Client Certificate"
            />
          </div>
          <div id="edit-form-button-container">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  };

  updateFormRequest = id => {
    axios
      .patch(`/api/users/${id}`, {
        name: this.state.name,
        email: this.state.email,
        address_field: this.state.address_field,
        body: this.state.body,
        telephone_number: this.state.telephone_number,
        client_certificate: this.state.client_certificate
      })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          address_field: "",
          body: "",
          telephone_number: "",
          client_certificate: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.updateFormRequest(this.props.id);
  };

  render() {
    return (
      <div className="ClientFormMainPage">
        {this.editProfile()}
        {this.state.editProfileButton ? this.displayEditForm() : null}
      </div>
    );
  }
}

export default ClientProfileEditForm;
