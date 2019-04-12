import React, { Component } from "react";
import axios from "axios";
import Auth from "../../utils/Auth.js";
import {Link, Redirect} from 'react-router-dom'

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
        password_digest: "",
        isSubmitted:true
      })
    })
    .then(() => {
      return <Redirect to='/vendortester' />
    })
}

clientDemoLogin = e => {
  e.preventDefault();
  axios
    .post("/api/sessions/login/", {
      email: "clientdemo@test.com",
      password_digest: "1234"
    })
    .then(() => {
      Auth.authenticateUser("clientdemo@test.com")
    })
    .then(() => {
      this.props.checkAuthenticateStatus()
    })
    .then(() => {
      this.setState({
        email: "",
        password_digest: ""
      })
      this.props.history.push('/clienttester')
    })
    // .then(() => {
    //   this.sendMeThere();
    // })
}

sendMeThere = () => {
  debugger
  return <Redirect to='/clienttester' />
}



render(){
  return(
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
  )
}
}

export default DemoLogin;
