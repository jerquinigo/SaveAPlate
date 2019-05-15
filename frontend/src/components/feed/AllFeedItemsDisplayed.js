import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import green from "@material-ui/core/colors/green";
import "./feedCSS/AllFeedItemsDisplayed.css";

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#D35348" },
    secondary: {
      main: "#008000"
    }
  },
  typography: {
    useNextVariants: true
  }
});

class AllFeedItemsDisplayed extends Component {
  render() {
    let converted_time;
    return (
      <div className="vendor-items-wrapper">
        <div id="vendor-items-header">
          <h4 className="vendor-item-name">Food Item </h4>
          <h4 className="vendor-weight">Weight </h4>
          <h4 className="vendor-feeds">Feeds </h4>
          <h4 className="vendor-pick-up">Pick Up Time </h4>
          <div className="vendor-spacing" />
        </div>
        {this.props.foodDataObj[this.props.vendorName].map((food, b) => {
          converted_time = Number(food.set_time.slice(0, 2));
          return (
            <div className="vendor-items-container" key={b}>
              <div className="display-claimed-items-for-client">
                <div id="item-name-container">
                  <p>{food.name}</p>
                </div>
                <div id="item-weight-container">
                  <p>{food.quantity * 3} pounds</p>
                </div>
                <div id="item-feeds-container">
                  <p>{food.quantity} people</p>
                </div>
                <div id="item-pickup-container">
                  <p>
                    {converted_time < 13 && converted_time !== 0
                      ? converted_time + "am"
                      : converted_time === 0
                      ? 12 + "am"
                      : converted_time - 12 + "pm"}
                  </p>
                </div>
                <span
                  id={food.id}
                  className="span-claim-button"
                  onClick={e => {
                    this.props.claimItem(e, food.is_claimed);
                    this.props.receivedOpenSnackbar();
                  }}
                >
                  <MuiThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={
                        food.is_claimed ? "claimed-button" : "unclaimed-button"
                      }
                    >
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

export default AllFeedItemsDisplayed;
