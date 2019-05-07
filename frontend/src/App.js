import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer.js";
import SignUpContainer from "./containers/SignUpContainer.js";
import "./App.css";
import NavBar from "./components/navBar/NavBar.js";
import Landing from "./components/landing/Landing.js";
import AboutUs from "./components/navBar/navComponents/aboutUs/AboutUs.js";
import Resources from "./components/navBar/navComponents/resources/Resources.js";
import Donate from "./components/navBar/navComponents/donate/Donate.js";
import ClientProfileContainer from "./containers/ClientProfileContainer.js";
import VendorProfileContainer from "./containers/VendorProfileContainer.js";
import FeedContainer from "./containers/FeedContainer.js";
import VendorProfileThruClientContainer from "./containers/VendorProfileThruClientContainer";
import LoggedInNavBarContainer from "./containers/LoggedInNavBarContainer.js";
import PrivateRoute from "./utils/AuthRouting.js";

class App extends Component {
  componentDidMount() {
    this.props.checkAuthenticateStatus();
  }

  render() {
    return (
      <div className="App">
        {this.props.currentUser.email === null ? (
          <NavBar />
        ) : (
          <LoggedInNavBarContainer />
        )}
        <div className="main-section">
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact path="/welcome" component={Landing} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/donate" component={Donate} />
            <Route path="/user/signup" component={SignUpContainer} />
            <Route path="/user/login" component={LoginContainer} />
            <PrivateRoute
              exact
              path="/client/:client"
              component={ClientProfileContainer}
            />
            <PrivateRoute
              exact
              path="/vendor/:vendor"
              component={VendorProfileContainer}
            />
            <PrivateRoute exact path="/feed" component={FeedContainer} />
            <PrivateRoute
              exact
              path="/clientview/:vendor"
              component={VendorProfileThruClientContainer}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
