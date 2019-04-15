import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ClientProfile extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="clientProfileWrapper profile">CLIENTS page!</div>
        <NavLink to="/feed">Feed</NavLink>
      </>
    );
  }
}

export default ClientProfile;
