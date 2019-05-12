import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import "./feedCSS/AllFeedItemsDisplayed.css";

class AllFeedItemsDisplayed extends Component {
  render() {
    return (
      <div className="vendor-items-wrapper">
        <div id="vendor-items-header">
          <h4 id="item-name">Food Item: </h4>
          <h4 id="weight">Weight: </h4>
          <h4 id="feeds">Feeds: </h4>
          <h4 id="pick-up">Pick Up Time: </h4>
          <div id="spacing" />
        </div>
        {this.props.foodDataObj[this.props.vendorName].map((food, b) => {
          return (
            <div className="vendor-items-container" key={b}>
              <div className="display-claimed-items-for-client">
                <div id="item-name-container">
                  {/* <h4 id="item-name">Food Item: </h4> */}
                  <p>{food.name}</p>
                </div>
                <div id="item-weight-container">
                  {/* <h4 id="weight">Weight: </h4> */}
                  <p>{food.quantity * 3} pounds</p>
                </div>
                <div id="item-feeds-container">
                  {/* <h4 id="feeds">Feeds: </h4> */}
                  <p>{food.quantity} people</p>
                </div>
                <div id="item-pickup-container">
                  {/* <h4 id="pick-up">Pick Up Time: </h4> */}
                  <p>
                    {this.props.converted_time === 0 ||
                    this.props.converted_time < 13
                      ? this.props.converted_time + "am"
                      : this.props.converted_time - 12 + "pm"}
                  </p>
                </div>
                <span
                  id={food.id}
                  className="span-claim-button"
                  onClick={e => {
                    this.props.claimItem(e, food.is_claimed);
                    this.props.receivedOpenSnackbar();
                  }}>
                  <MuiThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={
                        food.is_claimed ? "claimed-button" : "unclaimed-button"
                      }>
                      {food.is_claimed ? "Unclaim" : "Claim"}
                    </Button>
                  </MuiThemeProvider>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: "#5cbc5c"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default AllFeedItemsDisplayed;
