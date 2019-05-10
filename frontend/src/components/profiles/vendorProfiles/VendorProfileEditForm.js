import React, { Component } from "react";
import axios from "axios";

class VendorProfileEditForm extends Component {
  constructor() {
    super();
    this.state = {
      editProfileButton: false,
      name: "",
      email: "",
      address_field: "",
      body: "",
      telephone_number: "",
      ein: ""
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

  editForm = () => {
    return (
      <div className="displayEditFormPage">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Update Business Name"
            value={this.state.name}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            placeholder="Update Email"
            value={this.state.email}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="address"
            placeholder="Update Address"
            value={this.state.address}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="body"
            placeholder="Update Business Information"
            value={this.state.body}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="telephone_number"
            placeholder="Update Telephone Number"
            value={this.state.telephone_number}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="ein"
            placeholder="Update Employee Identificaton Number"
            value={this.state.ein}
          />
          <button type="submit">Edit</button>
        </form>
      </div>
    );
  };

  updateInfo = id => {
    const {
      name,
      email,
      address_field,
      body,
      telephone_number,
      ein
    } = this.state;
    let changeValue = [];
    if (name !== "") {
      changeValue.push(name);
    }
    if (email !== "") {
      changeValue.push(email);
    }
    if (address_field !== "") {
      changeValue.push(address_field);
    }
    if (body !== "") {
      changeValue.push(name);
    }
    if (telephone_number !== "") {
      changeValue.push(name);
    }
    if (ein !== "") {
      changeValue.push(name);
    }
    axios
      .patch(`/api/users/${this.props.id}`, {
        name: this.state.name,
        email: this.state.email,
        address_field: this.state.address,
        body: this.state.body,
        telephone_number: this.state.telephone_number,
        ein: this.state.ein
      })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          address: "",
          body: "",
          telephone_number: "",
          ein: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.updateInfo();
  };

  render() {
    return (
      <>
        <div className="ClientFormMainPage">
          {this.editProfile()}
          {this.state.editProfileButton ? this.editForm() : null}
        </div>
      </>
    );
  }
}

export default VendorProfileEditForm;
