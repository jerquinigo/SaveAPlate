import React, { Component } from "react";
import axios from "axios";
import Auth from "../../utils/Auth.js";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./authCSS/SignUp.css";

class SignUp extends Component {
  state = {
    email: "",
    password_digest: "",
    type: "",
    name: "",
    address_field: "",
    body: "",
    telephone_number: "",
    client_certificate: "",
    isSubmitted: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = async e => {
    e.preventDefault();
    const {
      email,
      password_digest,
      type,
      name,
      address_field,
      body,
      telephone_number,
      client_certificate
    } = this.state;

    await axios.post("/api/users/new", {
      email,
      password_digest,
      type,
      name,
      address_field,
      body,
      telephone_number,
      client_certificate
    });

    Auth.authenticateUser(email);

    await axios.post("/api/sessions/login", {
      email,
      password_digest,
      type,
      name,
      address_field,
      body,
      telephone_number,
      client_certificate
    });

    await this.props.checkAuthenticateStatus();

    this.setState({
      email: "",
      password_digest: "",
      type: "",
      name: "",
      address_field: "",
      body: "",
      telephone_number: "",
      client_certificate: "",
      isSubmitted: true
    });
  };

  signUpForm = () => {
    if (Number(this.state.type) === 1) {
      return (
        <form
          onSubmit={this.registerUser}
          className="signup-form"
          id="vendor-signup-form">
          <h1>Create an account:</h1>
          <TextField
            required
            className="input-field"
            label="Name"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Business Name"
            value={this.state.name}
          />
          <TextField
            required
            className="input-field"
            label="Email"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
          />
          <TextField
            required
            className="input-field"
            label="Password"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="password"
            name="password_digest"
            placeholder="Password"
            value={this.state.password_digest}
          />
          <TextField
            required
            className="input-field"
            label="Address"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="text"
            name="address_field"
            placeholder="Address"
            value={this.state.address_field}
          />
          <TextField
            required
            className="input-field"
            label="Telephone Number"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="text"
            name="telephone_number"
            placeholder="Telephone Number"
            value={this.state.telephone_number}
          />
          <TextField
            className="input-field"
            label="Business Info"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="text"
            name="body"
            placeholder="Business Info"
            value={this.state.body}
          />
          <TextField
            className="input-field"
            label="Employee ID Number"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="text"
            name="ein"
            placeholder="Employee ID Number"
            value={this.state.ein}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="signup-button">
            Sign Up
          </Button>
          <button className="demo" onClick={this.vendorDemoLogin}>
            Vendor Demo
          </button>
        </form>
      );
    } else if (Number(this.state.type) === 2) {
      return (
        <form
          onSubmit={this.registerUser}
          className="signup-form"
          id="client-signup-form">
          <h1>Create an account:</h1>
          <TextField
            required
            className="input-field"
            label="Name"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Non-Profit Name"
            value={this.state.name}
          />
          <TextField
            required
            className="input-field"
            label="Email"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
          />
          <TextField
            required
            className="input-field"
            label="Password"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="password"
            name="password_digest"
            placeholder="Password"
            value={this.state.password_digest}
          />
          <TextField
            required
            className="input-field"
            label="Address"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="text"
            name="address_field"
            placeholder="Address"
            value={this.state.address_field}
          />
          <TextField
            required
            className="input-field"
            label="Client Certificate"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            type="text"
            name="client_certificate"
            placeholder="Client Certificate"
            value={this.state.client_certificate}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="signup-button">
            Sign Up
          </Button>{" "}
          <button className="demo" onClick={this.clientDemoLogin}>
            Client Demo
          </button>
        </form>
      );
    } else {
      return null;
    }
  };

  clientDemoLogin = e => {
    e.preventDefault();
    axios
      .post("/api/sessions/login/", {
        email: "clientdemo@test.com",
        password_digest: "1234"
      })
      .then(() => {
        Auth.authenticateUser("clientdemo@test.com");
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.props.history.push("/feed");
      });
  };

  vendorDemoLogin = e => {
    e.preventDefault();
    axios
      .post("/api/sessions/login/", {
        email: "vendordemo@test.com",
        password_digest: "1234"
      })
      .then(() => {
        Auth.authenticateUser("vendordemo@test.com");
      })
      .then(async () => {
        await this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.props.history.push("/vendor/vendortester");
      });
  };

  conditionalRouting = () => {
    if (this.state.isSubmitted && this.props.currentUser.type === 1) {
      return <Redirect to={`/vendor/${this.props.currentUser.name}`} />;
    } else if (this.state.isSubmitted && this.props.currentUser.type === 2) {
      return <Redirect to={"/feed"} />;
    }
  };

  render() {
    return (
      <div id="signup-page">
        {this.conditionalRouting()}
        <div className="choose-user-signup-form">
          <FormControl component="fieldset">
            <FormLabel component="legend" className="user-type">
              User Type
            </FormLabel>
            <RadioGroup
              aria-label="User Type"
              name="type"
              value={this.state.value}
              onClick={this.handleChange}>
              <FormControlLabel value="1" control={<Radio />} label="Vendor" />
              <FormControlLabel value="2" control={<Radio />} label="Client" />
            </RadioGroup>
          </FormControl>
          {this.signUpForm()}
        </div>
      </div>
    );
  }
}

export default SignUp;
