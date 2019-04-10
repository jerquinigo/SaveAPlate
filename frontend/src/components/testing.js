import React, { Component } from "react";
import axios from "axios";
import Auth from "../utils/Auth";

class Testing extends Component {
  state = {
    email: "",
    password_digest: "",
    isSubmitted: false
  };

  componentDidMount() {
    this.props.fetchAllUsers();
  }

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


  demoLogin = e => {
    e.preventDefault();
    axios
      .post("/api/sessions/login/", { email: "test@test.com", password_digest: "1234" })
      .then(() => {
        Auth.authenticateUser("test@test.com");
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          email: "",
          password_digest: ""
        });
      })
  };

  logoutUser = () => {
    axios.post('/api/sessions/logout')
      .then(()=> {
        Auth.deauthenticateUser();
      })
      .then(()=> {
        this.props.checkAuthenticateStatus();
      })
  }

  render() {
    console.log("testing PROPS: ", this.props);
    console.log("testing STATE: ", this.state);
    return (
      <>
        <div>test</div>
        <form onSubmit={this.loginUser}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            placeholder="EMAIL"
          />
          <input
            type="text"
            value={this.state.password_digest}
            onChange={this.handleChange}
            name="password_digest"
            placeholder="PASSWORD"
          />
          <button type="submit">Login</button>
          <button className="demo" onClick={this.demoLogin}>
            Demo
          </button>
        </form>
        <button type="submit" onClick={this.logoutUser}>Log Out</button>
      </>
    );
  }
}

export default Testing;
