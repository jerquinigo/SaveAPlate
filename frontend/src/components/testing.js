import React, { Component } from "react";
import axios from "axios";
import Auth from "../utils/Auth";

class Testing extends Component {
  state = {
    email: "",
    password_digest: "",
    isSubmitted: false,
    type:"",
    name:"",
    address_field:"",
    body:"",
    telephone_number:"",
    client_certificate: ""
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

signUpform = () => {
   if (Number(this.state.type) === 1) {
    return(<form onSubmit={this.registerUser}>
    <input onChange={this.handleChange} type="text" name="name" placeholder="name" value={this.state.name}/>
    <input onChange={this.handleChange} type="text" name="email" placeholder="email" value={this.state.email}/>
    <input onChange={this.handleChange} type="password" name="password_digest" placeholder="password" value={this.state.password_digest}/>
    <input onChange={this.handleChange} type="text" name="address_field" placeholder="Address" value={this.state.address_field}/>
    <input onChange={this.handleChange} type="text" name="body" placeholder="About your business" value={this.state.body}/>
    <input onChange={this.handleChange} type="text" name="telephone_number" placeholder="Telephone Number" value={this.state.telephone_number}/>
    <input onChange={this.handleChange} type="text" name="ein" placeholder="Employee Id Number" value={this.state.ein}/>
    <button type="submit">Sign Up</button>
    </form>)
  } else if (Number(this.state.type) === 2) {
    return (<form onSubmit={this.registerUser}>
    <input onChange={this.handleChange} type="text" name="name" placeholder="name" value={this.state.name}/>
    <input onChange={this.handleChange} type="text" name="email" placeholder="email" value={this.state.email}/>
    <input onChange={this.handleChange} type="password" name="password_digest" placeholder="password" value={this.state.password_digest}/>
    <input onChange={this.handleChange} type="text" name="address_field" placeholder="Address" value={this.state.address_field}/>
    <input onChange={this.handleChange} type="file" name="client_certificate" placeholder="" value={this.state.client_certificate}/>
    <button type="submit">Sign Up</button>
    </form>)
  } else {
    return null
  }
}

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
    client_certificate} = this.state;

    await axios.post("api/users/new", {
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

    await axios.post("api/sessions/login", {
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
      type:"",
      name:"",
      address_field:"",
      body:"",
      telephone_number:"",
      client_certificate: ""
    });
  };


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
            type="password"
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
        <form>
        <input onClick={this.handleChange} type="radio" name="type" value="1" /> Non-Profit Organization
        <input onClick={this.handleChange} type="radio" name="type" value="2" /> Food Business
        </form>
        {this.signUpform()}
        <button type="submit" onClick={this.logoutUser}>Log Out</button>
      </>
    );
  }
}

export default Testing;
