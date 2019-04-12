import React, { Component } from "react";
import axios from "axios";
import {Link, Redirect} from 'react-router-dom'
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
                  password_digest: "",
                  isSubmitted: true
                  })
      })
  };

conditionalRouting = () => {
  if (this.state.isSubmitted && this.props.currentUser.type === 1) {
    return <Redirect to={`/${this.props.currentUser.name}`} />
  } else if (this.state.isSubmitted && this.props.currentUser.type === 2){
    return <Redirect to={`/${this.props.currentUser.name}`} />
  }
  console.log("CR code");
}

  render() {
    return (
      <>
        {this.conditionalRouting()}
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

    )
  };
}

export default Login;
