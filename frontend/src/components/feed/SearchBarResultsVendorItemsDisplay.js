import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const SearchBarResultsVendorItemsDisplay = props => {
  return (
    <div>
      <span className="address-text">{props.food.address_field}</span>
      <div className="display-claimed-items">
        <span className="display-food-name">{props.food.name}</span>
        <span> Feeds: {props.food.quantity} people</span>
        <span>({Number(props.food.quantity) * 3} pounds)</span>
        <span>
          {props.converted_time === 0 || props.converted_time < 13
            ? props.converted_time + "am"
            : props.converted_time - 12 + "pm"}
        </span>

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
            }
          >
            {props.food.is_claimed ? "UNCLAIM" : "CLAIM"}
          </Button>
        </MuiThemeProvider>
      </div>
    </div>
  );
};

export default SearchBarResultsVendorItemsDisplay;
