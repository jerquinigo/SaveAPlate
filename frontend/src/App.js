import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer.js";
import SignUpContainer from "./containers/SignUpContainer.js";
import "./App.css";
import NavBar from "./components/navBar/NavBar.js";
import Landing from "./components/landing/Landing.js";
import AboutUs from "./components/navBar/navComponents/aboutUs/AboutUs.js";
import Resources from "./components/navBar/navComponents/resources/Resources.js";
import ClientProfileContainer from "./containers/ClientProfileContainer.js";
import FoodItemsContainer from "./containers/FoodItemsContainer.js";
import FeedContainer from "./containers/FeedContainer.js";
import VendorProfileThruClientContainer from "./containers/VendorProfileThruClientContainer";
import LoggedInNavBarContainer from "./containers/LoggedInNavBarContainer.js";

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
            <Route path="/user/signup" component={SignUpContainer} />
            <Route path="/user/login" component={LoginContainer} />
            <Route
              exact
              path="/client/:client"
              component={ClientProfileContainer}
            />
            <Route
              exact
              path="/vendor/:vendor"
              component={FoodItemsContainer}
            />
            <Route exact path="/feed" component={FeedContainer} />
            <Route
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
