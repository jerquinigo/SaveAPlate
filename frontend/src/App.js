import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer.js";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Landing from "./components/Landing/Landing.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <LoginContainer />
        <div className="main-section">
          <Switch>
            <Route exact path="/welcome" component={Landing} />
            {/* <Route exact path="/" component={Feed} />
            <Route path="/vendor/:vendorName" component={VendorProfile} />
            <Route path="/client/:clientName" component={ClientProfile} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
