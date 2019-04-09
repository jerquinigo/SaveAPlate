import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="main-section">
          <Switch>
            <Route exact path="/welcome" component={Welcome} />
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
