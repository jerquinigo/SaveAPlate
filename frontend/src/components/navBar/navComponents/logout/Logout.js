import React, { Component } from "react";
import "./Logout.css";
import axios from "axios";
import Auth from "../../../../utils/Auth.js";
import { checkAuthenticateStatus } from "../../../../actions/AuthActions.js";
import { withRouter } from "react-router-dom";

class Logout extends Component {
  logoutUser = () => {
    axios
      .post("/api/sessions/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        checkAuthenticateStatus();
      })
      .then(() => {
        this.sendMeToLanding();
      })
      .catch(error => {
        console.log(error);
      });
  };

  sendMeToLanding = () => {
    return this.props.history.push("/welcome");
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.logoutUser} id="logout-button">
          Log Out
        </button>
      </div>
    );
  }
}

export default withRouter(Logout);
