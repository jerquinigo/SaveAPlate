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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
        onClick={this.toggleEditFormLogic}>
        Edit Profile
      </Button>
    );
  };

  displayEditForm = () => {
    return (
      <div id="display-edit-form-container">
        <form id="display-edit-form" noValidate autoComplete="off">
          <TextField
            label="Name"
            margin="normal"
            onChange={this.handleChange}
            type="text"
            placeholder="Enter name"
          />
          <br />
          <TextField
            label="Email"
            margin="normal"
            onChange={this.handleChange}
            type="text"
            placeholder="Enter email"
          />
          <br />
          <TextField
            label="Address Field"
            margin="normal"
            onChange={this.handleChange}
            type="text"
            placeholder="Enter address"
          />
          <br />
          <TextField
            label="Description"
            margin="normal"
            onChange={this.handleChange}
            type="text"
            placeholder="Enter description"
          />
          <br />
          <TextField
            label="Telephone Number"
            margin="normal"
            onChange={this.handleChange}
            type="text"
            placeholder="Enter telephone number"
          />
          <br />
          <TextField
            label="Client Certificate"
            margin="normal"
            onChange={this.handleChange}
            type="text"
            placeholder="Enter Client Certificate"
          />
          <br />
          <br />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
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
        telephone_number: this.state.telephone_number
      })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          address_field: "",
          body: "",
          telephone_number: ""
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
