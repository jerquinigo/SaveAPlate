import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

// will need to apply the search object filter here just like all the others to get it to work to group
export const SearchBarResults = props => {
  let searchDataObj = {};
  let converted_time;
  if (props.userSearchResults.length > 0) {
    let searchResults = props.userSearchResults.filter(result => {
      return result.is_claimed !== true;
    });
    // eslint-disable-next-line
    searchResults.map((results, i) => {
      if (!searchDataObj[results.vendor_name]) {
        searchDataObj[results.vendor_name] = [results];
      } else if (searchDataObj[results.vendor_name]) {
        searchDataObj[results.vendor_name].push(results);
      }
      converted_time = Number(results.set_time.slice(0, 2));
    });
    let vendorNameArr = Object.keys(searchDataObj);

    let vendorName = vendorNameArr.map((vendorName, a) => {
      return (
        <div key="a">
          <span>
            <Link to={"/clientview/" + vendorName}>
              <strong>{vendorName}</strong>{" "}
            </Link>
          </span>

          <div className="vendorItemsWrapper">
            {searchDataObj[vendorName].map((food, b) => {
              return (
                <div className="vendorItemsContainer" key={b}>
                  <span>{food.address_field}</span>
                  <span>{food.telephone_number}</span>
                  <span>{food.name}</span>
                  <span> Feeds: {food.quantity} people</span>
                  <span>({Number(food.quantity) * 3} pounds)</span>
                  <span>
                    {converted_time === 0 || converted_time < 13
                      ? converted_time + "am"
                      : converted_time - 12 + "pm"}
                  </span>

                  <MuiThemeProvider theme={theme}>
                    <Button
                      id={food.id}
                      variant="contained"
                      color="secondary"
                      onClick={e => {
                        props.claimItem(e, food.is_claimed);
                        props.receivedOpenSnackbar();
                      }}
                      className={
                        food.is_claimed ? "claimed-button" : "unclaimed-button"
                      }
                    >
                      {food.is_claimed ? "UNCLAIM" : "CLAIM"}
                    </Button>
                  </MuiThemeProvider>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
    return vendorName;
  }
};

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
