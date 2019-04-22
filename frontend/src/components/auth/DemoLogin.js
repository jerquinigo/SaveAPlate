import React, { Component } from "react";
import axios from "axios";
import Auth from "../../utils/Auth.js";
import { Redirect } from "react-router-dom";

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
      .then(async () => {
        await this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.props.history.push("/vendor/vendortester");
      })
      .then(() => {
        this.sendMeAsVendor();
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
        this.props.history.push("client/clienttester");
      })
      .then(() => {
        this.sendMeAsClient();
      });
  };

  sendMeAsClient = () => {
  return(<Redirect to="/feed" />)
  };

  sendMeAsVendor = () =>{
    return(<Redirect to="/vendortester" />)
  };

  render() {
    return (
      <>
        <form>
          <button className="demo" onClick={this.vendorDemoLogin}>
            Vendor Demo
          </button>
          <button className="demo" onClick={this.clientDemoLogin}>
            Client Demo
          </button>
        </form>
      </>
    );
  }
}

export default DemoLogin;
