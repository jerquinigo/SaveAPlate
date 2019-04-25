import React, { Component } from "react";
import axios from "axios";

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
    return <button onClick={this.toggleEditFormLogic}>Edit Profile</button>;
  };

  displayEditForm = () => {
    return (
      <div className="displayEditFormPage">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="enter name"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="email"
            type="text"
            placeholder="enter email"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="address_field"
            type="text"
            placeholder="enter address"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="body"
            type="text"
            placeholder="enter new description"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="telephone_number"
            type="text"
            placeholder="enter telephone number"
          />
          <br />

          <input
            onChange={this.handleChange}
            name="client_certificate"
            type="text"
            placeholder="enter client certificate"
          />
          <br />
          <button type="submit">submit</button>
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
