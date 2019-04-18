import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer.js";
import SignUpContainer from "./containers/SignUpContainer.js";
import "./App.css";
import NavBar from "./components/navBar/NavBar.js";
import Landing from "./components/landing/Landing.js";
import AboutUs from "./components/navBar/navComponents/aboutUs/AboutUs.js";
import Resources from "./components/navBar/navComponents/resources/Resources.js";
import Feed from "./components/feed/Feed.js";
import ClientProfileContainer from "./containers/ClientProfileContainer.js";
import FoodItemsContainer from "./containers/FoodItemsContainer.js";
import VendorProfileContainer from "./containers/VendorProfileContainer.js";
import FeedContainer from "./containers/FeedContainer.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="main-section">
          <Switch>
            <Route exact path="/welcome" component={Landing} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/resources" component={Resources} />
            <Route path="/user/signup" component={SignUpContainer} />
            <Route path="/user/login" component={LoginContainer} />
            <Route exact path="/client/:client" component={ClientProfileContainer} />
            <Route exact path="/vendor/:vendor" component={FoodItemsContainer} />
            <Route exact path="/feed" component={FeedContainer} />
            {/* <Route path="/vendor/:vendorName" component={VendorProfile} />
            <Route path="/client/:clientName" component={ClientProfile} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
