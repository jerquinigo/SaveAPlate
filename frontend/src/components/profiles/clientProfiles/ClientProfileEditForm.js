import React, { Component } from "react";
import axios from "axios";
<<<<<<< HEAD
=======
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
>>>>>>> eddf4845f68134b8ca669c52d61b7bb3b0de0339

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
<<<<<<< HEAD
    debugger;
=======
>>>>>>> eddf4845f68134b8ca669c52d61b7bb3b0de0339
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
<<<<<<< HEAD
    return <button onClick={this.toggleEditFormLogic}>Edit Profile</button>;
=======
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={this.toggleEditFormLogic}>
        Edit Profile
      </Button>
    );
>>>>>>> eddf4845f68134b8ca669c52d61b7bb3b0de0339
  };

  displayEditForm = () => {
    return (
      <div className="displayEditFormPage">
<<<<<<< HEAD
        <form onSubmit={this.handleSubmit}>
=======
        {/* <form onSubmit={this.handleSubmit}>
>>>>>>> eddf4845f68134b8ca669c52d61b7bb3b0de0339
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="enter name"
<<<<<<< HEAD
            value={this.state.name}
=======
          />
          <br />
          <input
            onChange={this.handleChange}
            name="email"
            type="text"
            placeholder="enter email"
>>>>>>> eddf4845f68134b8ca669c52d61b7bb3b0de0339
          />
          <br />
          <input
            onChange={this.handleChange}
<<<<<<< HEAD
            name="email"
            type="text"
            placeholder="enter email"
=======
            name="address_field"
            type="text"
            placeholder="enter address"
>>>>>>> eddf4845f68134b8ca669c52d61b7bb3b0de0339
          />
          <br />
          <input
            onChange={this.handleChange}
<<<<<<< HEAD
            name="address_field"
            type="text"
            placeholder="enter address"
=======
            name="body"
            type="text"
            placeholder="enter new description"
>>>>>>> eddf4845f68134b8ca669c52d61b7bb3b0de0339
          />
          <br />
          <input
            onChange={this.handleChange}
<<<<<<< HEAD
            name="body"
            type="text"
            placeholder="enter new description"
          />
          <br />
          <input
            onChange={this.handleChange}
=======
>>>>>>> eddf4845f68134b8ca669c52d61b7bb3b0de0339
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
<<<<<<< HEAD
=======
        </form> */}

        <form className="displayEditFormPage" noValidate autoComplete="off">
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
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
>>>>>>> eddf4845f68134b8ca669c52d61b7bb3b0de0339
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
