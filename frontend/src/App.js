import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TestingContainer from './containers/TestingContainer.js'
import "./App.css";
import NavBar from "./components/NavBar.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <TestingContainer />
        <div className="main-section">
          <Switch>
            {/* <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/" component={Feed} />
            <Route path="/vendor/:vendorName" component={VendorProfile} />
            <Route path="/client/:clientName" component={ClientProfile} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
