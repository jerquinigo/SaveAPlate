import React, { Component } from "react";
import axios from "axios";
import Auth from "../../utils/Auth.js";

class DemoLogin extends Component {

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
      this.setState({
        email: "",
        password_digest: ""
      });
    });
};

render(){
  debugger
  return(
    <form>
    <button className="demo" onClick={this.vendorDemoLogin}>
      Vendor Demo
    </button>
    <button className="demo" onClick={this.clientDemoLogin}>
      Client Demo
    </button>
    </form>
  )
}
}

export default DemoLogin;
