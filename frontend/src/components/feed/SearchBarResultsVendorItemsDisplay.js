import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./feedCSS/SearchBarResultsVendorItemsDisplay.css";

const SearchBarResultsVendorItemsDisplay = props => {
  return (
    <div className="search-items-wrapper">
      {/* <span className="address-text">{props.food.address_field}</span> */}
      <p>hi{props.profilePicture}</p>

      <div id="search-items-header">
        <h4 id="item-name">Food Item: </h4>
        <h4 id="weight">Weight: </h4>
        <h4 id="feeds">Feeds: </h4>
        <h4 id="pick-up">Pick Up Time: </h4>
        <div id="spacing" />
      </div>

      <div className="display-search-items-for-feed">
        <div id="search-item-name-container">
          <p>{props.food.name}</p>
        </div>
        <div id="search-item-weight-container">
          <p>{props.food.quantity * 3} pounds</p>
        </div>
        <div id="search-item-feeds-container">
          <p>{props.food.quantity} people</p>
        </div>
        <div id="search-item-pickup-container">
          <p>
            {props.converted_time === 0 || props.converted_time < 13
              ? props.converted_time + "am"
              : props.converted_time - 12 + "pm"}
          </p>
        </div>

        {/* <div className="display-claimed-items">
          <span className="display-food-name">{props.food.name}</span>
          <span> Feeds: {props.food.quantity} people</span>
          <span>({Number(props.food.quantity) * 3} pounds)</span>
          <span>
            {props.converted_time === 0 || props.converted_time < 13
              ? props.converted_time + "am"
              : props.converted_time - 12 + "pm"}
          </span> */}

        <MuiThemeProvider theme={props.theme}>
          <Button
            id={props.food.id}
            variant="contained"
            color="secondary"
            onClick={e => {
              props.claimItem(e, props.food.is_claimed);
              props.receivedOpenSnackbar();
            }}
            className={
              props.food.is_claimed ? "claimed-button" : "unclaimed-button"
            }>
            {props.food.is_claimed ? "UNCLAIM" : "CLAIM"}
          </Button>
        </MuiThemeProvider>
      </div>
    </div>
    // </div>
  );
};

export default SearchBarResultsVendorItemsDisplay;
