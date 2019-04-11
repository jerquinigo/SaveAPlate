import React, { Component } from "react";
import axios from "axios";
import Auth from "../../utils/Auth.js";

class Login extends Component {
  state = {
    email: "",
    password_digest: "",
    isSubmitted: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loginUser = e => {
    e.preventDefault();
    const { email, password_digest } = this.state;

    axios
      .post("/api/sessions/login/", { email, password_digest })
      .then(() => {
        Auth.authenticateUser(email);
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          email: "",
          password_digest: ""
        });
      });
  };


  render() {
    console.log("testing PROPS: ", this.props);
    console.log("testing STATE: ", this.state);
    return (
      <>
        <form onSubmit={this.loginUser}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            placeholder="EMAIL"
          />
          <input
            type="password"
            value={this.state.password_digest}
            onChange={this.handleChange}
            name="password_digest"
            placeholder="PASSWORD"
          />
          <button type="submit">Login</button>

        </form>
      </>
    );
  }
}

export default Login;
