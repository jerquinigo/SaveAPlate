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
      <div className="displayEditFormPageDiv">
        <form
          className="displayEditFormPage"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <TextField
            label="Name"
            margin="normal"
            onChange={this.handleChange("name")}
            value={this.state.name}
            type="text"
            placeholder="Enter name"
          />
          <br />
          <TextField
            label="Email"
            margin="normal"
            onChange={this.handleChange("email")}
            value={this.state.email}
            type="text"
            placeholder="Enter email"
          />
          <br />
          <TextField
            label="Address Field"
            margin="normal"
            onChange={this.handleChange("address_field")}
            value={this.state.address_field}
            type="text"
            placeholder="Enter address"
          />
          <br />
          <TextField
            label="Description"
            margin="normal"
            onChange={this.handleChange("body")}
            value={this.state.body}
            type="text"
            placeholder="Enter description"
          />
          <br />
          <TextField
            label="Telephone Number"
            margin="normal"
            onChange={this.handleChange("telephone_number")}
            value={this.state.telephone_number}
            type="text"
            placeholder="Enter telephone number"
          />
          <br />
          <TextField
            label="Client Certificate"
            margin="normal"
            onChange={this.handleChange("client_certificate")}
            value={this.state.client_certificate}
            type="text"
            placeholder="Enter Client Certificate"
          />
          <br />
          <div className="editFormButtonDiv">
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
    console.log(this.state);
    return (
      <div className="ClientFormMainPage">
        {this.editProfile()}
        {this.state.editProfileButton ? this.displayEditForm() : null}
      </div>
    );
  }
}

export default ClientProfileEditForm;
